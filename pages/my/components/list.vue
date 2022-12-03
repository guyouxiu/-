<template>
	<view class="list">
		<view class="ListItem" v-for="(item,index) in List" :key="index">
			<view class="ele" v-for="(ele,i) in item" :key="i">
				<view class="left">
					<text class="icon" :class="ele.icon"></text>
					<text class="text">{{ele.title}}</text>
				</view>
				<view class="right">
					<text class="iconfont icon-jinru  "></text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import myList from "@/config/my-list.js"
	export default {
		props: {
			List: {
				type: Array,
				default: () => myList()
			}
		}

	}
</script>

<style lang="scss">
	.list{
		margin-top: 30rpx;
		padding: 0 56rpx;
		.ListItem{
			.ele{
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1rpx solid #eee;
				line-height: 117rpx;
				padding-right: 40rpx;
				&:last-child{
					border: 0;
				}
				.left{
					display: flex;
					align-items: center;
					.icon{
						font-size: 40rpx;
						color: rgb(67, 150, 236);
					}
					.text{
						display: inline-block;
						font-size: 28rpx;
						color: #3b4144;
						margin-left: 20rpx;
					}
				}
				.right{
					color: #ccc;
				}
			}
		}
		
	}
</style>
