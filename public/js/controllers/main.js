angular.module('recipeApp.recipe', [])

	// inject the Recipe service factory into our controller
	.controller('mainController', ['$scope','$http','Recipe', function($scope, $http, Recipe) {
		$scope.formData = {};
		$scope.loading = true;

		// GET =====================================================================
		// when landing on the page, get all recipe and show them
		// use the service to get all the recipe
		Recipe.get()
			.success(function(data) {
				$scope.recipes = data;
				$scope.loading = false;
			});

		// CREATE ==================================================================
		// when submitting the add form, send the text to the node API
		$scope.createRecipe = function() {

			// validate the formData to make sure that something is there
			// if form is empty, nothing will happen
			if ($scope.formData.title != undefined) {
				$scope.loading = true;

				// call the create function from our service (returns a promise object)
				Recipe.create($scope.formData)

					// if successful creation, call our get function to get all the new recipe
					.success(function(data) {
						$scope.loading = false;
						$scope.formData = {}; // clear the form so our user is ready to enter another
						$scope.recipes = data; // assign our new list of recipe
					});
			}
		};

		// DELETE ==================================================================
		// delete a todo after checking it
		$scope.deleteRecipe = function(id) {
			$scope.loading = true;

			Recipe.delete(id)
				// if successful creation, call our get function to get all the new recipe
				.success(function(data) {
					$scope.loading = false;
					$scope.recipes = data; // assign our new list of recipe
				});
		};
	}]);