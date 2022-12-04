<template>
	<view>
		<view class="login-bg">
			<text class="iconfont icon-fanhui back" @click="back"></text>
		</view>
		<view class="login">
			<view class="texts">
				<text>找回密码</text>
			</view>
			<myinput v-model="form" :formList="formList"></myinput>
		<button>立即找回</button>
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
				formList:[{
						type: 'text',
						prop: "phone",
						icon: "iconfont icon-icon-test",
						placeholder: "请输入手机号",
						shows: true,
					},
					{
						type: 'number',
						prop: "code",
						icon: "iconfont icon-mima",
						placeholder: "验证码",
						shows: true,
						showss:true,
					},
					{
						type: 'password',
						prop: "password",
						icon: "iconfont icon-mima",
						placeholder: "请输入密码",
						shows: true,
					},
					
					{
						type: 'password',
						prop: "repassword",
						icon: "iconfont icon-mima",
						placeholder: "请输入确认密码",
						shows: true,
					}
				]
			};
		},
		methods:{
			back() {
				uni.navigateBack()
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
