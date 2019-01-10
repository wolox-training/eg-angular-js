'use strict';

angular.module('core.auth').factory('Session', function () {
  const localTokenInfo = localStorage.getItem('tokenInfo');
  const localUser = localStorage.getItem('user');
  if (localTokenInfo) {
    this.tokenInfo = JSON.parse(localTokenInfo);
  }
  if (localUser) {
    this.user = JSON.parse(localUser);
  }
  this.create = function (tokenInfo) {
    localStorage.setItem('tokenInfo', JSON.stringify(tokenInfo));
    this.tokenInfo = tokenInfo;
  };
  this.setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
  };
  this.destroy = function () {
    localStorage.removeItem('user');
    localStorage.removeItem('tokenInfo');
    this.user = null;
    this.tokenInfo = null;
  };

  return this;
});
