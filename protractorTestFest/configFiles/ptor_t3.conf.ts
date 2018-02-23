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
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };