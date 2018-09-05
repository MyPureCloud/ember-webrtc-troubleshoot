/* eslint-env node */
const chromium = require('ember-chromium');
const testemConfig = chromium.getTestemConfig();
testemConfig.parallel = 4;
console.log('running tests with config: ', testemConfig);

testemConfig.reporter = 'dot';

module.exports = testemConfig;
