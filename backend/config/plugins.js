module.exports = ({ env }) => {
  return {
    backup: {
      enabled: true,
      config: {
        cronSchedule: "0 9-17 * * *", // At minute 0 past every hour from 9 through 17
        storageService: "aws-s3",
        awsAccessKeyId: "<AWS_ACCESS_KEY_ID>",
        awsSecretAccessKey: "<AWS_SECRET_ACCESS_KEY>",
        sqlite3Executable: "/path/to/your/sqlite3/bin",
        awsRegion: "<AWS_REGION>",
        awsS3Bucket: "<AWS_S3_BUCKET>",
        databaseDriver: env("DATABASE_CLIENT"),
        mysqldumpExecutable: "/path/to/your/mysqldump/bin",
        mysqldumpOptions: [
          "--add-drop-table",
          "--extended-insert",
          "--lock-tables",
          "--dump-date",
        ],
        allowCleanup: true,
        timeToKeepBackupsInSeconds: 172800, // 2 days
        cleanupCronSchedule: "0 9 * * *", // Each day at 09:00 AM
        errorHandler: (error, strapi) => {
          console.log(error);
        },
      },
    },
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
