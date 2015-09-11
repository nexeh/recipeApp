angular.module('recipeApp.header.headerController', [])

.controller('headerController', ['$scope', function($scope) {

	$scope.applicationName = "Application Name";
	$scope.isLoggedIn = false;
	$scope.userName = 'Jeremy Corson';
}]);