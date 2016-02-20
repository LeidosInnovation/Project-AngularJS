// create the module and name it scotchApp
var app = angular.module('angularjsApp');

// create the controller and inject Angular's $scope
app.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'I am main one';

    //sample list
    $scope.users = [ 
   {"name": "Dominic", "IsOnline": true}, 
   { "name": "Naveen", "IsOnline": true },
   { "name": "Shailesh", "IsOnline": false }
    ];

});

// create the controller and inject Angular's $scope
app.controller('homeController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'I am home';
});

// create the controller and inject Angular's $scope
app.controller('aboutController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'I am about';
});
