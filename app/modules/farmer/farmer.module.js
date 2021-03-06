(function() {
    'use strict';

    angular
        .module('app.farmer', [])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('farmer', {
                    url: '/farmer',
                    templateUrl: 'app/modules/farmer/farmer.html',
                })
                .state('farmer.dash', {
                    url: '/dash',
                    templateUrl: 'app/modules/farmer/dash/farmer-dash.html',
                    controller: 'FarmerDashController',
                    controllerAs: 'vm'
                })
                .state('farmer.profile', {
                    url: '/profile/:profileId',
                    templateUrl: 'app/modules/farmer/profile/farmer-profile.html',
                    controller: 'FarmerProfileController',
                    controllerAs: 'vm'
                });
        });
}());
