const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
    mozjpeg: {
      quality: 85
    },
    optipng: {},
    webp: {},
    responsiveLoader: {}
  }]
]);
