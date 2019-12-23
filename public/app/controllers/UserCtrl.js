//import { userInfo } from "os";

//userServices is the Servicename
angular.module('UserController', ['userServices'])
    .controller('regCtrl', function ($location, $timeout, User) {  // User is Factory Name
        //console.log('Testing Registratiin Controller');
        var app = this;
        this.regUser = function (regData) {
            app.loading = true;
            app.errorMsg = false;
            //console.log('Testing New Button');    // console.log('Form Submitted');
            // console.log(this.regData);
            User.create(app.regData).then(function (data) {
                // $http.post('/api/users', app.regData).then(function (data) {
                // console.log(data);
                if (data.data.success) {
                    app.loading = false;
                    //create success msg 
                    app.successMsg = data.data.message + ' ... Redirecting to Home Page';
                    // redirect to home page
                    $timeout(function () {
                        $location.path('/');
                    }, 2000);

                } else {
                    app.loading = false;
                    //create error message
                    app.errorMsg = data.data.message;
                }
            })
        }
    })
