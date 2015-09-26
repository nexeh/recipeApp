angular.module('recipeApp.header.headerController', [])

.controller('headerController', ['$scope', '$http', function($scope, $http) {

	$scope.applicationName = "Application Name";
	$scope.isLoggedIn = false;
	$scope.userName = 'Jeremy Corson';

	$scope.loginForm = {};

	$scope.login = function () {

		console.log('login function');

		$http({
		  method  : 'POST',
		  url     : 'login',
		  data    : $.param($scope.loginForm),
		  headers : { 'Content-Type': 'application/x-www-form-urlencoded' }
		 })
		  .success(function(data) {
		    console.log(data);
		    $scope.isLoggedIn = true;
		  });
	};

}]);