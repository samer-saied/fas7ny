module.exports = ({ env }) => ({
    upload: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME','fas7ny'),
        api_key: env('CLOUDINARY_KEY','419655773392486'),
        api_secret: env('CLOUDINARY_SECRET','J99vMge8IiaTvgdNIqVuy9jbf0w'),
      },
    },
  });