'use strict';

angular.module('portal.payment', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/payments', {
            templateUrl: 'payment/payments.html',
            controller: 'View1Ctrl'
        }).when('/payment-details', {
            templateUrl: 'payment/payment-details.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', [function() {

    }]);