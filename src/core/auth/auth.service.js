'use strict';

angular.module('core.auth').factory('Auth', ['$http', function ($http) {
  return {
    authenticate: () => {
      return true;
    },
    isAuthenticated: () => {
      const promise = new Promise((resolve, reject) => {
        resolve(true);
      });
      return promise;
    }
  }
}]);
