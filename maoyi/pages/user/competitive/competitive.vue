<template>
	<view>
		<scroll-view scroll-y class="scroll-view">
			<view class="nav">
				<view :class="num==0?'nav-color':''" @click="num=0">全部</view>
				<view :class="num==1?'nav-color':''" @click="num=1">竞标中</view>
				<view :class="num==2?'nav-color':''" @click="num=2">选标中</view>
				<view :class="num==3?'nav-color':''" @click="num=3">已结束</view>
			</view>
		</scroll-view>
		<view class="list-box" v-for="item in list">
			<view class="listImg">
				<image src="/static/img/goods/p2.jpg" mode=""></image>
			</view>
			<view class="certer">
				<view class="title">
					来得及啊反垄断法来得及啊反垄断法来得及啊反垄断法来得及啊反垄断法来得及啊反垄断法来得及啊反垄断法
				</view>
				
				<view class="bottom">
					<view>
						<text class="bottom_img"><image src="/static/img/user.png"></image></text><text>打算</text>
					</view>
					<view>
						<text class="bottom_img"><image src="/static/img/showpwd.png"></image></text><text>1人浏览/0人投稿</text>
					</view>
					<view>
						<text class="bottom_img"><image src="/static/img/time.png"></image></text><text>1天前</text>
					</view>
					
				</view>
				<view class="state">
					竞标中
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				num:0,
				list:["",""]
			}
		}
	}
</script>

<style lang="scss">
	image{
		height: 100%;
	}
	.nav{
		display: flex;
		width: 100%;
		height: 80upx;
		border-bottom: 1px #eee solid;
		background: #fff;
		.nav-color{
			color: #e84148;
		}
		view{
			width: 25%;
			line-height: 80upx;
			text-align: center;
		}
	}
	.list-box{
		display: flex;
		height:240upx;
		width: 98%;
		margin: 0 auto;
		background: #fff;
		// border-radius: 10upx;
		border-bottom: 1px solid #eee;
		align-items: center;
		padding: 15upx 5upx;
		.listImg{
			width: 200upx;
			height: 200upx;
			margin: 0 20upx;
		}
		.certer{
			flex: 1;
			height: 100%;
			.title{
				padding: 10upx 10upx 10upx 10upx;
				font-size: 30upx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				overflow: hidden;
			}
			.state{
				color: #e84148;
				text-align: right;
				width: auto;
				height: auto;
				padding:5upx 25upx;
				border: 1px solid #e84148;
				float: right;
				margin: 5upx;
				border-radius: 50upx;
			}
			.bottom{
				display: flex;
				font-size: 25upx;
				// align-items: center;
				height:auto;
				view{
					margin: 0 10upx;
					display: flex;
				}
				.bottom_img{
					width: 25upx;
					height: 25upx;
					margin: 2upx 6upx 0 0;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
		}
	}
</style>
