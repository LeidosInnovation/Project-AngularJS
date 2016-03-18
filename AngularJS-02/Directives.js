// create the module and name it App
var app = angular.module('angularjsApp');

//directive 
app.directive('mydirectiveWithController', function () {
    return {
        template: '<b>User:  </b>    {{user}}<br /> <b>Status:  </b> {{status}} <br> ' +
        '<h2></h2><div ng-repeat="user in users">' +
        "<div ng-if=\"user.status == 'online' \">" +
        '<div class="alert alert-success">{{user.name}} | IsOnline => {{user.IsOnline}} | Score => {{user.score}}</div>' +
        '</div>' +
        "<div ng-if=\"user.status == 'offline' \">" +
        '<div class="alert alert-info">{{user.name}} | IsOnline => {{user.IsOnline}} | Score => {{user.score}}</div>' +
        '</div>' +
        '</div>',
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
