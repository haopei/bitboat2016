(function() {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderItemController', OrderItemController);

        OrderItemController.$inject = ['$stateParams', '$window', 'orderdata', 'biddata'];

        function OrderItemController($stateParams, $window, orderdata, biddata) {
            var vm = this;
            vm.getOrder = getOrder;
            vm.getBidsPerOrder = getBidsPerOrder;
            vm.order = null;
            vm.bidsPerOrder = [];

            activate();

            function activate() {
                vm.getOrder();
                getUserRole();
            }

            function getBidsPerOrder() {
                biddata
                    .getBidsPerOrder(vm.order.id)
                    .then(function(resp) {
                        vm.bidsPerOrder = resp.data;
                        console.log(resp);
                    });
            }

            function getOrder() {
                orderdata
                    .getOrderById($stateParams.orderId)
                    .then(function(resp) {
                        console.log(resp.data);
                        if (resp.status == 200) {
                            vm.order = resp.data;
                            vm.getBidsPerOrder();
                        }
                        else {
                            vm.noBids = true;
                        }


                    });
            }

            function getUserRole() {
                var role = $window.sessionStorage.role;
                if (role == 'supplier') {
                    vm.role = 'supplier';
                }
                if (role == 'buyer') {
                    vm.role = 'buyer';
                }
            }
        }
}());
