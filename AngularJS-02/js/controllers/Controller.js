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

    $scope.functionNgTest = function (item) {
        console.log(item);
    };

    $scope.user = "Munna";
    $scope.status = "Nawaab";

    var promise = userDataService.getUsers();
    promise.then(function (users) {
        console.log(users.data);
        $scope.users = users.data;
    });
});


// the dialog is injected in the specified controller
//function EditCtrl($scope, item, dialog) {
app.controller("EditorCtrl", function ($scope, item, dialog) {
    $scope.item = item;

    $scope.save = function () {
        dialog.close($scope.item);
    };

    $scope.close = function () {
        dialog.close(undefined);
    };
});

// directive chart controller, it is not needed but showing it for the model and message
app.controller('chartController', function ($scope, userDataService, $dialog) {
    //sample list
    $scope.data = [];

   var colors = ["red", "green", "blue", "lightsalmon"];
    $scope.options = {
        chart: {
            type: 'pieChart',
            height: 500,
            x: function (d) { return d.name; },
            y: function (d) { return d.score; },
            color: function (d, i) {
                return (d.data && d.data.color) || colors[i % colors.length]
            },
            showLabels: true,
            transitionDuration: 500,
            labelThreshold: 0.01,
            legend: {
                margin: {
                    top: 5,
                    right: 35,
                    bottom: 5,
                    left: 0
                }
            }
        }
    };

    var dialogOptions = {
        controller: "EditorCtrl",
        templateUrl: 'chart-tableEditor.html'
    };

    //dialog edit
    $scope.edit = function (item) {

        var itemToEdit = item;

        $dialog.dialog(angular.extend(dialogOptions, { resolve: { item: angular.copy(itemToEdit) } }))
          .open()
          .then(function (result) {
              if (result) {
                  angular.copy(result, itemToEdit);
              }
              itemToEdit = undefined;
          });
    };


    //service inject and promise
    var promise = userDataService.getUsers();
    promise.then(function (users) {
        console.log(users.data);
        $scope.data = users.data;
    });
});

