angular.module('recipeApp.recipe.recipeController', ['recipeApp.recipe.recipeService'])

.controller('recipeController', ['$scope', 'RecipeService', '$location',
	function($scope, RecipeService, $location) {

	$scope.recipeForm = {
		ingredients: [{}],
		instructions: [{}]
	};

	$scope.changeIngredient = function(index) {
		if (index == $scope.recipeForm.ingredients.length -1) {
			$scope.addIngredient();
		}
	};

	$scope.changeInstruction = function(index) {
		if (index == $scope.recipeForm.instructions.length -1) {
			$scope.addInstruction();
		}
	};

	$scope.addIngredient = function () {
		$scope.recipeForm.ingredients.push({});
	};

	$scope.addInstruction = function () {
		$scope.recipeForm.instructions.push({});
	};

	$scope.saveRecipe = function () {
		RecipeService.create($scope.recipeForm);
		$location.path('/recipes')
	};

}]);