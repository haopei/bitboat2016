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
            getAllOrders: getAllOrders,
            getOrderById: getOrderById,
            getOrdersByUserId: getOrdersByUserId
        };
        return service;

        /**
         * Get al orders by author
         */

        function getOrdersByUserId(userId) {
            var url = 'http://localhost:8000/api/v1/user/' + userId + '/orders';
            var resp =  $http({
                url: url,
                method: 'GET'
            });
            return resp;
        }

        /**
         * Get orders by order id
         */
        function getOrderById(orderId) {
            var url = 'http://localhost:8000/api/v1/orders/' + orderId;
            var resp =  $http({
                url: url,
                method: 'GET'
            });

            return resp;
        }

        /**
         * All Orders
         */
         function getAllOrders() {
             var url = 'http://localhost:8000/api/v1/orders/all';
             var resp =  $http({
                 url: url,
                 method: 'GET'
             });

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
                method: 'POST'
            });

            return resp;
        }


    }
}());
