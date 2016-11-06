(function() {
    'use strict';

    angular
        .module('app.order')
        .controller('AllOrderController', AllOrderController);

    AllOrderController.$inject = ['orderdata'];

    function AllOrderController(orderdata) {
        var vm = this;
        vm.allOrders = [];
        vm.getAllOrders = getAllOrders;

        activate();

        function activate() {
            vm.getAllOrders();
        }

        function getAllOrders() {
            orderdata
                .getAllOrders()
                .then(function(resp) {
                    console.log(resp);
                    vm.allOrders = resp.data;
                });
        }

    }

}());
