'use strict';

angular.module('core.user').factory('Users', ['$http', 'Environment', function ($http, Environment) {
  const baseUrlApi = Environment.wBooksApiUrl + 'users';
  return {
    create: (user) => {
      return $http.post(baseUrlApi, user).then(resp => {
         return resp.data;
      });
    }
  };
}]);
