'use strict';

angular.module('bookDetail').component('bookDetail', {
  templateUrl: 'book-detail/book-detail.template.html',
  bindings: { book: '<' },
  controller: function BookDetailController () {
    const ctrl = this;
  }
});
