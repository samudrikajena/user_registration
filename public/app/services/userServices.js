// angular.module('userServices', []).config(function () {
// //    console.log('Testing User Services');
// });

angular.module('userServices', [])

    .factory('User', function ($http) {
        userFactory = {};

        //User.create(regData);
        // create a custom function which can be used throughout project
        userFactory.create = function (regData) {
            return $http.post('/api/users', regData);
        }
        return userFactory;
    });