<template>
	<view class="i-coupon">
		<scroll-view class="scroll-view" scroll-x="true">
			<view class="couponItem" v-for="(item,i) in couponList" :key="i">
				<view class="coupon-item">
					<view class="left" :class="item.isgetcoupon?'active':'left'">
						<text class="money">￥{{item.price}}</text>
						<text class="title">{{item.type=='course'?'适用课程：':'适用专栏：'}}{{item.value.title}}</text>
					</view>
					<view class="right" :class="item.isgetcoupon?'active':'right'">
						{{item.isgetcoupon?'已领取':'领取'}}
					</view>
				</view>
			</view>
		</scroll-view>
		
			<view class="couponItems" v-for="(item,i) in couponsList" :key="i">
				<view class="coupon-item">
					<view class="left" :class="item.isgetcoupon?'active':'left'">
						<text class="money">￥{{item.price}}</text>
						<text class="title">{{item.type=='course'?'适用课程：':'适用专栏：'}}{{item.title}}</text>
					</view>
					<view class="right" :class="item.isgetcoupon?'active':'right'">
						立即使用
					</view>
				</view>
			</view>
		
	</view>
</template>


<script>
	export default {
		props: {
			couponList: {
				type: Array,
				default: () => []
			},
			couponsList: {
				type: Array,
				default: () => []
			},
		},
		data() {
			return {};
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
	}

	.i-coupon {
		background-color: #fff;
		padding: 20rpx;
		width: 100%;

		.scroll-view {
			white-space: nowrap;
			padding-left: 18rpx;
		}

		.couponItem {
			display: inline-block;
			margin-right: 40rpx;

			.coupon-item {
				display: flex;
				align-items: center;
				height: 140rpx;
				color: #fff;
			}

			.left {
				height: 100%;
				background-color: #d29d0f;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-right: #fff 4rpx dashed;
				padding: 0 30rpx;

				.money {
					font-size: 30rpx;
					margin-bottom: 10rpx;
				}

				.title {
					font-size: 24rpx;
				}
			}

			.right {
				width: 112rpx;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: center;
				background-color: #fdc018;
				font-size: 25rpx;
			}

			.active {
				background-color: #dae0e5;
			}
		}
	}
	.couponItems {
		width: 695rpx;
		height: 130rpx;
		display: inline-block;
		margin-right: 40rpx;
		margin-bottom: 60rpx;
		border-radius: 20rpx;
	
		.coupon-item {
			// display: flex;
			// align-items: center;
			// height: 140rpx;
			// color: #fff;
			    width: 100%;
				height: 100%;
			    display: flex;
			    justify-content: space-between;
			    background-color: #fec107;
			    margin-right: 15px;
			
		}
	
		.left {
			// height: 100%;
			// background-color: #d29d0f;
			display: flex;
			flex-direction: column;
			justify-content: center;
			// align-items: center;
			// border-right: #fff 4rpx dashed;
			// padding: 0 30rpx;
			    flex: 5;
			    color: #fff;
			    padding: 10px;
			    background-color: rgba(0, 0, 0, 0.2);
			    border-right: 1px dotted #fff;
	
			.money {
				font-size: 36rpx;
				margin-bottom: 10rpx;
				
			}
	
			.title {
				font-size: 22rpx;
			}
		}
	
		.right {
			// width: 112rpx;
			// height: 100%;
			// display: flex;
			// align-items: center;
			// justify-content: center;
			// background-color: #fdc018;
			// font-size: 25rpx;
			    flex: 2;
			    padding: 0 15px;
			    display: flex;
			    align-items: center;
			    justify-content: center;
			    color: #fff;
		}
	
		.active {
			background-color: #dae0e5;
		}
	}
</style>
