'use strict';

angular.module('wBooksApp', [
  'ui.router',
  'core.book',
  'bookItem',
  'booksList',
  'bookDetail',
  'wInput'
]).
config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
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
      url: '/books/{id}', 
      component: 'bookDetail',
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
