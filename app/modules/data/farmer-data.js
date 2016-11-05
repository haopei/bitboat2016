(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('farmerdata', farmerdata);

    farmerdata.$inject = ['$http'];

    // TODO: hook up all data services

    function farmerdata($http) {
        var service = {
            getUserById: getUserById
        };

        return service;


        /**
         * Get user by id
         */
        function getUserById(userId) {
            var url = 'http://localhost:8000/api/v1/user/' + userId;
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
