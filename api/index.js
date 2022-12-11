import http from "@/utils/request.js"
export default {
	// 获取首页数据
	getHomeList(data) {
		return http.request({
			url: '/mobile/index',
			method: 'GET',
			data
		})
	},
	//优惠卷
	getCouponList(data){
		return http.request(({
			url:"/mobile/coupon",
			method:'GET',
			data
		}))
	},
	// 拼团列表api
	getGroupList(usable) {
		return http.request({
			url: `/mobile/group?usable=${usable}`,
			method: 'GET'
		})
	},
	// 秒杀列表
	getFlashsaleList(usable) {
		return http.request({
			url: `/flashsale?usable=${usable}`,
			method: 'GET'
		})
	},
	//我的优惠劵
	getUserCoupon(data){
		return http.request({
			url:'/mobile/user_coupon',
			method:"get",
			data,
		})
	},
}
