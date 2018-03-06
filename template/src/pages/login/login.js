'use strit';
import Vue from 'vue'
import app from './login.vue'
{{#flexible}}import '../../../static/flexible.js'{{/flexible}}
{{#weiyi-vue-navigate}}
import navigate from 'weiyi-vue-navigate'
{{/weiyi-vue-navigate}}
Vue.config.productionTip = false

console.log('process.env', process.env)

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})
