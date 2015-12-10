app.controller('SignupCtrl', function($scope, AuthFactory) {
    $scope.signup = function() {
        AuthFactory.signup($scope.signupInfo)
        .then(function resolve(user) {
            console.log(user);
        })
    }
})
