'use strict';

angular.module('wBooksApp', [
  'ui.router',
  'core.book',
  'bookItem',
  'booksList',
  'bookDetail',
  'wInput',
  'signUp',
  'login'
]).config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  function _skipIfAuthenticated($timeout, $state, Auth) {
    return new Promise(async (resolve, reject) => {
      if (await Auth.isAuthenticated()) {
        $timeout(function () {
          $state.go('booksList');
        });
        reject();
      } else {
        resolve();
      }
    });
  }
  function _redirectIfNotAuthenticated($timeout, $state, Auth) {
    return new Promise(async (resolve, reject) => {
      if (await Auth.isAuthenticated()) {
        resolve();
      } else {
        $timeout(function () {
          $state.go('login');
        });
        reject();
      }
    });
  }

  var states = [{
    name: 'booksList',
    url: '/books',
    component: 'booksList',
    resolve: {
      redirectIfNotAuthenticated: _redirectIfNotAuthenticated,
      books: (Books) => {
        return Books.get();
      }
    }
  }, {
    name: 'bookDetail',
    url: '/books/{id}',
    component: 'bookDetail',
    resolve: {
      redirectIfNotAuthenticated: _redirectIfNotAuthenticated,
      book: (Books, $stateParams) => {
        return Books.get().then(data => {
          return data.find(book => book.id === +$stateParams.id);
        });
      }
    }
  }, {
    name: 'signUp',
    url: '/sign-up',
    component: 'signUp',
    resolve: {
      skipIfAuthenticated: _skipIfAuthenticated
    }
  }, {
    name: 'login',
    url: '/login',
    component: 'login',
    resolve: {
      skipIfAuthenticated: _skipIfAuthenticated
    }
  }];

  $urlRouterProvider.otherwise('/books');
  states.forEach(state => $stateProvider.state(state));
}]);
