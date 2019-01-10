'use strict';

angular.module('navbar').component('navbar', {
  templateUrl: 'navbar/navbar.template.html',
  bindings: {},
  controller: ['Auth', '$state', function BooksListController(Auth, $state) {
    this.signOut = () => {
      Auth.signOut();
      $state.go('login');
    }
  }]
});
