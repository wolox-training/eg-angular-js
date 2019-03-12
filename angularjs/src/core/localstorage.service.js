'use strict';

angular.module('localStorage', []).factory('localStorageService', [function () {
  return {
    getObject: key => {
      const localValue = localStorage.getItem(key);
      return localValue ? JSON.parse(localValue) : undefined;
    },
    setObject: (key, value) => {
      localStorage.setItem(key, JSON.stringify(value));
    },
    remove: key => {
      if (typeof key === 'object') {
        key.forEach(k => localStorage.removeItem(k));
      } else if (typeof key === 'string') {
        localStorage.removeItem(key);
      }
    }
  };
}]);
