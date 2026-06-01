const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Simulates EXACTLY what the fixed dashboard now does
console.log('━━━ FINAL VALIDATION: Simulating fixed dashboard logic ━━━\n');

// --- parseToUTCMs (exact copy from the dashboard) ---
function parseToUTCMs(raw) {
  if (raw === null || raw === undefined || raw === '') return null;
  if (typeof raw === 'number' && raw > 1000) {
    return Math.round((raw - 25569) * 86400000);
  }
  if (raw instanceof Date) {
    if (isNaN(raw.getTime())) return null;
    return raw.getTime();
  }
  if (typeof raw === 'string') {
    let s = raw.trim();
    if (!s) return null;
    const match = s.match(/^(\d{4})[-/](\d{1,2})[-/](\d{1,2})(?:[T\s](\d{1,2}):(\d{2})(?::(\d{2}))?)?/);
    if (match) {
      const [, yr, mo, dy, hh, mm, ss] = match;
      const utcMs = Date.UTC(parseInt(yr), parseInt(mo) - 1, parseInt(dy), parseInt(hh || 0), parseInt(mm || 0), parseInt(ss || 0));
      if (!isNaN(utcMs)) return utcMs;
    }
    if (s.includes('T') || s.includes('Z')) {
      const d = new Date(s);
      if (!isNaN(d.getTime())) return d.getTime();
    }
    const d2 = new Date(s.replace(' ', 'T') + 'Z');
    if (!isNaN(d2.getTime())) return d2.getTime();
    const d3 = new Date(s);
    if (!isNaN(d3.getTime())) return d3.getTime();
  }
  return null;
}

function toUTC4(raw) {
  if (!raw && raw !== 0) return '—';
  const utcMs = parseToUTCMs(raw);
  if (utcMs === null) return String(raw);
  const utc4Ms = utcMs - 4 * 3600000;
  const d = new Date(utc4Ms);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC-4`;
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

const files = ['test_ddos_data.xlsx', 'test_native_dates.xlsx'];
let allPassed = true;

files.forEach(fname => {
  const fpath = path.join(__dirname, fname);
  if (!fs.existsSync(fpath)) return;
  
  console.log(`\n📁 ${fname}`);
  
  const buf = new Uint8Array(fs.readFileSync(fpath));
  // EXACT same options as the fixed dashboard
  const wb = XLSX.read(buf, { type: 'array', cellDates: false });
  
  const DATA = { volume: null, app: null, infra: null };
  
  wb.SheetNames.forEach(name => {
    const ws = wb.Sheets[name];
    const json = XLSX.utils.sheet_to_json(ws, { defval: '' });
    const normalized = name.trim();
    if (normalized === 'DDoS_Volume') DATA.volume = json;
    else if (normalized === 'App_Protection') DATA.app = json;
    else if (normalized === 'Infra_Protection') DATA.infra = json;
  });
  
  // Test Volume
  if (DATA.volume) {
    console.log(`  ✅ DDoS_Volume: ${DATA.volume.length} rows`);
    DATA.volume.forEach(r => {
      const name = r['ATTACK NAME'];
      const bytes = parseFloat(r['ATTACK TOTAL VOLUME (BYTE)']) || 0;
      const ok = name && bytes > 0;
      console.log(`     ${ok ? '✅' : '❌'} "${name}" → ${formatBytes(bytes)}`);
      if (!ok) allPassed = false;
    });
  } else {
    console.log('  ❌ DDoS_Volume NOT FOUND'); allPassed = false;
  }
  
  // Test App
  if (DATA.app) {
    console.log(`  ✅ App_Protection: ${DATA.app.length} rows`);
    DATA.app.forEach((r, i) => {
      const time = toUTC4(r['TIME']);
      const ok = time !== '—' && !time.startsWith('INVALID');
      console.log(`     ${ok ? '✅' : '❌'} Row ${i}: TIME=${JSON.stringify(r['TIME'])} → ${time}`);
      if (!ok) allPassed = false;
    });
  } else {
    console.log('  ❌ App_Protection NOT FOUND'); allPassed = false;
  }
  
  // Test Infra
  if (DATA.infra) {
    console.log(`  ✅ Infra_Protection: ${DATA.infra.length} rows`);
    DATA.infra.forEach((r, i) => {
      const start = toUTC4(r['START DATE']);
      const end = toUTC4(r['END DATE']);
      const ok = start !== '—' && end !== '—';
      console.log(`     ${ok ? '✅' : '❌'} Row ${i}: START=${JSON.stringify(r['START DATE'])} → ${start}`);
      if (!ok) allPassed = false;
    });
  } else {
    console.log('  ❌ Infra_Protection NOT FOUND'); allPassed = false;
  }
});

console.log(`\n${'━'.repeat(50)}`);
console.log(allPassed ? '✅ ALL TESTS PASSED — Dashboard should work correctly!' : '❌ SOME TESTS FAILED');
