// An example configuration file.
exports.config = {
    directConnect: true,
    capabilities: {
      'browserName': 'chrome'
    },
    framework: 'jasmine',
      specs: [
        '../specs/task3_chromeBreakPoint.ts',
  ],
      beforeLaunch: function () {
        require('ts-node').register ({
            project: 'tsconfig.json'
        });
    },

    SELENIUM_PROMISE_MANAGER:false,

    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };