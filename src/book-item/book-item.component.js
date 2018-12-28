'use strict';

angular.
  module('bookItem', []).
  component('bookItem', {
    templateUrl: 'book-item/book-item.template.html',
    bindings: { 
      book: '<',
      small: '@'
    },
    controller: function BooksListController() {
      var ctrl = this;

    }
  });
