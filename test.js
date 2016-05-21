import test from 'ava';
const cliLocation = './cli.js';
const execa = require('execa');

test('invalid args', async t => {
  t.falsy(await execa(cliLocation, ['thispackagenameisnotarealname0981234']).code, 1);
});

test('valid args', async t => {
  t.truthy(await execa(cliLocation));
});
// test('cli - valid and invalid args', t => {
//   t.true
//   t.true(sh.exec(cliLocation + ' inf', {silent: true, wait: false}).code === 0);
//   t.true(sh.exec(cliLocation + ' inf openm', {silent: true}).code === 0);
// });
