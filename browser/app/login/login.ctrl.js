app.controller('LoginCtrl', function($scope, AuthFactory) {
    $scope.login = function() {
        AuthFactory.login($scope.loginInfo)
            .then(function resolve(response) {
                console.log(response);
                console.log('logged response');
            })
            .then(null, function error(err) {
                console.error(err);
            })
    }
})
