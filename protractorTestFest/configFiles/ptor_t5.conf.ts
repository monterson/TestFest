let SpecReporter2 = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    directConnect: true,
    capabilities: {
      'browserName': 'chrome'
    },
    framework: 'jasmine',
      specs: [
        '../specs/task5_specReporter.ts',
  ],
      beforeLaunch: function () {
        require('ts-node').register ({
            project: 'tsconfig.json'
        });
    },
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },
    onPrepare: function() {
      jasmine.getEnv().addReporter(new SpecReporter2({
        spec: {
          displayStacktrace: true
        }
      }));
    },
  };