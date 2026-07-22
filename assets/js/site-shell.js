(() => {
  const inject = async (selector, path) => {
    const target = document.querySelector(selector);
    if (!target) return;
    try { target.innerHTML = await (await fetch(path)).text(); }
    catch { target.innerHTML = '<p class="shell-error">Navigation is temporarily unavailable.</p>'; }
  };
  inject('[data-site-header]', '/partials/header.html');
  inject('[data-site-footer]', '/partials/footer.html');
})();
