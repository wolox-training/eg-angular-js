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
  'navbar'
]).config(['$stateProvider', '$urlRouterProvider', '$translateProvider',
  function($stateProvider, $urlRouterProvider, $translateProvider) {
    var translations = {
      global: {
        search: 'Buscar',
        noDataFound: 'No se han encontrado resultados'
      },
      login: {
        title: 'Iniciar sesión',
        email: 'Correo electrónico',
        emailRequired: 'Debe ingresar un correo electrónico',
        emailInvalid: 'Debe ingresar un email válido',
        password: 'Contraseña',
        passwordRequired: 'Debe ingresar una contraseña',
        passwordInvalid: 'Su contraseña que tenga entre 8 y 52 caracteres, y al menos una letra y un número',
        loginAction: '@:login.title'
      },
      booksList: {
        selectFilter: 'Seleccionar filtro',
        search: '@:global.search'
      }
    };
    $translateProvider
    .translations('es', translations)
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
