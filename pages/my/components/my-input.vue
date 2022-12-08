<template>
	<view>
		
		<view class="inputItem" v-if="!item.show" v-for="(item,index) in formList" :key="index">
			<text class="icon" :class="item.icon"></text>
			<view class="inp_btn">
				<input class="inout" :type="item.type" :placeholder="item.placeholder" v-model.sync="value[item.prop]">
				<button @click="getCode" class="btns" v-if="item.prop==='code'">{{btnTexts}}</button>
			</view>
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
			},
			btnTexts:{
				type:String,
				default:'发送'
			}
		},
		methods:{
			getCode(){
				this.$emit('getCode')
			},
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
	.inputItem{
		width: 615rpx;
		height: 100rpx;
		margin-top: 50rpx;
		background-color: #f5f5f5;
		display: flex;
		align-items: center;
		border-radius: 8rpx;
		.inp_btn{
			display: flex;
			height: 100%;
			.btns{
				background-color: #5ccc84;
				color: #fff;
				border-radius: 0 10rpx 10rpx 0;
				width: 220rpx;
				height:100%;
				&::after{
					border: 0;
				}
			}
		}
		.icon{
			width: 95rpx;
			text-align: center;
			color: rgb(51, 51, 51);
			font-size: 32rpx !important;
		}
		.inout{
			height: 95rpx;
			border: 0;
			background-color: transparent;
			outline: none;
			font-size: 34rpx;
		}
	}

	
</style>
