module.exports = {
    routes: [
      {
        method: 'POST',
        path: '/gallery-auth',
        handler: 'gallery-auth.verifyPassword',
      },
    ],
  };