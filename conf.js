//var Jasminereport= require ('protractor-jasmine2-html-reporter'); 
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  browsername: 'chrome',
  'chromeoptions': {'args' : ['--start-maximized']},
  specs: ['posse.js'],
  onPrepare: function() {
    browser.manage().window().maximize();
    var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(AllureReporter);
    
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  }
  
  
};

