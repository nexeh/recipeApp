angular.module('recipeApp.header.headerController', [
    'recipeApp.login.loginService'])

.controller('headerController', ['$scope', '$http', '$rootScope', 'LoginService',

    function($scope, $http, $rootScope, LoginService) {

	$scope.applicationName = "RecipeApp";
    $scope.loginService = LoginService;
    $scope.navList = [
        {
            name: 'Home',
            displayName: 'Tour',
            url: '#/',
            loggedIn: false
        },
        {
            name: 'Blog',
            displayName: 'Blog',
            url: '#/blog',
            loggedIn: false
        },
        {
            name: 'Recipes',
            displayName: 'Recipes',
            url: '#/recipes',
            loggedIn: true
        },
        {
            name: 'Plan',
            displayName: 'Plan',
            url: '#/plan',
            loggedIn: true
        },
        {
            name: 'Shop',
            displayName: 'Shop',
            url: '#/shop',
            loggedIn: true
        }
    ];

    $scope.update = function () {
        console.log("state changed");
    };

    // When the user navigates around the application
    $rootScope.$on('$stateChangeSuccess', $scope.update);

}]);