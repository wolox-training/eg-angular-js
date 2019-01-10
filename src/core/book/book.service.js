'use strict';

angular.module('core.book').factory('Books', ['$http', 'Environment', function ($http, Environment) {
  const baseUrlApi = Environment.wBooksApiUrl + 'books';
  const mapper = (book) => {
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
        if (resp.data) {
          return resp.data.map(mapper);
        }
        return resp.data;
      });
    },
    information: (id) => {
      return $http.get(`${baseUrlApi}/${id}`).then(resp => {
        if (resp.data) {
          return mapper(resp.data);
        }
        return resp.data;
      });
    }
  };
}]);
