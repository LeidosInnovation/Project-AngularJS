'use strict';
//test commit
describe('Main Controller test suite', function () {

    describe('MainController', function () {
        var $scope;

        beforeEach(module('angularjsApp'));

        beforeEach(inject(function ($rootScope, $controller) {
            $scope = $rootScope.$new();
            $controller('mainController', {
                $scope: $scope
            });
        }));

        it('should return the message I am main one', function () {
            expect($scope.message).toBe('I am main one');
        });

        it('should have 3 users in the list', function () {
            expect($scope.users.length == 3).toBe(true);
        });

        it('should have 4 users in the list', function () {
            expect($scope.users.length == 4).toBe(true);
        });

        it('should alter the message', function () {
            expect($scope.message).toBe('I am main one');
        });
    });
});


//describe('userDataService Service', function () {
//    var LanguagesService;

//    beforeEach(function () {
//        module('angularjsApp');
//        inject(function ($injector) {
//            LanguagesService = $injector.get('userDataService');
//        });
//    });

//    it('should return available users', function () {
//        var languages = LanguagesService.getUsers();
//        languages.then(function (users) {
//            expect(users).toContain('Shailesh');
//            expect(users).toContain('Naveen');
//            expect(users).toContain('Jasmine');
//            expect(users.length).toEqual(1);
//        });

//    });
//});

describe('userDataService using a promise', function () {
    var LanguagesServicePromise,
      $httpBackend,
      jsonResponse = [{
          "name": "Shailesh",
          "status": "online",
          "IsOnline": true
      }, {
          "name": "Dominic",
          "status": "online",
          "IsOnline": true
      }, {
          "name": "Naveen",
          "status": "offline",
          "IsOnline": false
      }, {
          "name": "Adam",
          "status": "online",
          "IsOnline": true
      }, {
          "name": "Sabu",
          "status": "online",
          "IsOnline": true
      }];

    beforeEach(function () {
        module('angularjsApp');
        inject(function ($injector) {
            LanguagesServicePromise = $injector.get('userDataService');
            // set up the mock http service
            $httpBackend = $injector.get('$httpBackend');

            // backend definition common for all tests
            $httpBackend.whenGET('users.json')
              .respond(jsonResponse);
        });
    });

    it('should return available users asynchronously', function (done) {
        // service returns a promise
        var promise = LanguagesServicePromise.getUsers();
        // use promise as usual
        promise.then(function (users) {
            // same tests as before
            expect(users.data[0].name).toBe('Adam');
            expect(users.data[0].status).toContain('online');
            expect(users.data.length).toEqual(5);
            // Spec waits till done is called or Timeout kicks in
            done();
        });
        // flushes pending requests
        $httpBackend.flush();
    });
});