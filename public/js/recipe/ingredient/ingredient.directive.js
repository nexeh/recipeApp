angular.module('recipeApp.recipe.ingredient.ingredientDirective', ['recipeApp.recipe.ingredient.ingredientController'])
.directive('ingredient', function() {
    return {
    	restrict: 'E',
        templateUrl: 'js/recipe/ingredient/ingredient.tmpl.html'
  	};
});

