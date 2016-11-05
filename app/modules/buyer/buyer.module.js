(function() {
    'use strict';

    angular
        .module('app.buyer', [])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('buyer', {
                    url: '/buyer',
                    templateUrl: 'app/modules/buyer/buyer.html',
                    controller: 'BuyerController',
                    controllerAs: 'vm'
                })
                .state('buyer.dash', {
                    url: '/dash',
                    templateUrl: 'app/modules/buyer/dash/dash.html'
                });
        });
}());
