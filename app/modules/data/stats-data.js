(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('statsdata', statsdata);

    statsdata.$inject = ['$http'];


    function statsdata($http) {
        var service = {
            getStatsPerProduce: getStatsPerProduce
        };

        return service;

        /**
         * return stats per produce
         */
        function getStatsPerProduce(produceId) {
            var url = 'http://localhost:8000/api/v1/stats/' + produceId;
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
