module.exports = {
  devServer: {
    before: require('./mock/mock-server.js')
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'sass',
      patterns: []
    }
  }
}
