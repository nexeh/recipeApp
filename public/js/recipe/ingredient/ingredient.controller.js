angular.module('recipeApp.recipe.ingredient.ingredientController', [])

.controller('ingredientController', ['$scope', function($scope) {

	$scope.cookingMeasurements = [
		{name: "Teaspoon"},
		{name: "Tablespoon"},
		{name: "dash"},
		{name: "a pinch"},
		{name: "cup"},
		{name: "Pound"},
		{name: "ounces"},
		{name: "Pint"},
		{name: "Quart"},
		{name: "Gallon"},
		{name: "ml"},
		{name: "liter"},
		{name: "grams"},
		{name: "kilogram"}
	];

}]);