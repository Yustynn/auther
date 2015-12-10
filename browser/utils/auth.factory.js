app.factory('AuthFactory', function($http) {

    return {
        login : login,
        signup : signup,
        isAdmin : isAdmin,
        logout : logout,
        getUser : getUser,
        fetchUser : fetchUser
    }

    var user;

    function postLogin(loginInfo) {
        return $http.post('/auth/login', loginInfo)
            .then(function resolve(res) {
                setUser(res.data)
            });
    }

    function postSignup(signupInfo) {
        return $http.post('/auth/signup', signupInfo)
            .then(function resolve(res) {
                setUser(res.data);
            });
    }

    function isAdmin() {
        if (!user) return false;
        return user.isAdmin;
    }

    function fetchUser () {
        return $http.get('/auth/me')
            .then(function resolve(res) {
                var user = res.data;
                setUser(user);
                return user;
            });
    }

    function getUser () {
        return user;
    }

    function setUser (userObj) {
        user = userObj;
    }

    function login(loginInfo) {
        return postLogin(loginInfo);
    }

    function signup(signupInfo) {
        return postSignup(signupInfo);
    }

    function logout() {
        return $http.get('/auth/logout')
            .then(function() {
                setUser(null);
            })
            .then(null, function(err) {
                console.error(err);
            });
    };

});
