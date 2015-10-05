'use strict';

angular.module('recipeApp.routes', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',

// <li ng-show="!isLoggedIn" class="active"><a href="#/">Tour</a></li>
// <li ng-show="!isLoggedIn"><a href="#/blog">Blog</a></li>
// <li ng-show="isLoggedIn"><a href="#/recipes">Recipes</a></li>
// <li ng-show="isLoggedIn"><a href="#/plan">Plan</a></li>
// <li ng-show="isLoggedIn"><a href="#/shop">Shop</a></li>

    function ($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('blog', {
            url: '/blog',
            templateUrl: 'js/blog/blog.tmpl.html',
            authenticate: false,
            roles: []
        })

        .state('home', {
            url: '/',
            templateUrl: 'js/marketing/frontPage.tmpl.html',
            authenticate: false,
            roles: []
        })

        .state('recipes', {
            url: '/recipes',
            templateUrl: 'js/recipe/recipeList.tmpl.html',
            authenticate: false,
            roles: []
        })

        .state('newRecipe', {
            url: '/newRecipe',
            templateUrl: 'js/recipe/recipe.tmpl.html',
            authenticate: false,
            roles: []
        })

        .state('plan', {
            url: '/plan',
            templateUrl: 'js/marketing/frontPage.tmpl.html',
            authenticate: false,
            roles: []
        })

        .state('shop', {
            url: '/shop',
            templateUrl: 'js/marketing/frontPage.tmpl.html',
            authenticate: false,
            roles: []
        });

        $urlRouterProvider.otherwise('/');
    }
    ]);
