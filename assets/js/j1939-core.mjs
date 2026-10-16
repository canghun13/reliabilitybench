// Passive, bounded capture analysis. No device access or proprietary PGN database.
export const LIMITS = Object.freeze({ characters: 500000, frames: 5000 });
export const hex = (number, width = 2) => Number(number).toString(16).toUpperCase().padStart(width, '0');
export const bytesHex = bytes => bytes.map(byte => hex(byte)).join(' ');

export function canId(raw) {
  const token = String(raw).trim();
  if (!/^(?:0x)?[\da-f]{1,8}$/i.test(token)) throw new Error('CAN ID must be 1–8 hexadecimal digits, optionally prefixed with 0x.');
  const id = Number.parseInt(token.replace(/^0x/i, ''), 16);
  if (id > 0x1FFFFFFF) throw new Error('CAN ID exceeds 29 bits. Remove logger flags only after checking the export format.');
  const pf = (id >>> 16) & 255, ps = (id >>> 8) & 255;
  const pdu1 = pf < 240;
  const pgn = (id >>> 8) & (pdu1 ? 0x3FF00 : 0x3FFFF);
  return { id, priority: id >>> 26, reserved: (id >>> 25) & 1, dp: (id >>> 24) & 1, pf, ps, sa: id & 255, pdu1, pgn };
}

export function hexBytes(raw, maximum = 1785) {
  const text = String(raw).trim();
  if (!text) throw new Error('Enter hexadecimal data bytes.');
  let parts;
  if (/^(?:0x)?[\da-f]+$/i.test(text)) {
    const compact = text.replace(/^0x/i, '');
    if (compact.length % 2) throw new Error('Each data byte needs exactly two hex digits.');
    parts = compact.match(/../g);
  } else {
    parts = text.split(/[\s,]+/);
    if (parts.some(part => !/^(?:0x)?[\da-f]{2}$/i.test(part))) throw new Error('Use two-digit hex bytes separated by spaces or commas, or one compact hex string.');
  }
  if (parts.length > maximum) throw new Error(`At most ${maximum} bytes are supported.`);
  return parts.map(part => Number.parseInt(part.replace(/^0x/i, ''), 16));
}

export function filterCheck(target, comparisons, options = {}) {
  const base = canId(target);
  if (options.destination && !base.pdu1) throw new Error('Destination matching is only meaningful for PDU1. PDU2 PS is already part of the PGN.');
  let mask = base.pdu1 ? 0x03FF0000 : 0x03FFFF00;
  if (options.source) mask |= 0xFF;
  if (options.destination) mask |= 0xFF00;
  if (options.priority) mask |= 0x1C000000;
  const tokens = String(comparisons).trim().split(/[\s,]+/).filter(Boolean);
  if (!tokens.length || tokens.length > 240) throw new Error('Enter 1–240 comparison CAN IDs.');
  const value = base.id & mask;
  const rows = tokens.map(token => {
    const fields = canId(token);
    const differences = [];
    if (fields.pgn !== base.pgn) differences.push('PGN');
    if (options.source && fields.sa !== base.sa) differences.push('source');
    if (options.priority && fields.priority !== base.priority) differences.push('priority');
    if (options.destination && fields.ps !== base.ps) differences.push('destination');
    return { canId: hex(fields.id, 8), pgn: fields.pgn, source: hex(fields.sa), priority: fields.priority, ps: hex(fields.ps), matches: (fields.id & mask) === value, differences: differences.join(', ') || 'none' };
  });
  return { base, mask: hex(mask, 8), value: hex(value, 8), matches: rows.filter(row => row.matches).length, rows };
}

export function diagnosticPayload(raw) {
  const bytes = hexBytes(raw);
  let data = bytes;
  let padding = 0;
  if (bytes.length === 8) {
    if (bytes[6] !== 255 || bytes[7] !== 255) throw new Error('An 8-byte single-frame DM1/DM2 needs two trailing FF padding bytes. Do not paste TP.DT sequence bytes.');
    data = bytes.slice(0, 6); padding = 2;
  }
  if (data.length < 6 || (data.length - 2) % 4 !== 0) throw new Error('Expected two lamp bytes plus whole 4-byte DTC records (6, 10, 14… bytes), or a padded 8-byte single frame.');
  const lamps = ['Malfunction indicator', 'Red stop', 'Amber warning', 'Protect'].map((name, index) => {
    const shift = 6 - index * 2;
    const status = (data[0] >>> shift) & 3, flash = (data[1] >>> shift) & 3;
    return { name, status, statusText: ['Off', 'On', 'Reserved', 'Not available'][status], flash, flashText: ['Slow flash (1 Hz)', 'Fast flash (2 Hz)', 'Reserved', 'No flash / unavailable'][flash] };
  });
  const codes = [], warnings = [];
  for (let offset = 2; offset < data.length; offset += 4) {
    const part = data.slice(offset, offset + 4);
    if (part.every(byte => byte === 0)) {
      if (data.length !== 6) warnings.push(`Zero no-DTC marker at record ${(offset - 2) / 4 + 1} mixed with other records; review source.`);
      continue;
    }
    const cm = part[3] >>> 7;
    const unavailable = part.every(byte => byte === 255);
    codes.push({ record: (offset - 2) / 4 + 1, bytes: bytesHex(part), spn: cm || unavailable ? null : part[0] + part[1] * 256 + (part[2] >>> 5) * 65536, fmi: part[2] & 31, oc: (part[3] & 127) === 127 ? null : part[3] & 127, cm, note: unavailable ? 'All FF: unavailable record; no SPN interpretation' : cm ? 'Legacy CM=1: SPN not interpreted' : 'Current CM=0 bit layout' });
  }
  if (codes.some(code => code.cm)) warnings.push('CM=1 needs the equipment’s legacy conversion method; a current-layout SPN is deliberately withheld.');
  if (codes.some(code => code.oc === null)) warnings.push('OC=127 means not available, not 127 confirmed occurrences.');
  if (lamps.some(lamp => lamp.status === 2 || lamp.flash === 2)) warnings.push('Reserved lamp field present; do not infer a dashboard state.');
  return { length: bytes.length, padding, lamps, codes, warnings, noDtcMarker: data.length === 6 && data.slice(2).every(byte => byte === 0) };
}

// RFC-style quoting within a line; embedded newlines are intentionally unsupported.
function csvLine(line, row) {
  const cells = []; let cell = '', quoted = false, ended = false;
  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (quoted) {
      if (char === '"' && line[i + 1] === '"') { cell += '"'; i += 1; }
      else if (char === '"') { quoted = false; ended = true; }
      else cell += char;
    } else if (char === ',') { cells.push(cell.trim()); cell = ''; ended = false; }
    else if (char === '"' && cell === '' && !ended) quoted = true;
    else if (ended && !/\s/.test(char)) throw new Error(`Row ${row}: text after closing CSV quote.`);
    else if (char === '"') throw new Error(`Row ${row}: misplaced CSV quote.`);
    else cell += char;
  }
  if (quoted) throw new Error(`Row ${row}: unclosed quote or embedded newline.`);
  cells.push(cell.trim()); return cells;
}

export function capture(raw) {
  const input = String(raw).replace(/^\uFEFF/, '');
  if (input.length > LIMITS.characters) throw new Error('Capture exceeds 500,000 characters. Export a smaller incident window.');
  const lines = input.split(/\r?\n/).map((text, index) => ({ text: text.trim(), row: index + 1 })).filter(line => line.text);
  if (!lines.length) throw new Error('Paste an extended-ID candump log or id,data CSV.');
  const csv = /^"?(?:id|data|bus|time)"?\s*,/i.test(lines[0].text);
  let headers;
  if (csv) {
    headers = csvLine(lines.shift().text, 1).map(value => value.toLowerCase());
    if (new Set(headers).size !== headers.length || !headers.includes('id') || !headers.includes('data') || headers.some(name => !['id', 'data', 'bus', 'time'].includes(name))) throw new Error('CSV header must include id,data; only bus,time are optional. No duplicate headers.');
  }
  if (!lines.length || lines.length > LIMITS.frames) throw new Error('Enter 1–5,000 data rows.');
  const warnings = [], lastTimes = new Map();
  const frames = lines.map(({ text, row }) => {
    let idText, dataText, bus = 'capture', time = null;
    if (csv) {
      const cells = csvLine(text, row);
      if (cells.length !== headers.length) throw new Error(`Row ${row}: expected ${headers.length} columns.`);
      const values = Object.fromEntries(headers.map((name, index) => [name, cells[index]]));
      idText = values.id; dataText = values.data;
      if ('bus' in values) bus = values.bus;
      if ('time' in values) {
        if (!/^\d+(?:\.\d+)?$/.test(values.time) || !Number.isFinite(Number(values.time))) throw new Error(`Row ${row}: time must be nonnegative finite seconds, not a date string or blank.`);
        time = Number(values.time);
      }
    } else {
      const match = text.match(/^(?:\((\d+(?:\.\d+)?)\)\s+)?([\w.-]{1,32})\s+([\da-f]{8})#([\da-f]*)$/i);
      if (!match) throw new Error(`Row ${row}: use (seconds) can0 18ECFF00#200A0002FFCAFE00, or id,data CSV. Classical extended frames only; no FD/RTR/ASC.`);
      time = match[1] == null ? null : Number(match[1]); bus = match[2]; idText = match[3]; dataText = match[4];
      if (time !== null && !Number.isFinite(time)) throw new Error(`Row ${row}: timestamp is not finite.`);
    }
    if (!/^[\w.-]{1,32}$/.test(bus)) throw new Error(`Row ${row}: bus must be 1–32 letters, digits, underscores, dots or hyphens.`);
    let fields, bytes;
    try { fields = canId(idText); bytes = dataText.trim() === '' ? [] : hexBytes(dataText, 8); }
    catch (error) { throw new Error(`Row ${row}: ${error.message}`); }
    if (time !== null) {
      if (lastTimes.has(bus) && time < lastTimes.get(bus)) warnings.push(`Row ${row}: timestamp decreases on ${bus}; input order retained.`);
      lastTimes.set(bus, time);
    }
    return { ...fields, bytes, bus, time, row };
  });
  return { frames, warnings };
}

export function bamAudit(raw) {
  const parsed = capture(raw), sessions = [], active = new Map(), events = [];
  let ignored = 0, unsupported = 0;
  for (const frame of parsed.frames) {
    const key = `${frame.bus}:${frame.sa}`;
    if (![0xEC00, 0xEB00].includes(frame.pgn)) { ignored += 1; continue; }
    if (frame.ps !== 255) { unsupported += 1; continue; }
    if (frame.bytes.length !== 8) throw new Error(`Row ${frame.row}: broadcast TP frame must have 8 bytes.`);
    if (frame.pgn === 0xEC00) {
      const previous = active.get(key);
      if (previous) {
        if (previous.packets.size !== previous.count) previous.issues.push(`Interrupted by TP.CM at row ${frame.row}`);
        active.delete(key);
      }
      if (frame.bytes[0] !== 32) { unsupported += 1; events.push(`Row ${frame.row}: unsupported broadcast TP.CM control ${hex(frame.bytes[0])}.`); continue; }
      const length = frame.bytes[1] + frame.bytes[2] * 256, count = frame.bytes[3];
      const pgn = frame.bytes[5] + frame.bytes[6] * 256 + frame.bytes[7] * 65536;
      const session = { bus: frame.bus, source: hex(frame.sa), startRow: frame.row, endRow: frame.row, pgn, length, count, packets: new Map(), next: 1, issues: [] };
      if (length < 9 || length > 1785 || count < 2 || count !== Math.ceil(length / 7)) session.issues.push('Announced byte length and packet count are inconsistent or outside BAM bounds');
      if (frame.bytes[4] !== 255) session.issues.push('Reserved announcement byte is not FF');
      if (pgn > 0x3FFFF || (((pgn >>> 8) & 255) < 240 && (pgn & 255) !== 0)) session.issues.push('Target PGN exceeds 18 bits or has a nonzero PDU1 low byte');
      if (frame.sa >= 254) session.issues.push('Null/global source address is not a valid BAM sender');
      sessions.push(session); active.set(key, session);
    } else {
      const session = active.get(key);
      if (!session) { events.push(`Row ${frame.row}: orphan TP.DT on ${frame.bus}, source ${hex(frame.sa)}.`); continue; }
      const sequence = frame.bytes[0]; session.endRow = frame.row;
      if (sequence < 1 || sequence > session.count) { session.issues.push(`Row ${frame.row}: sequence ${sequence} outside 1–${session.count}`); continue; }
      if (session.packets.has(sequence)) { session.issues.push(`Row ${frame.row}: duplicate sequence ${sequence}`); continue; }
      if (sequence !== session.next) session.issues.push(`Row ${frame.row}: expected sequence ${session.next}, observed ${sequence}`);
      session.packets.set(sequence, frame.bytes.slice(1)); session.next = sequence + 1;
    }
  }
  return {
    frames: parsed.frames.length, ignored, unsupported, events, warnings: parsed.warnings,
    sessions: sessions.map(session => {
      const missing = Array.from({ length: session.count }, (_, index) => index + 1).filter(sequence => !session.packets.has(sequence));
      const issues = [...session.issues];
      if (missing.length) issues.push(`Missing sequence: ${missing.join(', ')}`);
      let payload = null;
      if (!issues.length) {
        const joined = Array.from({ length: session.count }, (_, index) => session.packets.get(index + 1)).flat();
        if (joined.slice(session.length).some(byte => byte !== 255)) issues.push('Final-packet padding contains non-FF bytes');
        else payload = bytesHex(joined.slice(0, session.length));
      }
      return { bus: session.bus, source: session.source, startRow: session.startRow, endRow: session.endRow, pgn: session.pgn, length: session.length, announcedPackets: session.count, receivedPackets: session.packets.size, missing, status: payload === null ? 'Review — payload withheld' : 'Complete in this capture', issues, payload };
    })
  };
}

export function decodeName(bytes) {
  if (bytes.length !== 8) throw new Error('NAME requires 8 bytes.');
  const value = bytes.reduce((total, byte, index) => total | (BigInt(byte) << BigInt(index * 8)), 0n);
  const field = (shift, mask) => Number((value >> BigInt(shift)) & BigInt(mask));
  return { name: value.toString(16).toUpperCase().padStart(16, '0'), identity: field(0, 0x1FFFFF), manufacturer: field(21, 0x7FF), ecuInstance: field(32, 7), functionInstance: field(35, 31), function: field(40, 255), reserved: field(48, 1), vehicleSystem: field(49, 127), vehicleSystemInstance: field(56, 15), industryGroup: field(60, 7), arbitraryAddressCapable: field(63, 1) };
}

export function claimAudit(raw) {
  const parsed = capture(raw), claims = [], groups = new Map(), identities = new Map(), warnings = [...parsed.warnings];
  let ignored = 0;
  for (const frame of parsed.frames) {
    if (frame.pgn !== 0xEE00) { ignored += 1; continue; }
    if (frame.bytes.length !== 8) throw new Error(`Row ${frame.row}: Address Claimed NAME must contain exactly 8 bytes.`);
    const decoded = decodeName(frame.bytes);
    const claim = { row: frame.row, time: frame.time, bus: frame.bus, source: hex(frame.sa), destination: hex(frame.ps), ...decoded, kind: frame.sa === 255 ? 'Invalid global source' : frame.ps !== 255 ? 'Non-global destination — review' : frame.sa === 254 ? 'Cannot Claim' : 'Claim observed' };
    claims.push(claim);
    if (frame.ps !== 255 || frame.sa === 255) { warnings.push(`Row ${frame.row}: non-global claim destination or global source; excluded from address groups.`); continue; }
    if (decoded.reserved || decoded.name === 'FFFFFFFFFFFFFFFF') warnings.push(`Row ${frame.row}: reserved NAME field or all-FF NAME; verify the raw bytes.`);
    if (frame.sa === 254) continue;
    const groupKey = `${frame.bus}:${frame.sa}`, identityKey = `${frame.bus}:${decoded.name}`;
    if (!groups.has(groupKey)) groups.set(groupKey, { bus: frame.bus, source: hex(frame.sa), names: new Set(), rows: [] });
    groups.get(groupKey).names.add(decoded.name); groups.get(groupKey).rows.push(frame.row);
    if (!identities.has(identityKey)) identities.set(identityKey, { bus: frame.bus, name: decoded.name, addresses: new Set(), rows: [] });
    identities.get(identityKey).addresses.add(hex(frame.sa)); identities.get(identityKey).rows.push(frame.row);
  }
  return { frames: parsed.frames.length, ignored, claims, warnings, cannotClaim: claims.filter(claim => claim.kind === 'Cannot Claim').length,
    groups: [...groups.values()].map(group => ({ ...group, names: [...group.names].sort(), potentialConflict: group.names.size > 1, lowestObservedName: [...group.names].sort()[0] })),
    movements: [...identities.values()].filter(identity => identity.addresses.size > 1).map(identity => ({ ...identity, addresses: [...identity.addresses] })) };
}
