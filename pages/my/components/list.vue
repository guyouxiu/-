<template>
	<view class="list">
		<view class="ListItem" v-for="(item,index) in myList" :key="index">
			<view class="ele" v-for="(ele,i) in item" :key="i" @click="change(ele)">
				<view class="left">
					<text class="icon" :class="ele.icon"></text>
					<text class="text">{{ele.title}}</text>
				</view>
				<view class="right">
					<text v-if="!ele.titles" class="iconfont icon-jinru  "></text>
					<text class="texts" v-if="ele.titles">{{ele.titles}}</text>
					
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		props: {
			
			myList:{
				type:Array,
				default:()=>[]
			}
			
		},
		methods:{
			change(ele){
				if(ele.event){
					this.$emit(ele.event)
					return
				}
				if(ele.login || this.$store.getters.getTokens){
					this.navTo(ele.page)
					return
				}else{
					this.navTo('/pages/my/login')
					return
				}
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
	.texts{
		color: #3b4144;
	}
</style>
