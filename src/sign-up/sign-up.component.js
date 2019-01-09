'use strict';

angular.module('signUp').component('signUp', {
  templateUrl: 'sign-up/sign-up.template.html',
  bindings: { books: '<' },
  controller: ['$state', 'Users', function BooksListController($state, Users) {
    this.passwordValidatorPattern = new RegExp('^(?=.*[A-z])(?=.*[0-9]).{8,52}$');
    this.emailValidatorPattern = new RegExp('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

    this.submit = async () => {
      const user = {
        user: {
          email: this.user.email,
          password: this.user.password,
          password_confirmation: this.user.password,
          first_name: this.user.firstName,
          last_name: this.user.lastName,
          locale: 'es'
        }
      };
      this.loading = true;
      await Users.create(user);
      // $state.go('logIn'); Available in next card.
    };
  }]
});
