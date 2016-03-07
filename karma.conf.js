module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'payment-portal/bower_components/angular/angular.js',
      'payment-portal/bower_components/angular-route/angular-route.js',
      'payment-portal/bower_components/angular-mocks/angular-mocks.js',
      'payment-portal/components/**/*.js',
      'payment-portal/view*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
