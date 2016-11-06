(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('orderdata', orderdata);

    orderdata.$inject = ['$http'];

    // TODO: hook up all data services

    function orderdata($http) {
        var service = {
            createOrder: createOrder,
            getAllOrders: getAllOrders
        };
        return service;

        /**
         * All Orders
         */
         function getAllOrders() {
             var url = 'http://localhost:8000/api/v1/orders/all';
             var resp =  $http({
                 url: url,
                 method: 'GET',
                 // withCredentials: false
             });
             // resp is a promise object
             return resp;
         }


        /**
         * Create an order
         */
        function createOrder(createOrderData) {
            var url = 'http://localhost:8000/api/v1/orders/create/' + createOrderData.produce_id;
            var resp =  $http({
                url: url,
                data: createOrderData,
                method: 'POST',
                // withCredentials: false
            });
            // resp is a promise object
            return resp;
        }


    }
}());
