<template>
	<div>
		<h1>create page $PAGE</h1>
	</div>
</template>

<script>
	import env from '@/utils/env'

	export default {
		created(){
			{{#WeiyiStat}}window.WeiyiStatSDK.init({pageId: '$PAGE', isProduct: env.online});{{/WeiyiStat}}
		}
	}
</script>

<style lang='scss'>
	@import './$PAGE.scss';
	html, body {
		background-color: #F2F2F2;
		line-height: 1.2;
	}
	body  * {
		font-family:  "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei UI", "Microsoft YaHei", "Source Han Sans CN", sans-serif !important;
	}
</style>