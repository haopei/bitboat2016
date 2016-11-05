(function() {
    'use strict';

    angular
        .module('app.produce', [])
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('produce', {
                    url: '/produce',
                    templateUrl: 'app/modules/produce/produce.html',
                    controllerAs: 'vm'
                })
                .state('produce.all', {
                    url: '/all',
                    templateUrl: 'app/modules/produce/all/produce-all.html',
                    controller: 'AllProduceController',
                    controllerAs: 'vm'
                })
                .state('produce.item', {
                    url: '/item/:produceId',
                    templateUrl: 'app/modules/produce/item/produce-item.html',
                    controller: 'ProduceItemController',
                    controllerAs: 'vm'
                });
        });

}());
