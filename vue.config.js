module.exports = {
  transpileDependencies: ['vuetify'],
  publicPath: './',
  // quietDeps option workaround
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          logger: require('sass').Logger.silent,
        },
      },
    },
  },
};
