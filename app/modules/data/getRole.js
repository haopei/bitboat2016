(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('getrole', getrole);

    getrole.$inject = ['$http', '$window'];

    // TODO: hook up all data services

    function getrole($http, $window) {
        var service = {
        };
        return service;

        function getUserRole() {
            console.log($window.sessionStorage);
        }

    }
}());
