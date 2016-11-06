(function() {
    'use strict';
    angular
        .module('app.buyer')
        .controller('BuyerController', BuyerController);

        BuyerController.$inject = [];

        function BuyerController() {
            var vm = this;
            vm.orders = [];

            activate();

            function activate() {
                vm.orders = [
                    {produceName: 'carrot', produceId: 12, produceBidsCount: 15},
                    {produceName: 'apple', produceId: 13, produceBidsCount: 45},
                    {produceName: 'cassava', produceId: 14, produceBidsCount: 75},
                ];
            }
        }
}());
