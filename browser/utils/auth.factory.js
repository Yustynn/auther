app.factory('AuthFactory', function($http) {
    function postLogin(loginInfo) {
        return $http.post('/auth/login', loginInfo).then(function resolve(res) {
            return res.data
        });
    }
    function postSignup(signupInfo) {
        return $http.post('/auth/signup', signupInfo)
        .then(function resolve(res) {
            return res.data
        });
    }

    function login(loginInfo) {
        return postLogin(loginInfo);
    }

    function signup(signupInfo) {
        return postSignup(signupInfo);
    }

    return {
        login: login,
        signup: signup
    }
});
