import http from "@/utils/request.js"
export default{
	// 注册
	getRegister(data){
		return http.request({
			url:'/mobile/reg',
			data,
			method:"post",
			
		})
	},
	// 登陆
	getLogin(data){
		return http.request({
			url:'/mobile/login',
			data,
			method:"post",
			header:{
				token:null
			}
		})
	},
	//获取验证码
	getCode(data){
		return http.request({
			url:'/mobile/get_captcha',
			data,
			method:"post",
		})
	},
	//绑定手机号
	getBindingPhone(data){
		return http.request({
			url:'/mobile/bind_mobile',
			data,
			method:"post",
		})
	},
	//找回密码
	findPassWord(data){
		return http.request({
			url:'/mobile/forget',
			data,
			method:"post",
		})
	},
	// 修改密码
	changePass(data){
		return http.request({
			url:'/mobile/update_password',
			data,
			method:'post'
		})
	},
	//退出登录
	getLoginOut(data){
		return http.request({
			url:'/logout',
			data,
			method:"post",
		})
	},
	getCoupon(id){
		return http.request({
			url:'/coupon?',
			method:"get",
		})
	},
	//编辑资料
	getEmitInfoMessage(data){
		return http.request({
			url:'/update_info',
			method:"post",
			data,
		})
	},
}