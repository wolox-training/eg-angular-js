'use strict';

// Declare app level module which depends on views, and core components
angular.module('wBooksApp', [
  'ui.router',
  'core.book',
  'bookItem',
  'booksList',
  'bookDetail',
  'wInput'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  // An array of state definitions
  var states = [
    { 
      name: 'booksList', 
      url: '/books', 
      component: 'booksList',
      resolve: {
        books: function(Books) {
          return Books.get();
        }
      }
    },
    { 
      name: 'bookDetail', 
      // This state takes a URL parameter called personId
      url: '/books/{id}', 
      component: 'bookDetail',
      // This state defines a 'person' resolve
      // It delegates to the PeopleService, passing the personId parameter
      resolve: {
        book: function(Books, $stateParams) {
          
          return Books.get().find(function(book) { 
            return book.id == $stateParams.id;
          });
        }
      }
    }
  ];
  $urlRouterProvider.otherwise('/books');
  states.forEach(function(state) {
    $stateProvider.state(state);
  });
}]);
