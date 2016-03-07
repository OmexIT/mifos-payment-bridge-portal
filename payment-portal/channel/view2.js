'use strict';

angular.module('portal.channel', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/channel', {
    templateUrl: 'channel/channel-details.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [function() {

}]);