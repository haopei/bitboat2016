(function() {
    'use strict';

    /**
     * A module for buyer's orders (or demands)
     */

    angular
        .module('app.order', [])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('order', {
                    url: '/order',
                    templateUrl: 'app/modules/order/order.html',
                    controllerAs: 'vm'
                })
                .state('order.all', {
                    url: '/all',
                    templateUrl: 'app/modules/order/all/order-all.html',
                    controller: 'AllOrderController',
                    controllerAs: 'vm'
                })
                .state('order.item', {
                    url: '/item/:orderId',
                    templateUrl: 'app/modules/order/item/order-item.html',
                    controller: 'OrderItemController',
                    controllerAs: 'vm'
                })
                .state('order.create', {
                    url: '/create/:produceId',
                    templateUrl: 'app/modules/order/create/order-create.html',
                    controller: 'CreateOrderController',
                    controllerAs: 'vm'
                });
        });
}());
