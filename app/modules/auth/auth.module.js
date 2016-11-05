(function() {
    'use strict';
    angular
        .module('app.auth', [])
        .controller('AuthController', AuthController);

        AuthController.$inject = [];

        function AuthController() {
            var vm = this;
            vm.loginCredentials = {};
            vm.login = login;

            function login() {
                console.log(vm.loginCredentials);
                // TODO: make http request to login
            }
        }
}());
