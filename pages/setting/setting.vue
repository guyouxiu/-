<template>
	<view>
		<view class="content">
			<myList :myList="myList" class="myList"  @Clear="clear"></myList>
			<button @click="loginOut">退出登陆</button>
		</view>
	</view>
</template>

<script>
	import myList from "@/pages/my/components/list.vue"
	import setList from '@/config/setting.js'
	import loginApi from "@/api/login.js"
	export default {
		data() {
			return {
				myList: setList()
			};
		},
		components: {
			myList
		},
		methods:{
			clear(){
				uni.showModal({
					content: "是否要清除缓存",
					success: (res) => {
						if (res.confirm) {
							this.myList[0][1].titles="0KB"
							this.$utils.msg('清除成功')
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					},
					fail: (err) => {
						console.log(err);
					}
				})
			},
			loginOut(){
				uni.showModal({
					content: "确定要退出吗",
					success:async (res) => {
						if (res.confirm) {
							const out = await loginApi.getLoginOut()

							if(out){
								this.$utils.msg('退出成功')
								uni.clearStorageSync()
								
							}
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					},
					fail: (err) => {
						console.log(err);
					}
				})
				
			},
		}
	}
</script>

<style lang="scss">
	button {
		width: 690rpx;
		background-color: #5ccc84;
		color: #fff;
		height: 80rpx;
		font-size: 32rpx;
		line-height: 80rpx;
		margin-bottom: 70rpx;
		margin-top: 40rpx;
	}
	.myList{
		margin-top: 15px;
		    padding: 0px 10px;
	}
</style>
