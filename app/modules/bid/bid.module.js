(function() {
    'use strict';

    angular
        .module('app.bid', [])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('bid', {
                    url: '/bid',
                    templateUrl: 'app/modules/bid/bid.html',
                })
                .state('bid.create', {
                    url: '/create/:orderId',
                    templateUrl: 'app/modules/bid/create/bid-create.html',
                    controller: 'BidCreateController',
                    controllerAs: 'vm'
                })
                .state('bid.page', {
                    url: '/page/:bidId',
                    templateUrl: 'app/modules/bid/page/bid-page.html',
                    controller: 'BidPageController',
                    controllerAs: 'vm'
                });
        });
}());
