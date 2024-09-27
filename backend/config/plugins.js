module.exports = ({ env }) => {
  return {
    email: {
      config: {
        provider: "sendgrid",
        providerOptions: {
          apiKey: env("SENDGRID_API_KEY"),
        },
        settings: {
          defaultFrom: "hi@wnek.design",
          defaultReplyTo: "ekoskrzat.przedszkole@gmail.com",
        },
      },
    },
  };
};
