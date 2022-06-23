#!/usr/bin/env node

const { exec } = require('child_process');
const { optionalPeerDependencies } = require('../package.json');

const serializePkg = ([pkg, version = 'latest']) => `${pkg}@${version}`;
const installPackagesCommand = (pkgs = [], onlyPackageLock = false) => `npm install --save-dev${onlyPackageLock ? ' --package-lock-only ' : ' '}${pkgs.map(serializePkg).join(' ')}`;

const parseFlag = (flag) => {

  let ans = flag.match(/--(\w+)/);
  ans &&= ans[1];

  return ans;

};

const cmd = installPackagesCommand(
  process.argv
    .map(parseFlag)
    .concat(['base'])
    .filter((flag) => optionalPeerDependencies[flag])
    .reduce((pkgs, flag) => pkgs.concat(Object.entries(optionalPeerDependencies[flag])), []),
  process.argv.includes('--no-save'),
);
const childProcess = exec(cmd);
childProcess.stdout.pipe(process.stdout);
childProcess.stderr.pipe(process.stderr);
