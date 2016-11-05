(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('producedata', producedata);

    producedata.$inject = ['$http'];

    // TODO: hook up all data services

    function producedata($http) {
        var service = {
            getAllProduce: getAllProduce,
            getProducePerFarmer: getProducePerFarmer,
            getProduceById: getProduceById
        };

        return service;

        /**
         * return a list of all produce entities
         */
        function getAllProduce() {
            var url = 'http://localhost:8000/api/v1/produce/all';
            var resp =  $http({
                url: url,
                method: 'GET',
                // withCredentials: false
            });
            return resp;
        }

        /**
         * return a list of all produce entities
         * requires: farmerId
         */
        function getProducePerFarmer(farmerId) {
            var url = 'http://localhost:8000/api/v1/produce/byUserId/' + farmerId;
            var resp =  $http({
                url: url,
                method: 'GET',
                // withCredentials: false
            });
            // resp is a promise object
            return resp;
        }

        function getProduceById(produceId) {
            var url = 'http://localhost:8000/api/v1/produce/' + produceId;
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
