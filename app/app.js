'use strict';

// Declare app level module which depends on views, and core components
angular.module('wBooksApp', [
  'ngRoute',
  'booksList',
  'wInput'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.
  when('/dashboard', {
    template: '<books-list></books-list>'
  }).
  otherwise('/dashboard');
}]);
