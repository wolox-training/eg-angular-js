'use strict';

angular.module('core.auth').factory('Auth', ['$http', 'Environment', 'Session', 'Users',
  ($http, Environment, Session, Users) => {
    const baseUrlApi = Environment.wBooksApiUrl + 'users/sessions';
    return {
      authenticate: (session) => {
        return $http.post(baseUrlApi, session).then(async resp => {
          if (resp.data.access_token) {
            Session.create(resp.data);
            $http.defaults.headers.common.Authorization = resp.data.access_token;
            let user = await Users.information();
            const userEntity = {
              id: user.id,
              firstName: user.first_name,
              lastName: user.last_name,
              email: user.email,
              unreadNotifications: user.unread_notifications,
              rentsCounter: user.rents_counter,
              commentsCounter: user.comments_counter,
              imageUrl: user.image_url
            };
            Session.setUser(userEntity);
          } else {
            throw new Error(resp.data.error || 'General error ocurred');
          }
        }, resp => {
          throw new Error(resp.data.error || 'General error ocurred');
        });
      },
      isAuthenticated: () => {
        return new Promise(resolve => {
          resolve(!!Session.user);
        });
      }
    };
  }]);
