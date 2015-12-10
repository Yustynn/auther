'use strict';

app.directive('navbar', function ($state, $location, $rootScope, AuthFactory) {
	return {
		restrict: 'E',
		templateUrl: '/browser/components/navbar/navbar.html',
		link: function (scope) {
			scope.logout = function() {
				AuthFactory.logout();
			};

			scope.pathStartsWithStatePath = function (state) {
				var partial = $state.href(state);
				var path = $location.path();
				return path.startsWith(partial);
			};
		}
	}
});