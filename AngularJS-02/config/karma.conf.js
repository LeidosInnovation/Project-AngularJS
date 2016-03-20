/*jslint node: true */
"use strict";

module.exports = function (config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
          'bower_components/angular/angular.js',
          'bower_components/angular-route/angular-route.js',
          'http://angular-ui.github.com/bootstrap/ui-bootstrap-tpls-0.1.0.js',
          'bower_components/d3/d3.js',
          'bower_components/nvd3/build/nv.d3.js',
          'bower_components/angular-nvd3/dist/angular-nvd3.js',
          '*.js',
          '*.html'
        ],
        preprocessors: {
            '*.html': 'ng-html2js'
        },
        reporters: ['progress'],
        colors: true,
        autoWatch: false,
        browsers: ['PhantomJS'],
        singleRun: true,
        plugins: [
          'karma-phantomjs-launcher',
          'karma-jasmine',
          'karma-ng-html2js-preprocessor'
        ]
    });
};