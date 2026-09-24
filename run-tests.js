import { run } from './src/cases.js';

const results = run();
for (const { name, pass, error } of results) {
  console.log(`${pass ? 'ok  ' : 'FAIL'}  ${name}${error ? ` — ${error}` : ''}`);
}

const failed = results.filter((r) => !r.pass).length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
