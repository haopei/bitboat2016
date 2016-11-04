(function() {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.home'
        ])
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/modules/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                });

            $urlRouterProvider.otherwise('/');
        });
}());
