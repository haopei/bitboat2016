(function() {
    'use strict';

    angular
        .module('app', [
            'app.core',
            'app.home',
            'app.auth',
            'app.order',
            'app.buyer',
            'app.farmer',
            'app.produce',
            'app.data',
            'app.bid'
        ])
        .config(function($stateProvider, $urlRouterProvider, $httpProvider) {

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: 'app/modules/home/home.html',
                    controller: 'HomeController',
                    controllerAs: 'vm'
                })
                .state('login', {
                    url: '/login',
                    templateUrl: 'app/modules/auth/login.html',
                    controller: 'AuthController',
                    controllerAs: 'vm'
                });

            $urlRouterProvider.otherwise('/');
        })
        .controller('HeaderController', HeaderController);

        function HeaderController($window, $scope) {

            if ($window.sessionStorage.user_id) {
                $scope.auth = true;

                $scope.username = $window.sessionStorage.username;
                $scope.role = $window.sessionStorage.role;

                if ($scope.role == 'buyer') {
                    $scope.logged_in_as_buyer = true;
                }
            }
        }
}());
