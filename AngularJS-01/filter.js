// create the module and name it App
var app = angular.module('angularjsApp');

app.filter('customFilter', function () {
    return function (users, userStatus) {
        if (!angular.isUndefined(users) && !angular.isUndefined(userStatus) && users.length > 0) {
            var tempUsers = [];
            angular.forEach(users, function (user) {
                if (user.status == userStatus) {
                    tempUsers.push(user);
                 }
            });
            return tempUsers;
        } else {
            return users;
        }
    };

});