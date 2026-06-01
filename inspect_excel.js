const fs = require('fs');
const XLSX = require('xlsx');
['test_ddos_data.xlsx','test_native_dates.xlsx'].forEach(f => {
  const buf = fs.readFileSync(f);
  const wb = XLSX.read(buf, { type: 'buffer', cellDates: false });
  console.log('FILE', f, 'Sheets:', wb.SheetNames);
  wb.SheetNames.forEach(name => {
    const ws = wb.Sheets[name];
    const json = XLSX.utils.sheet_to_json(ws, { defval: '' });
    console.log('  ', name, 'rows', json.length);
    if (json.length > 0) console.log('    headers', Object.keys(json[0]).slice(0, 20));
  });
});
