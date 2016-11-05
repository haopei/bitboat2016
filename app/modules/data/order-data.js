(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('orderdata', orderdata);

    orderdata.$inject = ['$http'];

    // TODO: hook up all data services

    function orderdata($http) {
        var service = {
            createOrder: createOrder
        };
        return service;

        /**
         * Create an order
         */
        function createOrder(createOrderData) {
            var url = 'http://localhost:8000/api/v1/orders/create';
            var resp =  $http({
                url: url,
                method: 'POST',
                // withCredentials: false
            });
            // resp is a promise object
            return resp;
        }


    }
}());
