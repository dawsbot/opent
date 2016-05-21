const path = require('path');
import test from 'ava';
const cliLocation = '../cli.js';
const sh = require('shelljs');
const Configstore = require('configstore');
const pkg = require(path.join('..', 'package.json'));
const conf = new Configstore(pkg.name);
conf.set('username', 'dawsonbotsford');

test('cli - valid and invalid args', t => {
  t.true(sh.exec(cliLocation, {silent: true}).code === 0);
  t.true(sh.exec(cliLocation + ' opent', {silent: true, wait: false}).code === 0);
  t.true(sh.exec(cliLocation + ' opent openm', {silent: true}).code === 0);
});
