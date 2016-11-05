(function() {
    'use strict';

    angular
        .module('app.produce')
        .controller('ProduceController', ProduceController);

        ProduceController.$inject = [];

        function ProduceController() {
            var vm = this;
            vm.message = 'produce is hooked up!';
        }
}());
