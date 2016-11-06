(function() {
    'use strict';

    angular
        .module('app.buyer')
        .controller('BuyerDashController', BuyerDashController);

        BuyerDashController.$inject = ['$window', 'orderdata'];

        function BuyerDashController($window, orderdata) {
            var vm = this;
            vm.getAllOrdersPerBuyer = getAllOrdersPerBuyer;
            vm.allOrders = [];

            activate();

            function activate() {
                vm.getAllOrdersPerBuyer();
            }

            function getAllOrdersPerBuyer() {

                orderdata
                    .getOrdersByUserId($window.sessionStorage.user_id)
                    .then(function(resp) {
                        vm.allOrders = resp.data;
                    });
            }
        }
}());
