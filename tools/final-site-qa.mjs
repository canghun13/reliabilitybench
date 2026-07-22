import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = process.cwd();
const errors = [];
const walk = dir => readdirSync(dir,{withFileTypes:true}).flatMap(entry => entry.isDirectory() && !['.git','assets','partials'].includes(entry.name) ? walk(join(dir,entry.name)) : entry.isFile() && entry.name.endsWith('.html') ? [join(dir,entry.name)] : []);
const pages = walk(root);
const indexable = pages.filter(file => !file.endsWith('404.html'));
const canonicalFor = file => { const path = relative(root,file).replaceAll('\\','/'); return path === 'index.html' ? 'https://reliabilitybench.com/' : path.endsWith('/index.html') ? `https://reliabilitybench.com/${path.slice(0,-10)}` : `https://reliabilitybench.com/${path}`; };
const localFor = href => { const clean = href.split('#')[0].split('?')[0]; if (!clean || !clean.startsWith('/')) return null; const absolute = join(root,clean.slice(1)); return clean.endsWith('/') ? join(absolute,'index.html') : absolute; };
const titles = new Map(), descriptions = new Map(), pageLinks = new Map();
const voidTags = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr']);
const tagStructureOk = html => { const stack=[]; const stripped=html.replace(/<script\b[^>]*>[\s\S]*?<\/script>|<style\b[^>]*>[\s\S]*?<\/style>|<!--[^]*?-->/gi,''); for(const match of stripped.matchAll(/<\/?([a-z][\w:-]*)(?:\s[^<>]*?)?\s*\/?>/gi)){const full=match[0], tag=match[1].toLowerCase(); if(voidTags.has(tag)||full.endsWith('/>')) continue; if(full.startsWith('</')){if(stack.pop()!==tag) return false;} else stack.push(tag);} return stack.length===0; };
for(const file of pages){
  const html=readFileSync(file,'utf8'), rel=relative(root,file), title=(html.match(/<title>([^<]+)<\/title>/i)||[])[1], description=(html.match(/<meta name="description" content="([^"]+)"/i)||[])[1], canonical=(html.match(/<link rel="canonical" href="([^"]+)"/i)||[])[1];
  if(!tagStructureOk(html)) errors.push(`${rel}: malformed or mis-nested HTML tags`);
  if((html.match(/<a\b/gi)||[]).length !== (html.match(/<\/a>/gi)||[]).length) errors.push(`${rel}: unclosed/mis-nested anchor`);
  if(!title||!description||!canonical) errors.push(`${rel}: title, description, or canonical missing`);
  if(canonical !== canonicalFor(file)) errors.push(`${rel}: wrong canonical (${canonical||'missing'})`);
  if(!/<meta name="robots" content="[^"]+"/i.test(html)) errors.push(`${rel}: robots meta missing`);
  for(const property of ['og:type','og:title','og:description','og:url']) if(!new RegExp(`<meta property="${property}" content="[^"]+"`,'i').test(html) && !file.endsWith('404.html')) errors.push(`${rel}: ${property} missing`);
  if(!/<link rel="icon" href="\/assets\/icons\/favicon\.svg"/i.test(html)) errors.push(`${rel}: favicon link missing or wrong`);
  if((html.match(/googletagmanager\.com\/gtag\/js\?id=G-6Z73P5MMNS/g)||[]).length!==1 || (html.match(/gtag\('config','G-6Z73P5MMNS'\)/g)||[]).length!==1) errors.push(`${rel}: GA4 missing, duplicated, or malformed`);
  if(title){if(titles.has(title)) errors.push(`${rel}: duplicate title with ${titles.get(title)}`);titles.set(title,rel);} if(description){if(descriptions.has(description)) errors.push(`${rel}: duplicate description with ${descriptions.get(description)}`);descriptions.set(description,rel);}
  const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(match=>match[1]); if(new Set(ids).size!==ids.length) errors.push(`${rel}: duplicate IDs`);
  const visible=html.replace(/<[^>]*>/g,' '); if(/\.html">/.test(visible)) errors.push(`${rel}: exposed broken anchor markup`);
  for(const match of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/gi)){try{JSON.parse(match[1]);}catch{errors.push(`${rel}: invalid JSON-LD`);}}
  const links=[]; for(const match of html.matchAll(/(?:href|src)="(\/[^"]+)"/g)){const href=match[1], local=localFor(href);if(local){links.push(local);if(!existsSync(local)) errors.push(`${rel}: broken local link ${href}`);}} pageLinks.set(file,links);
  if(!html.includes('data-site-header')||!html.includes('data-site-footer')||!html.includes('/assets/js/site-shell.js')) errors.push(`${rel}: partial shell hook missing`);
}
const header=readFileSync(join(root,'partials/header.html'),'utf8'), footer=readFileSync(join(root,'partials/footer.html'),'utf8'), shell=readFileSync(join(root,'assets/js/site-shell.js'),'utf8');
if(!tagStructureOk(`<html><body>${header}${footer}</body></html>`)) errors.push('partials: malformed tag structure');
if(!shell.includes("/partials/header.html")||!shell.includes("/partials/footer.html")) errors.push('site-shell: partial insertion path missing');
if(!existsSync(join(root,'assets/icons/favicon.svg'))||!header.includes('/assets/icons/favicon.svg')) errors.push('logo/favicon asset or header path missing');
const siteLinks=[...header.matchAll(/href="(\/[^"]+)"/g),...footer.matchAll(/href="(\/[^"]+)"/g)].map(match=>localFor(match[1])).filter(Boolean); const reachable=new Set([join(root,'index.html')]); const queue=[join(root,'index.html')];
while(queue.length){const next=queue.shift();for(const target of [...(pageLinks.get(next)||[]),...siteLinks]) if(existsSync(target)&&!reachable.has(target)){reachable.add(target);queue.push(target);}}
for(const page of indexable) if(!reachable.has(page)) errors.push(`${relative(root,page)}: orphan public page`);
const sitemap=readFileSync(join(root,'sitemap.xml'),'utf8'), sitemapUrls=[...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match=>match[1]); for(const page of indexable){const url=canonicalFor(page);if(!sitemapUrls.includes(url)) errors.push(`sitemap missing ${url}`);} for(const url of sitemapUrls)if(!indexable.some(page=>canonicalFor(page)===url))errors.push(`sitemap dead or extra URL ${url}`);
const robots=readFileSync(join(root,'robots.txt'),'utf8'), llms=readFileSync(join(root,'llms.txt'),'utf8'), cname=readFileSync(join(root,'CNAME'),'utf8').trim();
if(!/User-agent:\s*\*/i.test(robots)||!robots.includes('https://reliabilitybench.com/sitemap.xml')) errors.push('robots.txt missing crawl or sitemap directive');
if(!llms.includes('https://reliabilitybench.com/')||llms.length<200) errors.push('llms.txt missing site context'); if(cname!=='reliabilitybench.com') errors.push(`CNAME changed: ${cname}`);
console.log(`Final site QA scanned ${pages.length} public HTML pages; ${indexable.length} indexable pages; ${sitemapUrls.length} sitemap URLs.`); if(errors.length){console.error(errors.join('\n'));process.exit(1);} console.log('PASS: structure, SEO, metadata, JSON-LD, links, partials, sitemap, robots, llms, CNAME, GA4, and favicon paths.');
