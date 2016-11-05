(function() {
    'use strict';

    angular
        .module('app.home', [])
        .controller('HomeController', HomeController);

        HomeController.$inject = ['orderdata'];

        function HomeController(orderdata) {
            var vm = this;
            vm.title = "hi there";
        }

}());
