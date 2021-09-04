const path = require('path')
const CopyWebpackPlguin = require('copy-webpack-plugin')

const resolvePath = (url) => path.resolve(__dirname, url)

module.exports = {
  lintOnSave: true,
  publicPath: process.env.NODE_ENV === 'production' ? '/mobile/' : './',
  pages: {
    index: {
      entry: 'src/main.ts',
      template: 'public/index.html',
      title: '个人博客-移动端'
    }
  },
  configureWebpack: {
    plugins: [
      new CopyWebpackPlguin({
        patterns: [
          {
            from: resolvePath('static'),
            to: 'static'
          }
        ]
      })
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~@/assets/css/common.scss";'
      },
      postcss: {
        plugins: [
          // eslint-disable-next-line global-require
          require('postcss-plugin-px2rem')({
            rootValue: 75,
            exclude: /(node_module)/
          })
        ]
      }
    }
  }
}
