(function() {
    'use strict';

    /**
     * Farmer Controller
     *  parent module for farmer module
     */

    angular
        .module('app.farmer')
        .controller('FarmerDashController', FarmerController);

        FarmerController.$inject = ['$window', 'biddata'];

        function FarmerController($window, biddata) {
            var vm = this;
            vm.getBidsPerFarmer = getBidsPerFarmer;
            vm.farmerBids = [];


            activate();

            function activate() {
                vm.farmerId = $window.sessionStorage.user_id;
                vm.getBidsPerFarmer();
            }

            function getBidsPerFarmer() {
                biddata
                    .getBidsPerUser(vm.farmerId)
                    .then(function(resp) {
                        vm.farmerBids = resp.data;
                    });
            }


        }
}());
