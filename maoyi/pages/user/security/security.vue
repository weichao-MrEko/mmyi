<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" >
					<view class="title">{{details.NickName}}</view>
					<view class="right"><view class="tis">{{user.userName}}</view></view>
				</view>
				<view class="row" @click="toPage('')">
					<view class="title">{{details.ChangePassword}}</view>
					<view class="right"><view class="tis"> </view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">{{details.ModifyEmail}}</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<!-- <view class="row" @click="toPage('')">
					<view class="title">账户安全</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view> -->
			</view>
			
		
		</view>
	</view>
</template>

<script>
	import json from "../../../static/json/security.json"
	export default{
		data(){
			return {
				user:'',
				details:''
			}
		},
		onShow() {
			uni.getStorage({
				key:'lang',
				success:res=>{
					this.details=json[res.data]
					uni.setNavigationBarTitle({
						title:json[res.data].title
					})
				}
			})
			uni.getStorage({
				key:"userInfo",
				success:res=>{
					console.log(res)
					this.user=res.data
					
				}
			})
		}
	}
</script>

<style 	lang="scss">
	page{
		background-color: #f3f3f3;	
	}
	
	.icon {
		font-size: 30upx;
	
	}
	.content{
		padding-bottom: 20upx;
		.list{
			width: 96%;
			padding-left: 4%;
			background-color: #fff;
			margin-bottom: 20upx;
			.row{
				widows: 100%;
				min-height: 90upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: solid 1upx #eee;
				&:last-child{
					border-bottom: none;
				}
				.title{
					font-size: 32upx;
					color: #333;
				}
				.right{
					display: flex;
					align-items: center;
					color: #999;
					.tis{
						font-size: 26upx;
						margin-right: 5upx;
						max-height: 120upx;
						image{
							width: 100upx;
							height: 100upx;
							border-radius: 100%;
							margin: 10upx 0;
						}
					}
					.icon{
						width: 40upx;
						color: #cecece;
					}
				}
				
			}
		}
	}
</style>
