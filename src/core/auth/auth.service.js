'use strict';

angular.module('core.auth').factory('Auth', ['$http', 'Environment', 'Session', 'Users',
  function ($http, Environment, Session, Users) {
    const baseUrlApi = Environment.wBooksApiUrl + 'users/sessions';
    return {
      authenticate: (session) => {
        return $http.post(baseUrlApi, session).then(async resp => {
          if (resp.data.access_token) {
            Session.create(resp.data);
            $http.defaults.headers.common.Authorization = resp.data.access_token;
            let user = await Users.information();
            if (!user) {
              user = {
                id: 1,
                first_name: 'Jorge',
                last_name: 'Campos',
                email: 'jorge.campos@wolox.com.ar',
                unread_notifications: 3,
                rents_counter: 5,
                comments_counter: 7,
                image_url: null
              };
            }

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
            return true;
          } else {
            throw new Error(resp.data.error || 'General error ocurred');
          }
        });
      },
      isAuthenticated: () => {
        const promise = new Promise((resolve) => {
          resolve(!!Session.user);
        });
        return promise;
      },
      signOut: () => {
        Session.destroy();
      }
    };
  }]);
