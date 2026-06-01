const XLSX = require('xlsx');
const path = require('path');

// ============================================================
// Generate Excel with NATIVE DATE CELLS (not text strings)
// This simulates real-world Excel exports where dates are stored
// as actual Excel date values, not plain text.
// ============================================================

const wb = XLSX.utils.book_new();

// Helper: create a worksheet with native date cells
function createSheetWithDates(headers, rows) {
  const ws = {};
  const range = { s: { c: 0, r: 0 }, e: { c: headers.length - 1, r: rows.length } };

  // Write headers
  headers.forEach((h, c) => {
    ws[XLSX.utils.encode_cell({ c, r: 0 })] = { v: h, t: 's' };
  });

  // Write rows
  rows.forEach((row, ri) => {
    headers.forEach((h, c) => {
      const val = row[h];
      let cell;
      // If value looks like a date string, store as a native date cell
      if (typeof val === 'string' && /^\d{4}-\d{2}-\d{2}/.test(val)) {
        const d = new Date(val + 'Z'); // Force UTC
        const serial = (d.getTime() / 86400000) + 25569;
        cell = { v: serial, t: 'n', z: 'yyyy-mm-dd hh:mm:ss' };
      } else if (typeof val === 'number') {
        cell = { v: val, t: 'n' };
      } else {
        cell = { v: val || '', t: 's' };
      }
      ws[XLSX.utils.encode_cell({ c, r: ri + 1 })] = cell;
    });
  });

  ws['!ref'] = XLSX.utils.encode_range(range);
  return ws;
}

// Sheet 1
const volHeaders = ['ATTACK NAME', 'ATTACK TOTAL VOLUME (BYTE)'];
const volRows = [
  { 'ATTACK NAME': 'SYN Flood', 'ATTACK TOTAL VOLUME (BYTE)': 5368709120 },
  { 'ATTACK NAME': 'UDP Amplification', 'ATTACK TOTAL VOLUME (BYTE)': 10737418240 },
  { 'ATTACK NAME': 'DNS Reflection', 'ATTACK TOTAL VOLUME (BYTE)': 2147483648 },
];
XLSX.utils.book_append_sheet(wb, createSheetWithDates(volHeaders, volRows), 'DDoS_Volume');

// Sheet 2 (dates stored as native Excel date numbers)
const appHeaders = ['ACTION', 'TIME', 'APPLICATION NAME', 'SOURCE', 'ATTACK NAME', 'SEVERITY', 'ATTACK ID', 'ACCOUNT NAME', 'DESTINATION'];
const appRows = [
  { 'ACTION': 'Block', 'TIME': '2025-03-15 14:30:00', 'APPLICATION NAME': 'WebApp-Prod', 'SOURCE': '192.168.1.100', 'ATTACK NAME': 'SQL Injection', 'SEVERITY': 'Critical', 'ATTACK ID': 'ATK-001', 'ACCOUNT NAME': 'Acme Corp', 'DESTINATION': '10.0.0.5' },
  { 'ACTION': 'Alert', 'TIME': '2025-03-15 15:45:00', 'APPLICATION NAME': 'API-Gateway', 'SOURCE': '172.16.0.50', 'ATTACK NAME': 'XSS Attack', 'SEVERITY': 'High', 'ATTACK ID': 'ATK-002', 'ACCOUNT NAME': 'Acme Corp', 'DESTINATION': '10.0.0.10' },
];
XLSX.utils.book_append_sheet(wb, createSheetWithDates(appHeaders, appRows), 'App_Protection');

// Sheet 3 (dates stored as native Excel date numbers)
const infraHeaders = ['START DATE', 'END DATE', 'TYPE', 'SEVERITY', 'ATTACK NAME', 'CATEGORY', 'SOURCE', 'ACCOUNT', 'SITE', 'ASSET NAME', 'SOURCE IP ADDRESS', 'SOURCE PORT', 'DESTINATION IP ADDRESS'];
const infraRows = [
  { 'START DATE': '2025-03-15 10:00:00', 'END DATE': '2025-03-15 10:45:00', 'TYPE': 'Network', 'SEVERITY': 'Critical', 'ATTACK NAME': 'SYN Flood', 'CATEGORY': 'Volumetric', 'SOURCE': 'External', 'ACCOUNT': 'Acme Corp', 'SITE': 'US-East', 'ASSET NAME': 'LB-Primary', 'SOURCE IP ADDRESS': '203.0.113.1', 'SOURCE PORT': '12345', 'DESTINATION IP ADDRESS': '10.0.0.1' },
  { 'START DATE': '2025-03-16 18:00:00', 'END DATE': '2025-03-16 18:20:00', 'TYPE': 'Application', 'SEVERITY': 'High', 'ATTACK NAME': 'HTTP Flood', 'CATEGORY': 'App Layer', 'SOURCE': 'External', 'ACCOUNT': 'Beta Inc', 'SITE': 'EU-West', 'ASSET NAME': 'Web-01', 'SOURCE IP ADDRESS': '198.51.100.5', 'SOURCE PORT': '443', 'DESTINATION IP ADDRESS': '10.0.1.1' },
];
XLSX.utils.book_append_sheet(wb, createSheetWithDates(infraHeaders, infraRows), 'Infra_Protection');

const outputPath = path.join(__dirname, 'test_native_dates.xlsx');
XLSX.writeFile(wb, outputPath);
console.log(`✅ Native-dates Excel created: ${outputPath}`);

// ============================================================
// Now test reading with cellDates: true (what the dashboard uses)
// ============================================================
const fs = require('fs');
const buf = new Uint8Array(fs.readFileSync(outputPath));

console.log('\n━━━ Reading with cellDates: true ━━━');
const wb2 = XLSX.read(buf, { type: 'array', cellDates: true });
wb2.SheetNames.forEach(name => {
  const json = XLSX.utils.sheet_to_json(wb2.Sheets[name], { defval: '' });
  console.log(`\n  Sheet "${name}" → ${json.length} rows`);
  if (json.length > 0) {
    Object.entries(json[0]).forEach(([k, v]) => {
      console.log(`    "${k}" = ${JSON.stringify(v)} (${typeof v}${v instanceof Date ? ' [Date obj]' : ''})`);
    });
  }
});

console.log('\n━━━ Reading with cellDates: false (raw serial numbers) ━━━');
const wb3 = XLSX.read(buf, { type: 'array', cellDates: false });
wb3.SheetNames.forEach(name => {
  const json = XLSX.utils.sheet_to_json(wb3.Sheets[name], { defval: '' });
  console.log(`\n  Sheet "${name}" → ${json.length} rows`);
  if (json.length > 0) {
    Object.entries(json[0]).forEach(([k, v]) => {
      console.log(`    "${k}" = ${JSON.stringify(v)} (${typeof v})`);
    });
  }
});

console.log('\n━━━ Reading with raw: false (formatted strings) ━━━');
const wb4 = XLSX.read(buf, { type: 'array', cellDates: false, raw: false });
wb4.SheetNames.forEach(name => {
  const json = XLSX.utils.sheet_to_json(wb4.Sheets[name], { defval: '' });
  console.log(`\n  Sheet "${name}" → ${json.length} rows`);
  if (json.length > 0) {
    Object.entries(json[0]).forEach(([k, v]) => {
      console.log(`    "${k}" = ${JSON.stringify(v)} (${typeof v})`);
    });
  }
});

// Test the toUTC4 function against cellDates: true Date objects
console.log('\n━━━ Testing toUTC4 with Date objects from cellDates:true ━━━');
function toUTC4(raw) {
  if (!raw) return '—';
  let d;
  if (typeof raw === 'number') {
    d = new Date(Math.round((raw - 25569) * 86400000));
  } else if (raw instanceof Date) {
    d = raw;
  } else {
    const s = String(raw).trim();
    d = new Date(s.includes('T') ? s : s.replace(' ', 'T') + 'Z');
  }
  if (isNaN(d.getTime())) return `INVALID: ${raw}`;
  const utc4 = new Date(d.getTime() - 4 * 3600000);
  const pad = (n) => String(n).padStart(2, '0');
  return `${utc4.getUTCFullYear()}-${pad(utc4.getUTCMonth() + 1)}-${pad(utc4.getUTCDate())} ${pad(utc4.getUTCHours())}:${pad(utc4.getUTCMinutes())}:${pad(utc4.getUTCSeconds())} UTC-4`;
}

const appSheet2 = XLSX.utils.sheet_to_json(wb2.Sheets['App_Protection'], { defval: '' });
const timeVal = appSheet2[0]['TIME'];
console.log(`  cellDates:true  → TIME = ${JSON.stringify(timeVal)} (${typeof timeVal}${timeVal instanceof Date ? ' [Date]' : ''})`);
console.log(`  toUTC4(TIME) = ${toUTC4(timeVal)}`);

// BIG PROBLEM: With cellDates:true, Date objects use LOCAL timezone
// In browser, Date(serial) may add local TZ offset, causing double-conversion
if (timeVal instanceof Date) {
  console.log(`\n  ⚠️  Date.toString() = ${timeVal.toString()}`);
  console.log(`  ⚠️  Date.toISOString() = ${timeVal.toISOString()}`);
  console.log(`  ⚠️  Date.getTimezoneOffset() = ${timeVal.getTimezoneOffset()} minutes`);
  console.log(`  ⚠️  The issue: cellDates:true returns Date objects interpreted in LOCAL timezone.`);
  console.log(`      In a browser with TZ offset != 0, this causes incorrect UTC conversion.`);
}

const appSheet3 = XLSX.utils.sheet_to_json(wb3.Sheets['App_Protection'], { defval: '' });
const timeVal3 = appSheet3[0]['TIME'];
console.log(`\n  cellDates:false → TIME = ${JSON.stringify(timeVal3)} (${typeof timeVal3})`);
console.log(`  toUTC4(TIME) = ${toUTC4(timeVal3)}`);

const appSheet4 = XLSX.utils.sheet_to_json(wb4.Sheets['App_Protection'], { defval: '' });
const timeVal4 = appSheet4[0]['TIME'];
console.log(`\n  raw:false       → TIME = ${JSON.stringify(timeVal4)} (${typeof timeVal4})`);
console.log(`  toUTC4(TIME) = ${toUTC4(timeVal4)}`);

console.log('\n\n━━━ CONCLUSION ━━━');
console.log('The safest approach is: cellDates:false, raw:false');
console.log('This returns dates as formatted strings like "2025-03-15 14:30:00"');
console.log('which our parser can then handle consistently.');
