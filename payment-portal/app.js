'use strict';

// Declare payment-portal level module which depends on views, and components
angular.module('portal', [
    'ngRoute',
    'portal.dashboard',
    'portal.channel',
    'portal.payment'
]).config(['$routeProvider', function ($routeProvider) {
    $routeProvider.otherwise({redirectTo: '/dashboard'});
}]);
