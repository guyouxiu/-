<template>
	<view class="my-page">
		<view class="userInfo">
			<mytop :getToken="getToken"></mytop>
			<navpage ></navpage>
		</view>
		<lists :myList="List"></lists>
	</view>
</template>

<script>
	import mytop from '@/pages/my/components/my-top.vue'
	import navpage from '@/pages/my/components/nav.vue'
	import lists from '@/pages/my/components/list.vue'
	import myList from "@/config/my-list.js"
	
	export default {
		data() {
			return {
				getToken: false,
				List:myList()
			};
		},
		components: {
			mytop,
			navpage,
			lists
		},
		onNavigationBarButtonTap(e){
			if(e.index==0){
				this.navTo('/pages/setting/setting')
			}
		},
		onShow() {
			this.getToken = !!uni.getStorageSync('token')
		}
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
		padding: 10rpx 30rpx 10rpx 30rpx;
		border-radius: 0 0 100rpx 100rpx;
	}
</style>
