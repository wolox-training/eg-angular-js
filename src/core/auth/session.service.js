'use strict';

angular.module('core.auth').factory('Session', ['localStorageService', function (localStorageService) {
  this.tokenInfo = localStorageService.getObject('tokenInfo');
  this.user = localStorageService.getObject('user');
  this.create = function (tokenInfo) {
    localStorageService.setObject('tokenInfo', tokenInfo);
    this.tokenInfo = tokenInfo;
  };
  this.setUser = (user) => {
    localStorageService.setObject('user', user);
    this.user = user;
  };
  this.destroy = () => {
    localStorageService.remove(['user', 'tokenInfo']);
    this.user = null;
    this.tokenInfo = null;
  };

  return this;
}]);
