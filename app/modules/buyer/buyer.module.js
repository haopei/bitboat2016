(function() {
    'use strict';

    angular
        .module('app.buyer', [])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('buyer', {
                    url: '/buyer',
                    templateUrl: 'app/modules/buyer/buyer.html',
                })
                .state('buyer.dash', {
                    url: '/dash',
                    templateUrl: 'app/modules/buyer/dash/buyer-dash.html',
                    controller: 'BuyerDashController',
                    controllerAs: 'vm'
                })
                .state('buyer.profile', {
                    url: '/:profileId',
                    templateUrl: 'app/modules/buyer/profile/buyer-profile.html',
                    controller: 'BuyerProfileController',
                    controllerAs: 'vm'
                });
        });
}());
