<template>
	<view>
		<iCoupon :couponsList="couponList"></iCoupon>
		<view class="ss" >
			没有更多数据了
		</view>
	</view>
</template>

<script>
	import iCoupon from "@/pages/index/components/i-coupon.vue"
	import indexApi from "@/api/index.js"
	export default {
		data() {
			return {
				couponList:[]
			};
		},
		onLoad() {
			this.getCoupon()
		},
		methods:{
			async getCoupon() {
				const {data} = await indexApi.getUserCoupon()
				console.log(data);
				this.count = data.data.count
				this.couponList =data.data.rows
				console.log(this.couponList);
				
				
			}
		},
		components:{
			iCoupon
		}
	}
</script>

<style lang="scss">
.ss {
			text-align: center;
			width: 100%;
			margin-top: 15rpx;
			color: #aaa;
		}
</style>
