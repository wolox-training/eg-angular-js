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
  var states = [{ 
    name: 'booksList', 
    url: '/books', 
    component: 'booksList',
    resolve: {
      books: (Books) => {
        return Books.get();
      }
    }
  }, { 
    name: 'bookDetail', 
    url: '/books/{id}', 
    component: 'bookDetail',
    resolve: {
      book: (Books, $stateParams) => {
        return Books.get().then(data => {
          return data.find(book => book.id == $stateParams.id);
        })
      }
    }
  }];
  
  $urlRouterProvider.otherwise('/books');
  states.forEach(state => $stateProvider.state(state) );
}]);
