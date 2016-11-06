(function() {
    'use strict';
    angular
        .module('app.auth', [])
        .controller('AuthController', AuthController);

        AuthController.$inject = ['$http', '$state', '$window'];

        function AuthController($http, $state, $window) {
            var vm = this;

            vm.loginCredentials = {
                username: 'farmer_26 / buyer_1'
            };

            vm.login = login;

            function login() {
                if (vm.loginCredentials.username == 'farmer_26') {
                    $window.sessionStorage.username = 'farmer_26';
                    $window.sessionStorage.user_id = 26;
                    $window.sessionStorage.role = 'supplier';
                    $window.sessionStorage.location_id = 7;
                    $state.go('farmer.dash');
                }
                else if (vm.loginCredentials.username == 'buyer_1') {
                    $window.sessionStorage.username = 'buyer_1';
                    $window.sessionStorage.user_id = 3;
                    $window.sessionStorage.role = 'buyer';
                    $window.sessionStorage.location_id = 6;
                    $state.go('buyer.dash');
                }

            }
        }
}());
