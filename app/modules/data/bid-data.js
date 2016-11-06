(function() {
    'use strict';

    angular
        .module('app.data')
        .factory('biddata', biddata);

    biddata.$inject = ['$http'];

    function biddata($http) {
        var service = {
            createBid: createBid,
            getBidsPerUser: getBidsPerUser,
            getBidsPerOrder: getBidsPerOrder
        };

        return service;

        function getBidsPerOrder(orderId) {
            var url = 'http://localhost:8000/api/v1/orders/' + orderId + '/mybids';
            var resp =  $http({
                url: url,
                method: 'GET'
            });
            return resp;
        }

        /**
         * return a list of all produce entities
         */
        function createBid(createBidData) {
            var url = 'http://localhost:8000/api/v1/bids/create/' + createBidData.order_id;
            var resp =  $http({
                url: url,
                method: 'POST',
                data: {
                    producer_location_id: createBidData.producer_location_id,
                    userId: createBidData.user_id,
                    price: createBidData.price,
                    discription: 'something',
                    quantity: createBidData.supplyQuantity,
                    active: 1,
                    approved: 0
                }
            });
            // resp is a promise object
            return resp;
        }

        function getBidsPerUser(farmerId) {
            var url = 'http://localhost:8000/api/v1/user/' + farmerId + '/bids';
            var resp =  $http({
                url: url,
                method: 'GET'
            });
            return resp;

        }


    }
}());
