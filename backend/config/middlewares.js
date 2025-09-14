module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  {
    name: "strapi::cors",
    config: {
      origin: ["*"],
    },
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  // Custom middleware to sanitize repeated folderPath query from Admin Upload plugin
  {
    name: "global::sanitize-upload-folderpath",
  },
  {
    name: "strapi::body",
    config: {
      formLimit: "1024mb", // modify form body
      jsonLimit: "1024mb", // modify JSON body
      textLimit: "1024mb", // modify text body
      formidable: {
        maxFileSize: 1024 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
      },
    },
  },
];
