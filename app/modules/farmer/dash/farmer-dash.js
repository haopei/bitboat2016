(function() {
    'use strict';

    /**
     * Farmer Controller
     *  parent module for farmer module
     */

    angular
        .module('app.farmer')
        .controller('FarmerDashController', FarmerController);

        FarmerController.$inject = [];

        function FarmerController() {
            var vm = this;
            vm.message = 'farmer controller linked up!';
        }
}());
