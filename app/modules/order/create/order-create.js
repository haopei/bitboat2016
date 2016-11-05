(function() {
    'use strict';

    angular
        .module('app.order')
        .controller('CreateOrderController', CreateOrderController);

    CreateOrderController.$inject = ['producedata', 'orderdata'];

    function CreateOrderController(producedata, orderdata) {
        var vm = this;
        vm.allProduce = [];
        vm.getAllProduce = getAllProduce;
        vm.createOrder = createOrder;
        vm.createOrderData = {};

        activate();

        function activate() {
            vm.getAllProduce();
        }

        function createOrder() {
            orderdata
                .createOrder()
                .then(function(resp) {
                    console.log(resp);
                });
        }

        function getAllProduce() {
            producedata
                .getAllProduce()
                .then(function(resp) {
                    if (resp.status == 200) {
                        vm.allProduce = resp.data;
                    }
                }) ;
        }
    }
}());
