// create the module and name it App
var app = angular.module('angularjsApp');

//directive 
app.directive('mydirectiveWithController', function () {
    return {
        template: '<b>User:  </b>    {{user}}<br /> <b>Status:  </b> {{status}} <br> ' +
        '<h2></h2><div class="label label-danger" ng-repeat="user in users">{{user.name}}</div>' +
        '<br><div class="label label-success" ng-repeat="user in users">{{user.status}}</div>' +
        '<br><div class="label label-danger" ng-repeat="user in users">{{user.IsOnline}}</div>',
        controller: "directiveController", //Notice embed a controller in the directive
        link: function ($scope, element, attrs) {
            element.bind('mouseenter', function () {
                element.css('background-color', 'white');
            });
            element.bind('mouseleave', function () {
                element.css('background-color', 'white');
            });
        }
    };
});