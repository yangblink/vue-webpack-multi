# 基础分支
本仓库这是基于 [webpack](https://github.com/vuejs-templates/webpack/tree/19ea95c82a84479f6ef5843e2ff3dca2b998c725)修改而来

# 如何使用
```bash
npm install vue-cli -g

# 请务必将 -c 或 --clone 参数放在最后  否则会有问题 参考 https://github.com/vuejs/vue-cli/issues/525
vue init yangblink/vue-webpack-multi myproject

cd myproject

npm install

# 启动脚手架
gulp -p 
# 或者
npm run dev
```

# 更多命令
```bash
gulp help
```

# 使用Flexible作为适配方案
在初始化模版的时候可以选择是否是用[flexible](https://github.com/amfe/article/issues/17)，这是一套淘宝网h5正在使用的方案，如果选择yes之后将会默认安装[px2rem-postcss](https://github.com/songsiqi/px2rem-postcss)插件，该插件会将所有`css`中的`px`除以`75`转化为`rem`，如果不希望转换需要在css后添加注解`/* no */`:
```css
<!-- 假设html的font-size为75px -->
.t1 {
    width: 75px; 
}
<!-- 将会转化为 -->
.t1 {
    width: 1rem;
}

<!-- 如果添加了no注释 -->
.t1 {
    width: 75px; /* no */
}
<!-- 将会转化为 -->
.t1 {
    width: 75px;
}
```

# 为什么使用gulp

webpack虽然非常强大，但是他更多的功能是在打包构建上，有时候我们开发的时候不止是打包，比如需要模版文件快速生成一个组件，本模版可以通过 `gulp page -n name` 和 `gulp page -n component`快速生成页面和组件，如果模版需要定制化也可以修改 `build/template-***`下的相关原始模版文件。

# 多页面的支持

目前所有的页面都是一级结构，暂不支持有层级结构的页面

# 多页面的资源

当多页面同时引用的相同资源的时候，可以在`config/index.js`中的 `common`中配置

# 构建时排除一些页面

如果有一些页面不希望在打包构建的时候被编译，可以在`config/index.js`中的'excludePages'配置要排除的文件

# 自带微易loading

如果选择`axios`作为`ajax`请求库，在`utils/fetch`中默认提供了两个`axios`实力，每个实例有不同的请求拦截器，一个自带微易loading，一个为空
```
//fetch 在调用时自动显示|隐藏 appbridge中的loading   fetch_raw 不做任何处理
import { fetch, fetch_raw } from '@/utils/fetch'
```

# 自带login页面

在日常开发中，经常会有一些接口需要登录才能调用，本脚手架自带login页面，并自动代理到`test.winbaoxian.com`，默认启动脚手架将会打开login页面，在使用默认的 `axios`作为`ajax`请求库时，所有的ajax请求在开发环境下 都会自动跳转到 login页面并在登录成功之后返回。

login页面自带了一些 样式检查的demo, 会收集一些常见的样式问题，比如字体大小，是否支持flex布局等。

# 埋点sdk

选择添加`WeiyiStat`之后，在每一次的`gulp page -n PageName`生成新页面的时候都会在页面的`create`函数中自动添加埋点初始化函数代码

# 自带自动构建脚本 以及 文档
安装时选择了`gitlab_ci`选项将会自动生成 `.gitlab-ci.yml`文件以及`docs/`目录，`.gitlab-ci.ym`

# 更多文档参考

[webpack](https://github.com/vuejs-templates/webpack/tree/19ea95c82a84479f6ef5843e2ff3dca2b998c725)

# weiyi-vue-navigate

如果选择使用`weiyi-vue-navigate`将会在每个页面自动引入`appBridge`

