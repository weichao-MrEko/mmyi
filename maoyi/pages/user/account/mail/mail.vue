<template>
	<view>
		<view class="list">
			<view class="row">
				<input type="text" :password="true" placeholder="请输入认证邮箱地址" />
			</view>
		</view>
		<button type="primary">提交认证</button>	
		<view class="explain">
			<view class="title">认证说明</view>
			<view class="text">
				邮箱认证成功后，你可以享有以下服务：<br>
				1.邮箱地址登录：可直接使用“邮箱地址”登录到APP<br>
				2.重要事件提醒：进行(选稿/中标)时，可及时收到邮箱提醒<br>
				3.找回账号密码：忘记密码时，可使用邮箱找回密码。<br>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style lang="scss">
	page{
		background: #f4f4f4;
	}
	button{
		margin: 20upx auto;
		width: 96%;
		background: #e84148;
	}
	.list{
		background:#fff;
		margin: 20upx auto;
		.row+.row{
			border-top: 1px #eee solid;
		}
		.row{
			width: 94%;
			margin: auto;
			height: 100upx;
			display: flex;
			align-items: center;
			input{
				flex:1;
				height: 100%;
			}
			image{
				width: 60upx;
				height: 60upx;
			}
		}
	}
	.explain{
		width: 94%;
		margin: auto;
		position: absolute;
		bottom: 20%;
		left: 5%;
		.title{
			font-size: 35upx;
		}
	}
</style>
