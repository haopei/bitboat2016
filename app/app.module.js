(function() {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.home',
            'app.auth',
            'app.buyer',
            'app.farmer'
        ])
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/modules/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/modules/auth/login.html',
                    controller: 'AuthController',
                    controllerAs: 'vm'
                });

            $urlRouterProvider.otherwise('/');
        });
}());
