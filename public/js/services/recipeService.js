angular.module('recipeService', [])

	// super simple service
	// each function returns a promise object
	.factory('Recipe', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/recipe');
			},
			create : function(todoData) {
				return $http.post('/api/recipe', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/recipe/' + id);
			}
		}
	}]);