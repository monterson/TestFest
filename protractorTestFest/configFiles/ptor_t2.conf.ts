let SpecReporter1 = require('jasmine-spec-reporter').SpecReporter;
exports.config = {
    directConnect: true,
    capabilities: {
      'browserName': 'chrome'
    },
    framework: 'jasmine',
      specs: [
        '../specs/task2_excludeTestCase.ts',
  ],
      beforeLaunch: function () {
        require('ts-node').register ({
            project: 'tsconfig.json'
        });
    },
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
      jasmine.getEnv().addReporter(new SpecReporter1({
        spec: {
          displayStacktrace: true
        }
      }));
    }
  };