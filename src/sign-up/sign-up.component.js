'use strict';

angular.
  module('signUp').
  component('signUp', {
    templateUrl: 'sign-up/sign-up.template.html',
    bindings: { books: '<' },
    controller: function BooksListController() {
      this.passwordValidatorPattern = new RegExp('^(?=.*[A-z])(?=.*[0-9]).{8,52}$');
      this.emailValidatorPattern = new RegExp('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

      this.submit = () => {
        console.log(this.user);
      }
    }
  });
