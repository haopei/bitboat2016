(function() {
    'use strict';
    angular
        .module('app.auth', [])
        .controller('AuthController', AuthController);

        AuthController.$inject = [];

        function AuthController() {
            var vm = this;
            vm.message = 'login page is connected';
        }
}());
