module.exports = {
    async verifyPassword(ctx) {
      const { password } = ctx.request.body;
      const correctPassword = process.env.GALLERY_PASSWORD;
      
      if (password === correctPassword) {
        return { authorized: true };
      }
      
      return ctx.unauthorized('Invalid password');
    },
  };