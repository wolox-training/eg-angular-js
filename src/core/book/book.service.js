'use strict';

angular.module('core.book').factory('Books', ['$http', function ($http) {
  return {
    get: () => {
      return $http.get('assets/books.json', { cache: true }).then(resp => {
        return resp.data;
      });
    }
  }
}]);
