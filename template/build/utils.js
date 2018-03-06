var path = require('path')
var config = require('../config')
var glob = require('glob')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  var cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    var loaders = [cssLoader]
    if (loader) {
      loaders.push({
        loader: loader + '-loader',
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap
        })
      })
    }

    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader'
      })
    } else {
      return ['vue-style-loader'].concat(loaders)
    }
  }

  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  return {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  var output = []
  var loaders = exports.cssLoaders(options)
  for (var extension in loaders) {
    var loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}
// 获取webpack entry入口   只有src/pages/**/*.js跟 pages同名的js才会被做为一个page的入口，一个page只有一个入口
// 例： ./src/pages/login/login.js 和 ./src/pages/login/store.js 只有 ./src/pages/login/login.js会被选为入口
exports.getEntries = function () {
  var globPath = './src/pages/**/*.js'
  var entries = {}
  glob.sync(globPath).forEach(function(entry) {
    debugger
    var dirname = path.dirname(entry)
    var pageName = path.basename(dirname)
    var basename = path.basename(entry, '.js')
    if(basename == pageName) {
      entries[pageName] = entry
    } else {
      console.log('unmatched entry', entry)
    }
  })
  return entries
}


exports.getHtmlEntries = function (globPath) {
  var entries = {}
  glob.sync(globPath).forEach(function (entry) {
    var basename = path.basename(entry, path.extname(entry), 'router.js')
    entries[basename] = entry
  });
  return entries;
}
