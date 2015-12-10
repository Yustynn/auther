app.controller('LoginCtrl', function($scope, AuthFactory) {
    $scope.login = function() {
        console.log('in the ctrl');
        AuthFactory.login($scope.loginInfo)
            .then(function resolve(response) {
                console.log(response);
                console.log('logged response');
            })
    }
})
