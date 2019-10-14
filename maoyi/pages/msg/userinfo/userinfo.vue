<template>
	<view>
		<view class="userBox">
			<view class="userImg"><image src="../../../static/img/im/face/face_1.jpg" mode=""></image></view>
			<view class="Info">
				<view class="userName">用户名</view>
				<view class="userId">ID</view>
			</view>
		</view>
		<view class="label">
			<view class="label_name">
				个人标签
			</view>
			<view class="label_con">
				这个人有点懒!这个人有点懒!这个人有点懒!这个人有点懒!这个人有点懒!这个人有点懒!这个人有点懒!
			</view>
		</view>
		<view class="shop">
			<view class="shopImg">
				<image src="../../../static/img/goods/p8.jpg" mode=""></image>
			</view>
			<view class="shop_con">
				<view class="title">
					<view>广州好友油箱盖有限公司</view>
					<view>广州好友油箱盖有限公司广州好友油箱盖有限公司广州好友油箱盖有限公司</view>
				</view>
				<view class="icon xiangyou"></view>
			</view>
		</view>
		<button type="primary">添加好友</button>
	</view>
</template>

<script>
</script>

<style lang="scss">
	image{
		height: 100%;
	}
	.userBox{
		background: #fff;
		display: flex;
		align-items: center;
		padding: 40upx;
		.userImg{
			width: 180upx;
			height: 180upx;
			overflow: hidden;
			border-radius: 50%;
		}
		.Info{
			margin-left:30upx;
		}
	}
	.label{
		background: #fff;
		display: flex;
		width: 100%;
		padding:35upx 0;
		.label_name{
			width: 300upx;
			text-align: center;
			margin:0 40upx;
		}
		.label_con{
			color: #999;
			margin-right: 20upx;
		}
	}
	.shop{
		display: flex;
		background: #fff;
		margin: 10upx auto;
		padding: 20upx 0;
		.shopImg{
			width: 120upx;
			height: 120upx;
			margin: 0 20upx;
		}
		.shop_con{
			display: flex;
			flex: 1;
			
			justify-content: space-between;
			.title{
				view:nth-child(1){
					font-size: 40upx;
				}
				view:nth-child(2){
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 1;
					overflow: hidden;
					color: #999;
				}
			}
			.icon{
				align-self: center;
			}
		}
	}
	button{
		margin: 20upx;
	}
</style>
