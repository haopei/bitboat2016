(function() {
    'use strict';

    angular
        .module('app.order')
        .controller('CreateOrderController', CreateOrderController);

    CreateOrderController.$inject = ['$stateParams', 'producedata', 'orderdata'];

    function CreateOrderController($stateParams, producedata, orderdata) {
        var vm = this;
        // vm.allProduce = [];
        // vm.getAllProduce = getAllProduce;
        vm.produce = null;
        vm.getProduceById = getProduceById;
        vm.produceId = $stateParams.produceId;
        vm.createOrder = createOrder;
        vm.createOrderData = {
            user_id: 3,
            deliveryLocationId: 3,
            active: 1,
            produce_id: vm.produceId
        };

        activate();
        function activate() {
            // vm.getAllProduce();
            vm.getProduceById();
        }

        function createOrder() {
            orderdata
                .createOrder(vm.createOrderData)
                .then(function(resp) {
                    console.log(resp);
                });
        }

        function getProduceById() {
            producedata
                .getProduceById($stateParams.produceId)
                .then(function(resp) {
                    vm.produce = resp.data;
                    console.log(resp);
                });
        }

        // function getAllProduce() {
        //     producedata
        //         .getAllProduce()
        //         .then(function(resp) {
        //             if (resp.status == 200) {
        //                 vm.allProduce = resp.data;
        //             }
        //         }) ;
        // }
    }
}());
