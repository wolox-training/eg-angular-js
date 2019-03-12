angular.module('core.config').constant('TRANSLATIONS', {
  es: {
    global: {
      search: 'Buscar',
      noDataFound: 'No se han encontrado resultados',
      back: 'Volver'
    },
    login: {
      title: 'Iniciar sesión',
      email: 'Correo electrónico',
      emailRequired: 'Debe ingresar un correo electrónico',
      emailInvalid: 'Debe ingresar un email válido',
      password: 'Contraseña',
      passwordRequired: 'Debe ingresar una contraseña',
      passwordInvalid: 'Su contraseña que tenga entre 8 y 52 caracteres, y al menos una letra y un número',
      loginAction: '@:login.title'
    },
    booksList: {
      selectFilter: 'Seleccionar filtro',
      search: '@:global.search'
    },
    booksDetail: {
      rent: 'Alquilar',
      suggestions: 'Sugerencias',
      comments: 'Comentarios'
    },
    navBar: {
      profile: 'Perfil',
      signOut: 'Cerrar sesión'
    }
  }
});
