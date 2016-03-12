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
      "IsOnline": true,
      "score": "100"
  },
  {
      "name": "Naveen",
      "status": "online",
      "IsOnline": true,
      "score": "80"
  },
  {
      "name": "Shailesh",
      "status": "offline",
      "IsOnline": false,
      "score": "50"
  }, {
      "name": "Naren",
      "status": "offline",
      "IsOnline": false,
      "score": "100"
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
app.controller('directiveController', function ($scope, userDataService) {
    //sample list
    $scope.users = [];

    $scope.user = "Munna";
    $scope.status = "Nawaab";

    var promise = userDataService.getUsers();
    promise.then(function (users) {
        console.log(users.data);
        $scope.users = users.data;
    });
});


