(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('buyerdata', buyerdata);

    buyerdata.$inject = ['$http'];

    // TODO: hook up all data services

    function buyerdata($http) {
        var service = {};

        return service;


        /**
         * return a list of all produce entities
         */
        function getOrdersPerBuyer(buyerId) {
            var url = 'http://localhost:8000/';
            var resp =  $http({
                url: url,
                method: 'GET',
                // withCredentials: false
            });
            // resp is a promise object
            return resp;
        }

        /**
         * return a list of all produce entities
         * requires: farmerId
         */
        function createOrder() {
            var url = 'http://localhost:8000/';
            var resp =  $http({
                url: url,
                method: 'GET',
                // withCredentials: false
            });
            // resp is a promise object
            return resp;
        }

    }
}());
