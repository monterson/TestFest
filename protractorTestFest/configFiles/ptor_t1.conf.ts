var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});

exports.config = {
    directConnect: true,
    capabilities: {
      'browserName': 'chrome'
    },
    framework: 'jasmine',
      specs: [
        '../specs/task1_debugging.ts',
  ],
      beforeLaunch: function () {
        require('ts-node').register ({
            project: 'tsconfig.json'
        });
        return new Promise(function(resolve){
          reporter.beforeLaunch(resolve);
        });  
    },
    onPrepare: function() {
      jasmine.getEnv().addReporter(reporter);
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: true
        }
      }));
    },
    afterLaunch: function(exitCode) {
      return new Promise(function(resolve){
        reporter.afterLaunch(resolve.bind(this, exitCode));
      });
    },
    jasmineNodeOpts: {
      defaultTimeoutInterval: 30000
    }
  };