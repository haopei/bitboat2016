(function() {
    'use strict';

    angular
        .module('app.bid')
        .controller('BidCreateController', BidCreateController);

        BidCreateController.$inject = ['$state', '$stateParams', '$window', 'biddata', 'orderdata'];

        function BidCreateController($state, $stateParams, $window, biddata, orderdata) {
            var vm = this;
            vm.createBid = createBid;
            vm.getOrder = getOrder;
            vm.orderId = $stateParams.orderId;
            vm.order = null;


            activate();

            function activate() {

                vm.createBidData = {
                    producer_location_id: $window.sessionStorage.location_id,
                    user_id: $window.sessionStorage.user_id,
                    order_id: $stateParams.orderId
                };

                vm.getOrder();
            }

            function getOrder() {
                orderdata
                    .getOrderById(vm.orderId)
                    .then(function(resp) {
                        vm.order = resp.data;
                        console.log(resp.data);
                    });

            }

            // Make bids on order: api/v1/bids/create/<order_id>
            function createBid() {
                biddata
                    .createBid(vm.createBidData)
                    .then(function(resp) {
                        if (resp.status == 200) {
                            // TODO: go to farmer.dash
                            $state.go('farmer.dash');
                        }
                    });

            }
        }
}());
