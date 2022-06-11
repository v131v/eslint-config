const mergeConfigs = require('./mergeConfigs.js');

const base = require('./configs/base.js');
const jest = require('./configs/jest.js');
const react = require('./configs/react.js');
const typescript = require('./configs/typescript.js');
const rules = require('./configs/rules.js');

const configs = [base, jest, react, typescript, rules];
const config = mergeConfigs(configs);

console.log(config);

module.exports = config;
