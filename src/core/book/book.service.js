'use strict';

angular.module('core.book').factory('Books', ['$http', 'Environment', ($http, Environment) => {
  const baseUrlApi = Environment.wBooksApiUrl + 'books';
  const mapper = book => {
    return {
      id: book.id,
      author: book.author,
      title: book.title,
      genre: book.genre,
      publisher: book.publisher,
      year: book.year,
      imageUrl: book.image_url,
      description: book.description
    };
  };

  return {
    get: () => {
      return $http.get(baseUrlApi).then(resp => {
        return resp.data ? resp.data.map(mapper) : resp.data;
      });
    },
    information: (id) => {
      return $http.get(`${baseUrlApi}/${id}`).then(resp => {
        return resp.data ? mapper(resp.data) : resp.data;
      });
    }
  };
}]);
