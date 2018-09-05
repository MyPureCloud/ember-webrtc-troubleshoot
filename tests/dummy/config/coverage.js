module.exports = {
  // This is default value
  coverageEnvVar: 'COVERAGE',
  // More reporters found here https://github.com/gotwarlost/istanbul/tree/master/lib/report
  reporters: ['lcov', 'json', 'json-summary', 'html', 'text-summary'],
  // Defaults to ['*/mirage/**/*']
  excludes: [
    '*/blueprints',
    '*/config',
    '*/public',
    '*/tmp',
    '**/dummy/**/*',
    '*/vendor',
    '*/translations',
    '*/eslint_rules'
  ],
  // Defaults to coverage. A folder relative to the root of your project to store coverage results.
  // Set to true or false if you are using ESNext features.
  coverageFolder: '.nyc_output',
  useBabelInstrumenter: false,
  parallel: true
};
