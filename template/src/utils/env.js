/**
 * 根据不同的环境变量设置不同的值
 * 比如你不同环境下api访问的 baseUrl都不一样 可以在下面设置
 * 可以添加其他参数
 */
var env = {}

if(process.env.NODE_ENV == 'development'){
  env.node_env = 'dev'
  env.baseUrl = ''
  env.online = false
}else if(process.env.NODE_ENV == 'production_test'){
  env.node_env = 'pro_test'
  env.baseUrl = ''
  env.online = false
}else if(process.env.NODE_ENV == 'production'){
  env.node_env = 'pro'
  env.baseUrl = ''
  env.online = true
}

export default env