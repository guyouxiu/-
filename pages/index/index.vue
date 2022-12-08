<template>
	<view class="content">
		<!-- 搜索框 -->
		<iSerch :serchList="serchList" @click.native="navTo('/pages/search/search')"></iSerch>
		<!-- 轮播图组件 -->
		<i-banner :bannerList="bannerList"></i-banner>
		<!-- 图标分类组件 -->
		<i-nav-bar :navBarList="navBarList"></i-nav-bar>
		<!-- 优惠卷 -->
		<i-coupon :couponList="couponList"></i-coupon>
		<!-- 拼团 -->
		<iGrooup :groupList="groupList"></iGrooup>
		<!-- 0-->
		<iNewList :newList="newList"></iNewList>
		<image :src="imgUrl" mode=""></image>
	</view>
</template>

<script>
	import indexApi from '@/api/index.js'
	//搜索
	import iSerch from '@/pages/index/components/i-search.vue'
	// 轮播图组件
	import iBanner from '@/pages/index/components/i-banner.vue';
	// 图标分类组件
	import iNavBar from '@/pages/index/components/i-navBar.vue'
	// 优惠卷
	import iCoupon from '@/pages/index/components/i-coupon.vue'
	import iGrooup from "@/pages/index/components/i-group.vue"
	import iNewList from "@/pages/index/components/i-newList.vue"
	export default {
		data() {
			return {
				serchList: {}, //搜索框数据
				bannerList: [], //轮播图
				homeList: [], //首页数据
				navBarList: [], //图标分类
				couponList: [], // 优惠卷数据
				groupList: [], //拼团数据
				usable: '1',
				newList: [],
				imgUrl:''
			}
		},
		onLoad() {
			this.handleHomeList()
			this.handleCouponList()
			this.handleGroupList()
		},
		methods: {
			// 首页数据
			async handleHomeList() {
				try {
					const res = await indexApi.getHomeList()
					this.serchList = res.data.data[0]
					// console.log('首页数据---', res.data);
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 1500
						})
					} else {

						this.homeList = res.data.data
						// console.log(this.homeList);
						this.homeList.forEach(item => {
							if (item.type == 'swiper') {
								this.bannerList = item.data
							}
							if (item.type == 'icons') {
								this.navBarList = item.data
							}
							if (item.type == 'list') {
								this.newList = item.data
							}
							if(item.type=='imageAd'){
								this.imgUrl=item.data
							}
						})
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 优惠卷
			async handleCouponList() {
				try {
					const res = await indexApi.getCouponList()
					this.couponList = res.data.data
					// console.log(this.couponList);
				} catch (e) {
					//TODO handle the exception
				}
			},
			// 拼团列表api
			async handleGroupList() {
				try {
					const res = await indexApi.getGroupList(this.usable)
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: 'none',
							duration: 1500
						})
					} else {
						this.groupList = res.data.data.rows
					}
				} catch (e) {
					console.log(e);
				}
			}


		},
		onNavigationBarSearchInputClicked() {
			// console.log('e');
			uni.navigateTo({
				url: '/pages/search/search'
			})
		},
		components: {
			iBanner,
			iNavBar,
			iCoupon,
			iGrooup,
			iSerch,
			iNewList
		}
	}
</script>

<style>
	page {
		background-color: #fff;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #f4f4f2;
	}
	image{
		width: 750rpx;
		height: 368rpx;
	}
</style>
