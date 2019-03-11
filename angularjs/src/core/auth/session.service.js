'use strict';

angular.module('core.auth').factory('Session', ['$http', 'localStorageService',
  function ($http, localStorageService) {
    const updateSession = () => {
      $http.defaults.headers.common.Authorization = this.tokenInfo.access_token;
    };
    this.tokenInfo = localStorageService.getObject('tokenInfo');
    if (this.tokenInfo) {
      updateSession();
    }
    this.user = localStorageService.getObject('user');
    this.create = function (tokenInfo) {
      localStorageService.setObject('tokenInfo', tokenInfo);
      this.tokenInfo = tokenInfo;
      updateSession();
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
