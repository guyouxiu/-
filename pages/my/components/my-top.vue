<template>
		<view class="info" @click="goLoing">
			<view class="df" >
				<view class="left">
					<image v-if="!getToken" src="@/static/tabbar/home.png" mode=""></image>
					<image v-if="getToken && infoList.imageUrl" src="../../../static/tabbar/learn_selected.png" mode=""></image>
				</view>
				<view class="right">
					<view class="rightName">
						<text class="top">{{getToken?infoList.name:'立即登录'}}</text>
						<text class="vip" v-if="infoList.vip && getToken">{{infoList.vip}}</text>
						
					</view>
					<text class="bottom">{{getToken? infoList.descriptor:'登录解锁更多内容'}}</text>
				</view>
			</view>
			<view class="right-icon" v-if="getToken">
				<text class="iconfont icon-leimupinleifenleileibie right-icon-item"></text>
			</view>
		</view>

</template>

<script>
	import userInfoList from "@/config/my-top.js"
	import store from '@/store/index.js'
	export default {
		name: "my-top",
		props: {
			infoList:{
				type:Object,
				default:()=>userInfoList()
			},
			getToken:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			
			goLoing(){
				if(this.getToken){
					console.log('已登录');
				}else{
					uni.navigateTo({
						url:"/pages/login/login"
					})
				}
				if(this.getToken){
					this.navTo('/pages/user-info/user-info')
				}else{
					this.navTo("/pages/my/register")
				}
				
			}
			
		},
		onLoad() {
			store:uni.getStorageSync('info')
			console.log(store)
		}

	}
</script>

<style lang="scss">
	.info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-left: 5rpx;
		margin-top: 15rpx;

		.df {
			display: flex;
			align-items: center;
		}

		.left {
			width: 125rpx;
			height: 125rpx;
			border-radius: 50%;

			image {
				width: 100%;
				height: 100%;
				border-radius: 50%;
			}
		}

		.right {
			display: flex;
			flex-direction: column;
			line-height: 65rpx;
			color: #fff;
			margin-left: 25rpx;

			.rightName {
				display: flex;

				.top {
					font-size: 32rpx;
				}

				.vip {
					font-size: 26rpx;
					color: #f2c310;
					padding-top: 3rpx;
					padding-left: 35rpx;
				}
			}

			.bottom {
				font-size: 26rpx;
			}

		}

		.right-icon-item{
			color: #fff;
		}
	}
</style>
