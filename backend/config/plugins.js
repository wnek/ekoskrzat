module.exports = ({ env }) => {
  return {
    email: {
      config: {
        provider: "sendgrid",
        providerOptions: {
          apiKey: env("SENDGRID_API_KEY"),
        },
        settings: {
          defaultFrom: "przedszkole@ekoskrzat.edu.pl",
          defaultReplyTo: "ekoskrzat.przedszkole@gmail.com",
        },
      },
    },
    upload: {
      config: {
        sizeLimit: 250 * 1024 * 1024 // 256mb in bytes
      }
    }
  };
};
