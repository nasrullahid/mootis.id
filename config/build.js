export default {
  analyze: true,
  postcss: {
    plugins: {
      'postcss-nested': {}
    }
  },
  /*
   ** You can extend webpack config here
   */
  extend(config, { isDev, isClient }) {
    // https://github.com/nuxt-community/dotenv-module/issues/11#issuecomment-376780588
    config.node = {
      fs: 'empty'
    }

    if (isDev && isClient) {
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
        options: {
          fix: true
        }
      })
    }
  }
}
