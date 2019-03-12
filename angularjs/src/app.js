'use strict';

angular.module('wBooksApp', [
  'ui.router',
  'pascalprecht.translate',
  'core.book',
  'bookItem',
  'booksList',
  'bookDetail',
  'wInput',
  'signUp',
  'login',
  'navbar',
  'core.config'
]).config(['$stateProvider', '$urlRouterProvider', '$translateProvider', 'TRANSLATIONS',
  function($stateProvider, $urlRouterProvider, $translateProvider, TRANSLATIONS) {
    $translateProvider
    .translations('es', TRANSLATIONS.es)
    .preferredLanguage('es');
    $translateProvider.useSanitizeValueStrategy('escape');

    const _skipIfAuthenticated = ($timeout, $state, Auth) => {
      return new Promise(async (resolve, reject) => {
        if (await Auth.isAuthenticated()) {
          $timeout(() => {
            $state.go('booksList');
          });
          reject();
        } else {
          resolve();
        }
      });
    };

    const _redirectIfNotAuthenticated = ($timeout, $state, Auth) => {
      return new Promise(async (resolve, reject) => {
        if (await Auth.isAuthenticated()) {
          resolve();
        } else {
          $timeout(() => {
            $state.go('login');
          });
          reject();
        }
      });
    };

    let states = [{
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
          return Books.information(+$stateParams.id);
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
