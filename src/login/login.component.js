'use strict';

angular.module('login').component('login', {
  templateUrl: 'login/login.template.html',
  bindings: { books: '<' },
  controller: ['Auth', '$state', function BooksListController(Auth, $state) {
    this.passwordValidatorPattern = new RegExp('^(?=.*[A-z])(?=.*[0-9]).{8,52}$');
    this.emailValidatorPattern = new RegExp('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$');

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
