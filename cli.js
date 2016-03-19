#!/usr/bin/env node
'use strict';
const meow = require('meow');
const updateNotifier = require('update-notifier');
const opent = require('./index.js');
const opn = require('opn');
const sh = require('shelljs');
const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');

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

try {
  fs.statSync(path.join(__dirname, '/config.json'));
  const username = JSON.parse(fs.readFileSync('config.json', 'utf-8')).username;
  openPackages(username);
} catch (err) {
  inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What\'s your GitHub username?'
    }], function (answers) {
    fs.writeFileSync(path.join(__dirname, '/config.json'), `{"username": "${answers.username}"}`);
    openPackages(answers.username);
  });
}

