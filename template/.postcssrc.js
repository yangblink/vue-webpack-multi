// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "postcss-cssnext": {}{{#flexible}},
    "postcss-px2rem": {
      remUnit: 75
    }{{/flexible}}
  }
}
