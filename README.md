# 基础分支
本仓库这是基于 [webpack](https://github.com/vuejs-templates/webpack/tree/19ea95c82a84479f6ef5843e2ff3dca2b998c725)修改而来

# 如何使用
```bash
npm install vue-cli -g

vue init yangblink/vue-webpack-multi myProject

cd myProject

npm install

gulp
```

# 为什么使用gulp

webpack虽然非常强大，但是他更多的功能是在打包构建上，有时候我们开发的时候不止是打包，比如需要模版文件快速生成一个组件，本模版可以通过 `gulp page -n name` 和 `gulp page -n component`快速生成页面和组件，如果模版需要定制化也可以修改 `build/template-***`下的相关原始模版文件。

# 多页面的支持

目前所有的页面都是一级结构，暂不支持有层级结构的页面

# 多页面的资源

当多页面同时引用的相同资源的时候，可以在`config/index.js`中的 `common`中配置

# 更多文档参考

[webpack](https://github.com/vuejs-templates/webpack/tree/19ea95c82a84479f6ef5843e2ff3dca2b998c725)