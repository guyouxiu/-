<template>
	<view>
		<view class="login-bg">
			<text class="iconfont icon-fanhui back" @click="back"></text>
		</view>
		<view class="login">
			<view class="texts">
				<h4>绑定手机号</h4>
			</view>

			<!-- //表单组件 -->
			<myInput v-model.sync="form" :formLists="formLists" :btnTexts="btnText" @getCode="getCode"></myInput>

			
				<button @click="binding">绑定</button>
		</view>
	</view>

</template>

<script>
	import myInput from "@/pages/my/components/my-input.vue"
	import loginApi from "@/api/login.js"
	export default {
		components: {
			myInput,
		},
		data() {
			return {
				form: {
					phone: '',
					code: '',
				},
				formLists: [{
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

					}
				],
			};
		},
		methods: {
			//获取验证码api
			async handelCode() {
				try {
					const res = await loginApi.getCode({
						phone: this.form.phone
					})
					if (res.statusCode !== 200) {
						this.$utils.msg(res.data.data)
					} else {
						this.setTiem()

						this.$utils.msg('已发送验证码')
					}
				} catch (e) {}
			},
			//绑定手机号api
			async handelBindingPhone() {
				try {
					const res = await loginApi.getBindingPhone(this.form)
					console.log(res);
					if (res.statusCode !== 200) {
						this.$utils.msg(res.data.data)
					} else {
						this.$utils.msg('已绑定成功')
						uni.hideLoading()
						uni.switchTab({
							url: '/pages/my/my'
						});
						this.$store.commit('setPhone', this.form.phone)
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			//获取验证码按钮
			getCode() {
				if (this.timeFlag) return
				this.handelCode()
			},
			//绑定按钮
			binding() {
				uni.showLoading({
					title: ''
				});
				this.handelBindingPhone()
			},
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
