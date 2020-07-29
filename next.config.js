const withPlugins = require('next-compose-plugins')
const optimizedImages = require('next-optimized-images')

module.exports = withPlugins([
  [
    optimizedImages,
    {
      optimizeImagesInDev: true,
      mozjpeg: {
        quality: 85
      },
      optipng: {},
      webp: {},
      responsiveLoader: {}
    }
  ]
])
