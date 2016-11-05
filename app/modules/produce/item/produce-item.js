(function() {
    'use strict';

    angular
        .module('app.produce')
        .controller('ProduceItemController', ProduceItemController);

        ProduceItemController.$inject = ['$stateParams', 'producedata'];

        function ProduceItemController($stateParams, producedata) {
            var vm = this;
            vm.getProduceById = getProduceById;
            vm.produce = null;

            activate();

            function activate() {
                vm.getProduceById();
            }

            function getProduceById() {
                producedata
                    .getProduceById($stateParams.produceId)
                    .then(function(resp) {
                        vm.produce = resp.data;
                        console.log(resp);
                    });
            }

        }
}());
