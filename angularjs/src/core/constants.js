angular.module('core.config').constant('Constants', {
  USER_EMAIL_PATTERN: '^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$',
  USER_PSSWORD_PATTERN: '^(?=.*[A-z])(?=.*[0-9]).{8,52}$',
  ONLY_CHARS_AND_SPACES_PATTERN: '^[a-zA-Z\s]*$'
});
