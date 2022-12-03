<template>
	<view>
		<view class="df" v-if="item.show" v-for="(item,index) in formList" :key="index">
			<text :class="item.icon"></text>
			<input :type="item.type" :placeholder="item.placeholder" v-model.sync="value[item.prop]">
			
		</view>
		<view class="df" v-if="item.shows" v-for="(item,index) in formList" :key="index">
			<text :class="item.icon"></text>
			<input :type="item.type" :placeholder="item.placeholder" v-model.sync="value[item.prop]">
			<button class="send" v-if="item.showss">发送</button>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {


			};
		},
		props: {
			formList: {
				type: Array,
				default: () => []
			},
			value: {
				type: Object,
				default: () => {}
			}
		}
	}
</script>

<style lang="scss">
	.df {
		width: 610rpx;
		height: 100rpx;
		background-color: #f5f5f5;
		margin-bottom: 50rpx;
		display: flex;
		align-items: center;
		border-radius: 15rpx;

		text {
			width: 100rpx;
			height: 100rpx;
			line-height: 100rpx;
			text-align: center;
		}
	}
	.send{
		width: 214rpx;
		height: 100rpx;
		background-color: #5ccc84;
		color: #fff;
		font-size: 28rpx;
		line-height: 100rpx;
		border-radius: 0 10rpx 10rpx 0 ;
	}

	
</style>
