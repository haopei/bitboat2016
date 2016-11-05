(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('producedata', producedata);

    producedata.$inject = ['$http'];

    function producedata($http) {
        var service = {
            getAllProduce: getAllProduce,
            getProducePerFarmer: getProducePerFarmer,
        };

        return service;


        /**
         * return a list of all produce entities
         */
        function getAllProduce() {
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
         */
        function getProducePerFarmer() {
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
