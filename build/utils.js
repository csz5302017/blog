const path = require('path')
const fs = require('fs')
const _ = require('lodash')
const config = require('../config')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const SitemapPlugin = require('sitemap-webpack-plugin').default
const Renderer = PrerenderSpaPlugin.PuppeteerRenderer

exports.assetsPath = function (_path) {
  const assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

exports.cssLoaders = function (options) {
  options = options || {}

  const cssLoader = {
    loader: 'css-loader',
    options: {
      minimize: process.env.NODE_ENV === 'production',
      sourceMap: options.sourceMap
    }
  }

  // generate loader string to be used with extract text plugin
  function generateLoaders (loader, loaderOptions) {
    const loaders = [cssLoader]
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
    sass: generateLoaders('sass', {indentedSyntax: true}),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus')
  }
}

// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function (options) {
  const output = []
  const loaders = exports.cssLoaders(options)
  for (const extension in loaders) {
    const loader = loaders[extension]
    output.push({
      test: new RegExp('\\.' + extension + '$'),
      use: loader
    })
  }
  return output
}

exports.readFilesFromDirSync = function (dirname, onFileContent, onError) {
  try {
    let fileNames = fs.readdirSync(dirname)
    fileNames.forEach(filename => {
      let content = fs.readFileSync(dirname + '/' + filename, 'utf-8')
      try {
        if (typeof onFileContent === 'function') {
          onFileContent(filename, content)
        }
      } catch (e) {
        if (typeof onError === 'function') {
          onError(e)
        }
      }
    });
  } catch (e) {
    if (typeof onError === 'function') {
      onError(e)
    }
  }
}

// Generate url list for pre-render
exports.generateRenderPlugins = () => {
  let staticPaths = ['/', '/a', '/g', '/t', '/p']
  let postIndex = fs.readFileSync(path.resolve(__dirname, '../dist/posts/index.json')).toString()
  postIndex = JSON.parse(postIndex)
  let ajaxPaths = postIndex.map(post => `/p/${post.id}`)
  let distPath = path.join(__dirname, '../dist')
  return [
    new PrerenderSpaPlugin({
        staticDir: distPath,
        routes: staticPaths,
        renderer: new Renderer({
          maxConcurrentRoutes: 5
        })
      }
    ),
    new PrerenderSpaPlugin({
        staticDir: distPath,
        routes: ajaxPaths,
        renderer: new Renderer({
          renderAfterElementExists: '#post-content',
          maxConcurrentRoutes: 5
        })
      }
    ),
    new SitemapPlugin('https://wxsm.space', [].concat(staticPaths, ajaxPaths), {
      skipGzip: true,
      changeFreq: 'weekly'
    })
  ]
}
