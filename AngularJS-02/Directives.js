// create the module and name it App
angular.module('angularjsApp')
    .directive('customDirective', function () {
        return {
            restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
            scope: {
                //@ reads the attribute value, = provides two-way binding, & works with functions
                title: '@'
            },
            template: '<div>{{ myVal }}</div>',
            templateUrl: 'mytemplate.html',
            controller: controllerFunction, //Embed a custom controller in the directive
            link: function ($scope, element, attrs) { } //DOM manipulation
        }
    });