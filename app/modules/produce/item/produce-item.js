(function() {
    'use strict';

    angular
        .module('app.produce')
        .controller('ProduceItemController', ProduceItemController);

    ProduceItemController.$inject = ['$stateParams', 'producedata', 'statsdata'];

    function ProduceItemController($stateParams, producedata, statsdata) {
        var vm = this;
        vm.getProduceById = getProduceById;
        vm.getStatsPerProduce = getStatsPerProduce;
        vm.initProduceChart = initProduceChart;

        vm.produce = null;
        vm.produceDemandStats = [];
        vm.produceSupplyStats = [];
        // vm.producePriceStats = [];

        activate();

        function activate() {
            vm.getProduceById();
            vm.getStatsPerProduce();
        }

        function initProduceChart() {
            var CHART = document.getElementById('produceChart');
            var demandLabel = 'Demand of ' + vm.produce.name;
            var supplyLabel = 'Supply of ' + vm.produce.name;
            var priceLabel = 'Price';

            var myLineChart = new Chart(CHART, {
                type: 'line',
                data: {
                    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    datasets: [{
                        label: demandLabel,
                        fill: false,
                        lineTension: 0.2,
                        backgroundColor: "rgba(75,192,192,0.4)",
                        borderColor: "rgba(75,192,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,192,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 10,
                        pointHoverBackgroundColor: "rgba(75,192,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: vm.produceDemandStats,
                        spanGaps: false,
                    }, {
                        label: supplyLabel,
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: "rgba(75,72,192,0.4)",
                        borderColor: "rgba(75,72,192,1)",
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: "rgba(75,72,192,1)",
                        pointBackgroundColor: "#fff",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: "rgba(75,72,192,1)",
                        pointHoverBorderColor: "rgba(220,220,220,1)",
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: vm.produceSupplyStats,
                        spanGaps: false,
                    }]
                }
            });
        }

        function getProduceById() {
            producedata
                .getProduceById($stateParams.produceId)
                .then(function(resp) {
                    vm.produce = resp.data;
                    // console.log(resp);
                });
        }

        function getStatsPerProduce() {
            statsdata
                .getStatsPerProduce($stateParams.produceId)
                .then(function(resp) {
                    if (resp.status == 200) {
                        console.log(resp);

                        resp.data.forEach(function(item) {
                            vm.produceDemandStats.push(item.demanded);
                            vm.produceSupplyStats.push(item.produced);
                            // vm.producePriceStats.push(item.order_avg);
                        });

                        vm.initProduceChart();
                    } else {
                        console.log('error loading produce stats');
                    }
                });
        }

    }
}());
