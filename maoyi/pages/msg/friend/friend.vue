<template>
	<view>
		<view class="search">
			<input type="text" placeholder="用户名/商铺名" @focus="search"/>
			<view class="icon search"></view>
		</view>
		<view class="list-box">
			<view class="row" @click="scan">
				<view class="left"><image src="../../../static/img/im/face/face_10.jpg" mode=""></image></view>
				<view class="center">
					<view class="con">
						<view class="name">扫一扫</view>
						<view class="explain">扫描二维码</view>
					</view>
					<view class="icon xiangyou"></view>
				</view>
			</view>
			<view class="row" @click="phone">
				<view class="left"><image src="../../../static/img/im/face/face_10.jpg" mode=""></image></view>
				<view class="center">
					<view class="con">
						<view class="name">手机联系人</view>
						<view class="explain">添加或邀请通讯录的好友</view>
					</view>
					<view class="icon xiangyou"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			scan(){
				uni.scanCode({
					success: function (res) {
						console.log('条码类型：' + res.scanType);
						console.log('条码内容：' + res.result);
					}
				});
			},
			search(){
				uni.navigateTo({
					url:"../search/search"
				})
			},
			phone(){
				uni.navigateTo({
					url:"../address/address"
				})
			}
		}
	}
</script>

<style lang="scss">
	image{
		height: 100%;
	}
	.search{
		padding: 5upx 20upx 5upx 30upx;
		background: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		input{
			flex: 1;
			font-size: 30upx;
		}
	}
	.icon{
		font-size: 45upx;
		margin:auto ;
	}
	.list-box{
		background: #fff;
		width: 100%;
		margin: 100upx auto;
		.row{
			display: flex;
			align-items: center;
			width: 100%;
			padding:0 10upx;
			.left{
				width: 80upx;
				height: 80upx;
				margin:0 20upx;
			}
			.center{
				flex: 1;
				display: flex;
				justify-content: space-between;
				border-bottom:1px solid #eee;
				height: 100%;
				padding: 20upx 0;
				.con{
					flex: 1;
				}
			}
			.icon{
				font-size: 35upx;
				margin:auto 20upx;
			}
		}
	}
</style>
