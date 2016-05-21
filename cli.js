#!/usr/bin/env node
'use strict';
const sh = require('shelljs');
const chalk = require('chalk');
const updateNotifier = require('update-notifier');
const meow = require('meow');
const opn = require('opn');
const inquirer = require('inquirer');

const Configstore = require('configstore');
const pkg = require('./package.json');
const opent = require('./index.js');

const cli = meow([
  'Usage',
  '  $ opent',
  '',
  '  $ opent <module name>',
  '',
  'Examples',
  '$ opent',
  '//=> opens the travis-ci module page for the current directory in browser',
  '',
  '$ opent express',
  '//=> opens the travis-ci module page for express in browser',
  '',
  '$ opent inf sist opent',
  '//=>  opens the travis-ci module pages for inf, sist, and opent in browser'
]);

updateNotifier({pkg: cli.pkg}).notify();

let packages = cli.input;

const throwErr = (errMsg) => {
  console.error(chalk.red(errMsg));
  console.log(cli.help);
  process.exit(1);
};

if (packages.length === 0) {
  const revParse = sh.exec('git rev-parse --show-toplevel', {silent: true});
  // if it's a git repo
  if (revParse.code === 0) {
    const splitRevParse = revParse.stdout.split('/');
    packages = [splitRevParse[splitRevParse.length - 1].trim()];
  } else {
    throwErr('Specify one or more travis-ci packages, none found');
  }
}

const openPackages = (username) => {
  packages.forEach((myPackage) => {
    opn(opent(username, myPackage), {wait: false});
  });
};

const conf = new Configstore(pkg.name);
let username = conf.get('username');
if (typeof username === 'undefined') {
  inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What\'s your GitHub username?'
    }], function (answers) {
    conf.set('username', answers.username);
    username = answers.username;
    openPackages(username);
  });
} else {
  openPackages(username);
}

