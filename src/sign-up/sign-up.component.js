'use strict';

angular.module('signUp').component('signUp', {
  templateUrl: 'sign-up/sign-up.template.html',
  bindings: { books: '<' },
  controller: ['$state', 'Users', 'Constants', function BooksListController($state, Users, Constants) {
    this.passwordValidatorPattern = new RegExp(Constants.USER_PSSWORD_PATTERN);
    this.emailValidatorPattern = new RegExp(Constants.USER_EMAIL_PATTERN);
    this.onlyCharsAndSpacesPattern = new RegExp(Constants.ONLY_CHARS_AND_SPACES_PATTERN);
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
      Users.create(user).then(() => {
      }, error => {
        this.loading = false;
        alert(error);
      });
    };
  }]
});
