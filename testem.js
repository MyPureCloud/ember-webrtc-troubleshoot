/* eslint-env node */
const chromium = require('ember-chromium');
const testemConfig = chromium.getTestemConfig();
console.log('running tests with config: ', testemConfig);

module.exports = testemConfig;
