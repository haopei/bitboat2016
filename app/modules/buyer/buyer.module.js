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
                    templateUrl: 'app/modules/buyer/dash/buyer-dash.html'
                })
                .state('buyer.profile', {
                    url: '/dash/:profileId',
                    templateUrl: 'app/modules/buyer/profile/buyer-profile.html'
                });
        });
}());
