(function() {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderItemController', OrderItemController);

        OrderItemController.$inject = [];

        function OrderItemController() {
            var vm = this;
            vm.message = 'Order is hooked up';
        }
}());
