'use strict';

angular.module('login').component('login', {
  templateUrl: 'login/login.template.html',
  bindings: { books: '<' },
  controller: ['Auth', '$state', 'Constants', function BooksListController(Auth, $state, Constants) {
    this.passwordValidatorPattern = new RegExp(Constants.USER_PSSWORD_PATTERN);
    this.emailValidatorPattern = new RegExp(Constants.USER_EMAIL_PATTERN);

    this.submit = async () => {
      const data = {
        session: this.user
      };
      this.loading = true;

      Auth.authenticate(data).then(() => {
        $state.go('booksList');
        this.loading = false;
      }, error => {
        this.loading = false;
        this.errorMessage = error;
      });
    };
  }]
});
