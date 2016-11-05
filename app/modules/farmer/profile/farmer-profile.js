

(function() {
    'use strict';

    /**
     * Farmer Controller
     *  parent module for farmer module
     */

    angular
        .module('app.farmer')
        .controller('FarmerProfileController', FarmerProfileController);

        FarmerProfileController.$inject = ['$stateParams', 'farmerdata', 'producedata'];

        function FarmerProfileController($stateParams, farmerdata, producedata) {
            var vm = this;
            vm.farmer = null;
            vm.producePerFarmer = [];

            vm.getFarmerById = getFarmerById;
            vm.getProducePerFarmer = getProducePerFarmer;

            activate();

            function activate() {
                vm.getFarmerById();
                vm.getProducePerFarmer();
            }

            function getFarmerById() {
                farmerdata
                    .getUserById($stateParams.profileId)
                    .then(function(resp) {
                        if (resp.status == 200) {
                            vm.farmer = resp.data;
                        }

                    });
            }

            function getProducePerFarmer() {
                producedata
                    .getProducePerFarmer($stateParams.profileId)
                    .then(function(resp) {
                        vm.producePerFarmer = resp.data;
                        console.log(resp);
                    });
            }
        }
}());
