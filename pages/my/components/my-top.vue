<template>
		<view class="info" @click="goLoing">
			<view class="df" >
				<view class="left">
					<image src="@/static/tabbar/home.png" mode=""></image>
				</view>
				<view class="right">
					<view class="rightName">
						<text class="top">立即登录</text>
						
					</view>
					<text class="bottom">登录解锁更多功能</text>
				</view>
			</view>
			
		</view>

</template>

<script>
	
	export default {
		name: "my-top",
		props: {
			
		},
		methods:{
			goLoing(){
				uni.navigateTo({
					url:"/pages/login/login"
				})
			}
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

		.setting {

			.set {
				color: #fff;
			}
		}
	}
</style>
