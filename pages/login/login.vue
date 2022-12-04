<template>

	<view>
		<view class="login-bg">
			<text class="iconfont icon-fanhui back" @click="back"></text>
		</view>
		<view class="login">
			<view class="texts">
				<h4>{{!flag?"登录":"注册"}}</h4>
			</view>
			<myinput v-model="form" :formList="formList"></myinput>
			<button @click="goLogin">{{!flag?"登录":"注册"}}</button>
			<view class="forget">
				<text class="new" @click="changeFlag" >{{flag?'去登录':'注册账号'}}</text>
				<text class="password" @click="forgetpass" >忘记密码？</text>
			</view>
			<view class="footer">
				<text class="iconfont icon-weixindenglu icon"></text>
			</view>
			<view class="footTitles" v-if="!flag">
				<checkbox-group @change="checkFlagChange">
					<checkbox class="checkbox" value="xz" :checked="checkFlag" />
				</checkbox-group>
				<text>已阅读并同意用户协议&隐私声明</text>
			</view>
		</view>
	</view>
</template>

<script>
	import myinput from '@/pages/my/components/my-input.vue'
	import loginApi from "@/api/login.js"
	export default {
		data() {
			return {
				form: {
					username: '',
					password: '',
					repassword: ''
				},
				checkFlag: false,
				flag: false,
				formList: [{
						type: 'text',
						prop: "username",
						icon: "iconfont icon-icon-test",
						placeholder: "请输入用户名",
						show: true,
					},
					{
						type: 'password',
						prop: "password",
						icon: "iconfont icon-mima",
						placeholder: "请输入密码",
						show: true,
					},
					{
						type: 'password',
						prop: "repassword",
						icon: "iconfont icon-mima",
						placeholder: "请输入密码",
						show: false,
					}
				]

			};
		},
		components: {
			myinput
		},
		methods: {
			back() {
				uni.navigateBack()
			},
			checkFlagChange(e) {
				if (e.detail.value.length) {
					this.checkFlag = true
				} else {
					this.checkFlag = false
				}
			},
			changeFlag(){
				this.form={
					username: "",
					password: "",
					repassword: "",
				}
				this.formList=[{
						type: 'text',
						prop: "username",
						icon: "iconfont icon-icon-test",
						placeholder: "请输入用户名",
						show: true,
					},
					{
						type: 'password',
						prop: "password",
						icon: "iconfont icon-mima",
						placeholder: "请输入密码",
						show: true,
					},
					{
						type: 'password',
						prop: "repassword",
						icon: "iconfont icon-mima",
						placeholder: "请输入密码",
						show: false,
					}
				]
				this.flag=!this.flag
				this.formList[2].show=this.flag
			},
			goLogin() {
				if (!this.flag) {
					if (!this.checkFlag) {
						this.$utils.msg('请先阅读并同意用户协议&隐私声明')
						return
					}
					uni.showLoading({
						title: ''
					});
					this.handelLoginOk()
				} else {
					uni.showLoading({
						title: ''
					});
					this.handelLogin()
			
				}
			},
			//登录账号api
			async handelLoginOk() {
				try {
					const res = await loginApi.getLogin(this.form)
					uni.hideLoading()
					if (res.statusCode !== 200) {
						this.$utils.msg(res.data.data)
					} else {
						this.$utils.msg('登陆成功')
						this.$store.commit('loginUserinfo', res.data.data)
						uni.navigateTo({
							url: '/pages/bind-phone/bind-phone'
						});
						this.$store.commit('init')
					}
			
				} catch (e) {
					console.log(e);
					//TODO handle the exception
				}
			},
			//注册账号api
			async handelLogin() {
				try {
					const res = await loginApi.getRegister(this.form)
					if (res.statusCode !== 20000) {
						this.$utils.msg(res.data.data)
					}
					if (res.data.code === 20000) {
						this.$utils.msg('注册成功')
						this.form = {
							username: "",
							password: "",
							repassword: "",
						}
						this.changeFlag()
					}
			
					uni.hideLoading()
				} catch (e) {
					//TODO handle the exception
				}
			},
			forgetpass(){
				uni.navigateTo({
					url:"/pages/login/forget"
				})
			}
		}
	}
</script>

<style lang="scss">
	h4 {
		font-weight: 400;
	}

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

	button {
		background-color: #5ccc84;
		color: #fff;
		height: 100rpx;
		font-size: 32rpx;
		line-height: 100rpx;
		margin-bottom: 70rpx;
	}

	.forget {
		display: flex;
		justify-content: space-between;
		.new{
			color: #5ccc84;
		}
		.password{
			color: #ccc;
		}
		
	}
	button {
		background-color: #5ccc84;
		color: #fff;
		height: 100rpx;
		font-size: 32rpx;
		line-height: 100rpx;
		margin-bottom: 70rpx;
	}
	.footer {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-top: 65rpx;
	
		.icon {
			font-size: 100rpx;
			color: #5ccc84;
		}
	
	}
	
	.footTitles {
		margin-top: 40rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	
		.checkbox {
			transform: scale(0.7)
		}
	
		text {
			font-size: 26rpx;
			color: #aaa7a3;
		}
	}
</style>
