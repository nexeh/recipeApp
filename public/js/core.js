angular.module('recipeApp', [
	'recipeApp.recipe',
	'recipeApp.recipe.recipeService',
	'recipeApp.recipe.recipeController',
    'recipeApp.recipe.recipeListController',
	'recipeApp.recipe.ingredient.ingredientController',
	'recipeApp.recipe.ingredient.ingredientDirective',
	'recipeApp.header.headerController',
    'recipeApp.routes'
]);
