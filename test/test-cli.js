import test from 'ava';
const cliLocation = '../cli.js';
const sh = require('shelljs');
const fs = require('fs');
const path = require('path');

test('cli - valid and invalid args', t => {
  fs.writeFileSync(path.join(__dirname, '/config.json'), `{"username": "dawsonbotsford"}`);
  t.true(sh.exec(cliLocation, {silent: true}).code === 0);
  t.true(sh.exec(cliLocation + ' opent', {silent: true, wait: false}).code === 0);
  t.true(sh.exec(cliLocation + ' opent openm', {silent: true}).code === 0);
});
