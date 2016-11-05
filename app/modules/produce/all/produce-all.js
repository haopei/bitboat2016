(function() {
    'use strict';
    angular
        .module('app.produce')
        .controller('AllProduceController', AllProduceController);

        AllProduceController.$inject = ['producedata'];

        function AllProduceController(producedata) {
            var vm = this;
            vm.allProduce = [];

            activate();
            function activate() {
                producedata
                    .getAllProduce()
                    .then(function(resp) {
                        if (resp.status == 200) {
                            console.log('All produce returned');
                            vm.allProduce = resp.data;
                        }
                    });
            }
        }
}());
