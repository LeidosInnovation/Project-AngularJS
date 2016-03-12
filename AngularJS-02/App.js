// create the module and name it app
var app = angular.module('angularjsApp', ['ngRoute']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
		.when('/', {
		    templateUrl: 'Home.html',
		    controller: 'mainController'
		})

        // route for the about page
        .when('/about', {
            templateUrl: 'About.html',
            controller: 'aboutController'
        })

        // route for the directive page
        //Notice i did not pass a controller here
        //it is assigned in the view
        .when('/custDirective', {
            templateUrl: 'customDirective.html'
        })
});
