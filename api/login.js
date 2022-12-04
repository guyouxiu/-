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
			url:'/bind_mobile',
			data,
			method:"post",
		})
	}
}