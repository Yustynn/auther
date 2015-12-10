'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('signup', {
		controller: 'SignupCtrl',
		url: '/signup',
		templateUrl: '/browser/app/signup/signup.html'
	});
});
