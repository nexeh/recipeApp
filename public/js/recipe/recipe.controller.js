angular.module('recipeApp.recipe.recipeController', [])

.controller('recipeController', ['$scope', function($scope) {

	$scope.recipeForm = {
		ingredients: [{}]
	};

}]);