<template>
	<view class="my-page">
		<view class="userInfo">
			<mytop ></mytop>
			<navpage></navpage>
		</view>
		<lists></lists>
	</view>
</template>

<script>
	import mytop from '@/pages/my/components/my-top.vue'
	import navpage from '@/pages/my/components/nav.vue'
	import lists from '@/pages/my/components/list.vue'
	export default {
		data() {
			return {

			};
		},
		components: {
			mytop,
			navpage,
			lists
		},
		
	}
</script>

<style lang="scss">
	page,
	.my-page {
		height: 100%;
		background-color: #fff;
	}

	.userInfo {
		height: 300rpx;
		background-color: #5ccc84;
		padding: 30rpx;
		border-radius: 0 0 100rpx 100rpx;
	}
</style>
