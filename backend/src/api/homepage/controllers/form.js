module.exports = {
  
    strapi.plugins["email"].services.email.send({
      to: "recipient@example.com", // recipient email address
      subject: `Contact form submission from ${name}`,
      text: message,
    });
  
};
