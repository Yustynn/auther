'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('login', {
		controller: 'LoginCtrl',
		url: '/login',
		templateUrl: '/browser/app/login/login.html'
	});
});
