'use strict';

angular.
  module('booksList').
  component('booksList', {
    templateUrl: 'books/books.template.html',
    bindings: { books: '<' },
    controller: function BooksListController() {
      this.filters = [{
        display: "Nombre",
        value: "title"
      }, {
        display: "Autor",
        value: "author"
      }];

      this.search = () => {
        this.filter = {};
        if (this.filterField && this.filterField.length > 0 && this.filterCriteria && this.filterCriteria.trim().length > 0) {
          this.filter[this.filterField] = this.filterCriteria;
        }
      }
    }
  });
