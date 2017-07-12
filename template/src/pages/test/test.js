'use strit';
import Vue from 'vue'
import app from './test.vue'
{{#flexible}}import '../../../static/flexible.js'{{/flexible}}

Vue.config.productionTip = false

console.log('process.env', process.env)

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})
