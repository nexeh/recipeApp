'use strict';

angular.module('recipeApp.routes', ['ui.router'])
.config(['$stateProvider', '$urlRouterProvider',
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
        });

        $urlRouterProvider.otherwise('/');
    }
    ]);
