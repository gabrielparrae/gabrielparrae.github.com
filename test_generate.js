const XLSX = require('xlsx');
const fs = require('fs');
const path = require('path');

// ============================================================
// 1. Generate a test Excel file with 3 sheets
// ============================================================

const wb = XLSX.utils.book_new();

// Sheet 1: DDoS_Volume
const volumeData = [
  { 'ATTACK NAME': 'SYN Flood', 'ATTACK TOTAL VOLUME (BYTE)': 5368709120 },
  { 'ATTACK NAME': 'UDP Amplification', 'ATTACK TOTAL VOLUME (BYTE)': 10737418240 },
  { 'ATTACK NAME': 'DNS Reflection', 'ATTACK TOTAL VOLUME (BYTE)': 2147483648 },
  { 'ATTACK NAME': 'HTTP GET Flood', 'ATTACK TOTAL VOLUME (BYTE)': 1073741824 },
  { 'ATTACK NAME': 'ICMP Flood', 'ATTACK TOTAL VOLUME (BYTE)': 536870912 },
];
const ws1 = XLSX.utils.json_to_sheet(volumeData);
XLSX.utils.book_append_sheet(wb, ws1, 'DDoS_Volume');

// Sheet 2: App_Protection
const appData = [
  { 'ACTION': 'Block', 'TIME': '2025-03-15 14:30:00', 'APPLICATION NAME': 'WebApp-Prod', 'SOURCE': '192.168.1.100', 'ATTACK NAME': 'SQL Injection', 'SEVERITY': 'Critical', 'ATTACK ID': 'ATK-001', 'ACCOUNT NAME': 'Acme Corp', 'DESTINATION': '10.0.0.5' },
  { 'ACTION': 'Alert', 'TIME': '2025-03-15 15:45:00', 'APPLICATION NAME': 'API-Gateway', 'SOURCE': '172.16.0.50', 'ATTACK NAME': 'XSS Attack', 'SEVERITY': 'High', 'ATTACK ID': 'ATK-002', 'ACCOUNT NAME': 'Acme Corp', 'DESTINATION': '10.0.0.10' },
  { 'ACTION': 'Block', 'TIME': '2025-03-16 08:20:00', 'APPLICATION NAME': 'WebApp-Prod', 'SOURCE': '192.168.2.200', 'ATTACK NAME': 'SQL Injection', 'SEVERITY': 'Critical', 'ATTACK ID': 'ATK-003', 'ACCOUNT NAME': 'Beta Inc', 'DESTINATION': '10.0.0.5' },
  { 'ACTION': 'Alert', 'TIME': '2025-03-16 09:10:00', 'APPLICATION NAME': 'Mobile-Backend', 'SOURCE': '10.10.10.10', 'ATTACK NAME': 'Bot Access', 'SEVERITY': 'Medium', 'ATTACK ID': 'ATK-004', 'ACCOUNT NAME': 'Acme Corp', 'DESTINATION': '10.0.0.20' },
  { 'ACTION': 'Block', 'TIME': '2025-03-17 11:00:00', 'APPLICATION NAME': 'API-Gateway', 'SOURCE': '203.0.113.45', 'ATTACK NAME': 'Brute Force', 'SEVERITY': 'High', 'ATTACK ID': 'ATK-005', 'ACCOUNT NAME': 'Beta Inc', 'DESTINATION': '10.0.0.10' },
  { 'ACTION': 'Captcha', 'TIME': '2025-03-17 12:30:00', 'APPLICATION NAME': 'WebApp-Staging', 'SOURCE': '198.51.100.22', 'ATTACK NAME': 'Bot Access', 'SEVERITY': 'Low', 'ATTACK ID': 'ATK-006', 'ACCOUNT NAME': 'Gamma LLC', 'DESTINATION': '10.0.1.5' },
];
const ws2 = XLSX.utils.json_to_sheet(appData);
XLSX.utils.book_append_sheet(wb, ws2, 'App_Protection');

// Sheet 3: Infra_Protection
const infraData = [
  { 'START DATE': '2025-03-15 10:00:00', 'END DATE': '2025-03-15 10:45:00', 'TYPE': 'Network', 'SEVERITY': 'Critical', 'ATTACK NAME': 'SYN Flood', 'CATEGORY': 'Volumetric', 'SOURCE': 'External', 'ACCOUNT': 'Acme Corp', 'SITE': 'US-East', 'ASSET NAME': 'LB-Primary', 'SOURCE IP ADDRESS': '203.0.113.1', 'SOURCE PORT': '12345', 'DESTINATION IP ADDRESS': '10.0.0.1' },
  { 'START DATE': '2025-03-15 14:20:00', 'END DATE': '2025-03-15 15:00:00', 'TYPE': 'Application', 'SEVERITY': 'High', 'ATTACK NAME': 'HTTP Flood', 'CATEGORY': 'Application Layer', 'SOURCE': 'External', 'ACCOUNT': 'Beta Inc', 'SITE': 'EU-West', 'ASSET NAME': 'Web-Server-01', 'SOURCE IP ADDRESS': '198.51.100.5', 'SOURCE PORT': '54321', 'DESTINATION IP ADDRESS': '10.0.1.1' },
  { 'START DATE': '2025-03-16 06:00:00', 'END DATE': '2025-03-16 06:30:00', 'TYPE': 'Network', 'SEVERITY': 'Medium', 'ATTACK NAME': 'UDP Amplification', 'CATEGORY': 'Volumetric', 'SOURCE': 'External', 'ACCOUNT': 'Acme Corp', 'SITE': 'US-East', 'ASSET NAME': 'DNS-Server', 'SOURCE IP ADDRESS': '192.0.2.10', 'SOURCE PORT': '53', 'DESTINATION IP ADDRESS': '10.0.0.2' },
  { 'START DATE': '2025-03-16 18:00:00', 'END DATE': '2025-03-16 18:20:00', 'TYPE': 'Network', 'SEVERITY': 'Critical', 'ATTACK NAME': 'SYN Flood', 'CATEGORY': 'Volumetric', 'SOURCE': 'External', 'ACCOUNT': 'Gamma LLC', 'SITE': 'AP-South', 'ASSET NAME': 'LB-Secondary', 'SOURCE IP ADDRESS': '203.0.113.50', 'SOURCE PORT': '9999', 'DESTINATION IP ADDRESS': '10.0.2.1' },
  { 'START DATE': '2025-03-17 09:00:00', 'END DATE': '2025-03-17 09:15:00', 'TYPE': 'Application', 'SEVERITY': 'Low', 'ATTACK NAME': 'Slowloris', 'CATEGORY': 'Application Layer', 'SOURCE': 'Internal', 'ACCOUNT': 'Acme Corp', 'SITE': 'US-East', 'ASSET NAME': 'App-Server-02', 'SOURCE IP ADDRESS': '10.10.10.99', 'SOURCE PORT': '8080', 'DESTINATION IP ADDRESS': '10.0.0.5' },
];
const ws3 = XLSX.utils.json_to_sheet(infraData);
XLSX.utils.book_append_sheet(wb, ws3, 'Infra_Protection');

const outputPath = path.join(__dirname, 'test_ddos_data.xlsx');
XLSX.writeFile(wb, outputPath);
console.log(`\n✅ Test Excel file created: ${outputPath}`);
console.log(`   Sheets: ${wb.SheetNames.join(', ')}`);

// ============================================================
// 2. Now read it back and simulate the dashboard parsing
// ============================================================
console.log('\n━━━ TESTING: Read back & parse ━━━\n');

const fileBuffer = fs.readFileSync(outputPath);
const data = new Uint8Array(fileBuffer);

// Test with different read options
const configs = [
  { label: 'cellDates: true', opts: { type: 'array', cellDates: true } },
  { label: 'cellDates: false (raw)', opts: { type: 'array', cellDates: false } },
  { label: 'cellDates: false + raw: false', opts: { type: 'array', cellDates: false, raw: false } },
];

configs.forEach(cfg => {
  console.log(`\n── Config: ${cfg.label} ──`);
  const wb2 = XLSX.read(data, cfg.opts);
  console.log(`  SheetNames: [${wb2.SheetNames.join(', ')}]`);
  
  wb2.SheetNames.forEach(name => {
    const ws = wb2.Sheets[name];
    const json = XLSX.utils.sheet_to_json(ws, { defval: '' });
    console.log(`\n  Sheet "${name}" → ${json.length} rows`);
    
    if (json.length > 0) {
      const keys = Object.keys(json[0]);
      console.log(`  Columns: ${keys.join(' | ')}`);
      
      // Show first row values and types
      console.log(`  First row values & types:`);
      keys.forEach(k => {
        const v = json[0][k];
        console.log(`    "${k}" = ${JSON.stringify(v)} (${typeof v}${v instanceof Date ? ' [Date]' : ''})`);
      });
    }
    
    // Test sheet name matching (exact matching used in the dashboard)
    const normalized = name.trim();
    const match = 
      normalized === 'DDoS_Volume' ? 'volume' :
      normalized === 'App_Protection' ? 'app' :
      normalized === 'Infra_Protection' ? 'infra' : 'UNMATCHED';
    console.log(`  Name match: "${normalized}" → ${match}`);
  });
});

// ============================================================
// 3. Test date conversion (UTC to UTC-4)
// ============================================================
console.log('\n━━━ TESTING: Date conversion UTC → UTC-4 ━━━\n');

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

// Test with different date input types
const testDates = [
  '2025-03-15 14:30:00',
  new Date('2025-03-15T14:30:00Z'),
  45731.604166666664,  // Excel serial for 2025-03-15 14:30
];

testDates.forEach(td => {
  console.log(`  Input: ${JSON.stringify(td)} (${typeof td}${td instanceof Date ? ' [Date]' : ''}) → ${toUTC4(td)}`);
});

// Now test with actual parsed values from different configs
console.log('\n━━━ TESTING: Actual parsed date values from Excel ━━━\n');
configs.forEach(cfg => {
  const wb2 = XLSX.read(data, cfg.opts);
  const ws = wb2.Sheets['App_Protection'];
  const json = XLSX.utils.sheet_to_json(ws, { defval: '' });
  if (json.length > 0) {
    const timeVal = json[0]['TIME'];
    console.log(`  Config "${cfg.label}":`);
    console.log(`    Raw TIME = ${JSON.stringify(timeVal)} (${typeof timeVal}${timeVal instanceof Date ? ' [Date]' : ''})`);
    console.log(`    toUTC4() = ${toUTC4(timeVal)}`);
  }
});

console.log('\n━━━ ALL TESTS COMPLETE ━━━');
