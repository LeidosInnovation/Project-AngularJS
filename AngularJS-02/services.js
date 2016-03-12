// create the module and name it app
var app = angular.module('angularjsApp');

//our first service
app.service("userDataService", function ($http, $q) {
    var deferred = $q.defer();

    //get call from local json file
    $http.get('users.json').then(function (data) {
        deferred.resolve(data);
    });

    //return promise
    this.getUsers = function () {
        return deferred.promise;
    };
});