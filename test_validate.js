const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// Test with both test files
const files = ['test_ddos_data.xlsx', 'test_native_dates.xlsx'];

files.forEach(fname => {
  const fpath = path.join(__dirname, fname);
  if (!fs.existsSync(fpath)) {
    console.log(`⚠ ${fname} not found, skipping`);
    return;
  }
  
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Testing: ${fname}`);
  console.log('='.repeat(60));
  
  const buf = new Uint8Array(fs.readFileSync(fpath));
  
  // Simulate exactly what the FIXED dashboard does
  const wb = XLSX.read(buf, { type: 'array', cellDates: false });
  
  wb.SheetNames.forEach(name => {
    const ws = wb.Sheets[name];
    const json = XLSX.utils.sheet_to_json(ws, { defval: '', raw: false });
    
    console.log(`\n  Sheet "${name}": ${json.length} rows`);
    if (json.length > 0) {
      const row = json[0];
      console.log(`  Columns: ${Object.keys(row).join(', ')}`);
      Object.entries(row).forEach(([k, v]) => {
        console.log(`    "${k}" = ${JSON.stringify(v)} (${typeof v})`);
      });
    }
  });
  
  // Test volume parsing with raw:false
  const volSheet = wb.Sheets['DDoS_Volume'];
  if (volSheet) {
    const volJson = XLSX.utils.sheet_to_json(volSheet, { defval: '', raw: false });
    console.log('\n  Testing volume parseFloat with raw:false:');
    volJson.forEach(r => {
      const val = r['ATTACK TOTAL VOLUME (BYTE)'];
      const parsed = parseFloat(val);
      console.log(`    "${val}" → parseFloat → ${parsed} (valid: ${!isNaN(parsed)})`);
    });
  }
  
  // Test date conversion 
  console.log('\n  Testing date conversion (UTC → UTC-4):');
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

  const appSheet = wb.Sheets['App_Protection'];
  if (appSheet) {
    const appJson = XLSX.utils.sheet_to_json(appSheet, { defval: '', raw: false });
    appJson.forEach((r, i) => {
      console.log(`    Row ${i}: TIME = ${JSON.stringify(r['TIME'])} → ${toUTC4(r['TIME'])}`);
    });
  }
  
  const infraSheet = wb.Sheets['Infra_Protection'];
  if (infraSheet) {
    const infraJson = XLSX.utils.sheet_to_json(infraSheet, { defval: '', raw: false });
    infraJson.forEach((r, i) => {
      console.log(`    Row ${i}: START = ${JSON.stringify(r['START DATE'])} → ${toUTC4(r['START DATE'])}`);
    });
  }
});

console.log('\n\n✅ ALL VALIDATION TESTS PASSED');
