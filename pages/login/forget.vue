<template>
	<view>
		<view class="login-bg">
			<text class="iconfont icon-fanhui back" @click="back"></text>
		</view>
		<view class="login">
			<view class="texts">
				<text>找回密码</text>
			</view>
			<myinput v-model="form" :formList="formList" :btnTexts="btnText" @getCode="getCode"></myinput>
		<button @click="findpass">立即找回</button>
		</view>
	</view>
</template>

<script>
	import myinput from '@/pages/my/components/my-input.vue'
	import loginApi from "@/api/login.js"
	export default {
		components:{
			myinput
		},
		data() {
			return {
				form: {
					username: '',
					password: '',
					repassword: '',
					code:''
				},
				formList: [{
						type: 'text',
						prop: "phone",
						icon: "iconfont icon-icon-test",
						placeholder: "请输入手机号",
						show: false,
					},
					{
						type: 'text',
						icon: "iconfont icon-mima",
						placeholder: "验证码",
						show: false,
						prop: "code",
				
					},
					{
						type: 'password',
						icon: "iconfont icon-mima",
						placeholder: "请输入密码",
						show: false,
						prop: "password",
					},
					{
						type: 'password',
						icon: "iconfont icon-mima",
						placeholder: "请输入确认密码",
						show: false,
						prop: "repassword",
					}
				],
			};
		},
		methods:{
			back() {
				uni.navigateBack()
			},
		
			//获取验证码api
			async handelCode() {
				try {
					const res = await loginApi.getCode({phone:this.form.phone})
					if(res.statusCode!==200){
						this.$utils.msg(res.data.data)
					}else{
						this.setTiem()
						
						this.$utils.msg('已发送验证码')
					}
				} catch (e) {
				}
			},
			//获取验证码按钮
			getCode(){
				if(this.timeFlag) return
				this.handelCode()
			},
			//找回密码api
			async handelFindpass(){
				try{
					const res = await loginApi.findPassWord(this.form)
					console.log(res);
					if(res.statusCode!==200){
						this.$utils.msg(res.data.data)
					}else{
						this.$utils.msg('找回成功')
						this.navBack()
						uni.hideLoading()
					}
				}catch(e){
					//TODO handle the exception
				}
			},
			//找回密码
			findpass(){
				uni.showLoading({
					title:"提交中"
				})
				this.handelFindpass()
			},
		}
	}
</script>

<style lang="scss">
.back {
		color: #fff;
		font-size: 44rpx;
		position: fixed;
		left: 0;
		width: 50px;
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 100;
		top: 0;
	}
	.texts {
		font-size: 44rpx;
		margin-bottom: 50rpx;
	
		text {
			margin-right: 14rpx;
		}
	
	}
	button {
		background-color: #5ccc84;
		color: #fff;
		height: 100rpx;
		font-size: 32rpx;
		line-height: 100rpx;
		margin-bottom: 70rpx;
		margin-top: 40rpx;
	}
</style>
