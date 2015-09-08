angular.module('reciepeService', [])

	// super simple service
	// each function returns a promise object
	.factory('Reciepe', ['$http',function($http) {
		return {
			get : function() {
				return $http.get('/api/reciepe');
			},
			create : function(todoData) {
				return $http.post('/api/reciepe', todoData);
			},
			delete : function(id) {
				return $http.delete('/api/reciepe/' + id);
			}
		}
	}]);