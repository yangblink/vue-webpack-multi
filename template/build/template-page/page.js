'use strit';
import Vue from 'vue'
import app from './$PAGE.vue'
{{#flexible}}import '../../../static/flexible.js'{{/flexible}}

Vue.config.productionTip = false

new Vue({
	el: '#app',
	template: '<app/>',
	components: { app }
})
