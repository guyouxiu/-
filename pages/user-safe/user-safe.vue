<template>
	<view>
		<view class="amend" v-for="(item,i) in passwordList" :key="i">
			<view class="left">
				{{item.title}}
			</view>
			<view class="right">
				<input class="input" type="text" :placeholder="item.placeholder" v-model="form[item.prop]">
			</view>
		</view>
		<button  @click="passWordSave" >保存</button>
	</view>
</template>

<script>
	import loginApi from "@/api/login.js"
	export default {
		data() {
			return {
				form: {
					opassword: "", //原密码
					password: "", //新密码
					repassword: "" //确认密码
				},
				passwordList: [{
						type: "text",
						placeholder: "请输入原密码",
						prop: "opassword",
						title: "原密码"
					},
					{
						type: "text",
						placeholder: "请输入新密码",
						prop: "password",
						title: "新密码"
					},
					{
						type: "text",
						placeholder: "请输入确认密码",
						prop: "repassword",
						title: "确认密码"
					}
				]
			};
		},
		methods:{
			// 修改密码api
			async handleUpdatePassword() {
				try {
					const res = await loginApi.changePass(this.form)
					if (res.data.code != 20000) {
						uni.showToast({
							title: res.data.data,
							icon: "none",
							duration: 1000
						})
					} else {
						uni.showToast({
							title: '修改成功',
							icon: "none",
							duration: 2000
						})
						uni.navigateBack(1)
						uni.clearStorageSync()
					}
				} catch (e) {
					//TODO handle the exception
				}
			},
			passWordSave() {
				uni.showLoading({
					title: ''
				})
				this.handleUpdatePassword()
				
			}
		}
	}
</script>

<style lang="scss">
.amend{
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30rpx;
	line-height: 109rpx;
	font-size: 28rpx;
	
	&:last-child {
		border: 0;
	}
	
	.input {
		text-align: right;
	}
}
button{
	margin-top: 40rpx;
	height: 100rpx;
	width: 690rpx;
	color: #fff;
	background-color: #5acb84;
	font-size: 34rpx;
	line-height: 100rpx;
	&::after {
		border: 0;
	}
}
</style>
