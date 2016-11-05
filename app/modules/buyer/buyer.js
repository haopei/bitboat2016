(function() {
    'use strict';
    angular
        .module('app.buyer')
        .controller('BuyerController', BuyerController);

        BuyerController.$inject = [];

        function BuyerController() {
            var vm = this;
            vm.message = 'buuyerr';
        }
}());
