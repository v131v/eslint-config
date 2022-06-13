const mergeConfigs = require('./mergeConfigs');

const base = require('./configs/base');
const jest = require('./configs/jest');
const react = require('./configs/react');
const typescript = require('./configs/typescript');
const rules = require('./configs/rules');

const configs = [base, jest, react, typescript, rules];
const config = mergeConfigs(configs);

module.exports = config;
