angular.module('recipeApp.login.loginController', ['recipeApp.login.loginService'])

.controller('loginController',
	['$scope', '$http', 'LoginService', function($scope, $http, LoginService) {

	$scope.loginForm = {};
	$scope.isLoggedIn = false;

	$scope.login = function () {

		console.log('login controller: login function');

		LoginService.login($scope.loginForm)
		    .success(function(data) {
		        console.log(data);
		        $scope.loginForm = {};
		    	$scope.isLoggedIn = true;
		    	$scope.user = data;
		    });
	};

}]);