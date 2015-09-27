angular.module('recipeApp.recipe.recipeController', [])

.controller('recipeController', ['$scope', function($scope) {

	$scope.recipeForm = {
		ingredients: [{},{}],
		instructions: [{}]
	};

	$scope.addIngredient = function () {
		$scope.recipeForm.ingredients.push({});
	};

	$scope.addInstruction = function () {
		$scope.recipeForm.instructions.push({});
	};


	$scope.saveRecipe = function () {
		console.log($scope.recipeForm);
	};

}]);