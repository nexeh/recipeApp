angular.module('recipeApp.header.headerController', [])

.controller('headerController', ['$scope', function($scope) {

	$scope.applicationName = "Application Name";
	$scope.isLoggedIn = true;
	$scope.userName = 'Jeremy Corson';
}]);