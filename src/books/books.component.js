'use strict';

angular.
  module('booksList').
  component('booksList', {
    templateUrl: 'books/books.template.html',
    bindings: { books: '<' },
    controller: function BooksListController() {
      var ctrl = this;
      
      ctrl.filters = [{
        display: "Nombre",
        value: "title"
      }, {
        display: "Autor",
        value: "author"
      }];

      ctrl.search = () => {
        ctrl.filter = {};
        if (ctrl.filterField && ctrl.filterField.length > 0 && ctrl.filterCriteria && ctrl.filterCriteria.trim().length > 0) {
          ctrl.filter[ctrl.filterField] = ctrl.filterCriteria;
        }
      }
    }
  });
