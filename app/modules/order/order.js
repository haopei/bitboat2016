(function() {
    'use strict';

    angular
        .module('app.order')
        .controller('OrderController', OrderController);

        OrderController.$inject = [];

        function OrderController() {
            var vm = this;
            vm.message = 'Order is hooked up';
        }
}());
