(function() {
    'use strict';
    angular
        .module('app.produce')
        .controller('AllProduceController', AllProduceController);

        AllProduceController.$inject = ['$window', 'producedata', 'getrole'];

        function AllProduceController($window, producedata, getrole) {
            var vm = this;
            vm.allProduce = [];

            activate();
            function activate() {
                getUserRole()

                producedata
                    .getAllProduce()
                    .then(function(resp) {
                        if (resp.status == 200) {
                            console.log('All produce returned');
                            vm.allProduce = resp.data;
                        }
                    });
            }

            function getUserRole() {
                var role = $window.sessionStorage.role;
                if (role == 'supplier') {
                    vm.role = 'supplier';
                }
                if (role == 'buyer') {
                    vm.role = 'buyer';
                }
            }
        }
}());
