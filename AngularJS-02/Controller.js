// create the module and name it App
var app = angular.module('angularjsApp');

// create the controller and inject Angular's $scope
app.controller('mainController', function ($scope) {

    // create a message to display in our view
    $scope.message = 'I am main one';

    //sample list
    $scope.users = [{
        "name": "Dominic",
        "status": "online",
        "IsOnline": true
    }, {
        "name": "Naveen",
        "status": "online",
        "IsOnline": true
    }, {
        "name": "Shailesh",
        "status": "offline",
        "IsOnline": false
    }];

});

// home controller
app.controller('homeController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'I am home';
});

// about controller
app.controller('aboutController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'I am about';
});

// create the controller and inject Angular's $scope
app.controller('mainControllerWithService', function ($scope, userDataService) {

    // create a message to display in our view
    $scope.message = 'I am main one';

    //sample list
    $scope.users = [];

    var promise = userDataService.getUsers();
    promise.then(function (users) {
        console.log(users.data);
        $scope.users = users.data;
    });

});

// directive sample controller, it is not needed but showing it for the model and message
app.controller('directiveController', function ($scope) {
    // create a message to display in our view
    $scope.myVal = 'Directive is here, and i am here too!!!';
});


