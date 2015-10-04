angular.module('recipeApp.login.loginService', [])

.factory('LoginService', ['$http',function($http) {

	var LoginService = {};

	LoginService.user;

	LoginService.login = function(loginForm) {
		return $http({
		  method  : 'POST',
		  url     : 'login',
		  data    : $.param(loginForm),
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		 });
	};

	LoginService.setUser = function (currentUser) {
		LoginService.user = currentUser;
	};

	LoginService.logout = function (currentUser) {
		LoginService.user = undefined;
	};

	LoginService.isLoggedIn = function () {
		return LoginService.user !== undefined;
	};

	return LoginService;
}]);