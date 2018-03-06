module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "build": {
      "type": "list",
      "message": "Vue build",
      "choices": [
        {
          "name": "Runtime + Compiler: recommended for most users",
          "value": "standalone",
          "short": "standalone"
        },
        {
          "name": "Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere",
          "value": "runtime",
          "short": "runtime"
        }
      ]
    },
    "flexible":{
      "type": "confirm",
      "message": "Install flexible?\n一套淘宝的css自适应库 参考https://github.com/amfe/article/issues/17"
    },
    "weiyi-vue-navigate":{
      "type": "confirm",
      "message": "Install vue-webpack-multi?\n微易h5页面开发导航库 参考http://git.winbaoxian.com:8888/wy-front/lib-npm/tree/develop/weiyi-vue-navigate"
    },
    "gitlabCi":{
      "type": "confirm",
      "message": "是否生成gitlib-ci配置（自动构建）"
    },
    "gitlabCiDoc": {
      "when": "gitlabCi",
      "type": "confirm",
      "message": "是否生成gitlab pages"
    },
    "WeiyiStat":{
      "type": "confirm",
      "message": "是否添加埋点相关代码"
    }
    // "axios":{
    //   "type": "confirm",
    //   "message": "是否使用axios作为ajax请求的库"
    // },
    // "lint": {
    //   "type": "confirm",
    //   "message": "Use ESLint to lint your code?"
    // },
    // "lintConfig": {
    //   "when": "lint",
    //   "type": "list",
    //   "message": "Pick an ESLint preset",
    //   "choices": [
    //     {
    //       "name": "Standard (https://github.com/feross/standard)",
    //       "value": "standard",
    //       "short": "Standard"
    //     },
    //     {
    //       "name": "Airbnb (https://github.com/airbnb/javascript)",
    //       "value": "airbnb",
    //       "short": "Airbnb"
    //     },
    //     {
    //       "name": "none (configure it yourself)",
    //       "value": "none",
    //       "short": "none"
    //     }
    //   ]
    // },
    // "unit": {
    //   "type": "confirm",
    //   "message": "Setup unit tests with Karma + Mocha?"
    // },
    // "e2e": {
    //   "type": "confirm",
    //   "message": "Setup e2e tests with Nightwatch?"
    // }
  },
  "filters": {
    // ".eslintrc.js": "lint",
    // ".eslintignore": "lint",
    // "config/test.env.js": "unit || e2e",
    // "test/unit/**/*": "unit",
    // "build/webpack.test.conf.js": "unit",
    // "test/e2e/**/*": "e2e",
    ".gitlab-ci.yml": "gitlabCi",
    "docs/": "gitlabCiDoc",
    "static/flexible.js": "flexible",
    // "src/utils/fetch.js": "axios"
    // "src/router/**/*": "router"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
