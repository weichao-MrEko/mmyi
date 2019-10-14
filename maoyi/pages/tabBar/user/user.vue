<template>
	<view>
		<view style="background-image: url('../../../static/img/userbg.jpg');background-size: cover;z-index: 1000;" >
		<view  class="status" ></view>
		<view  class="header" >
			<view class="addr"></view>
			<view class="input-box">
				
			</view>
			<view class="icon-btn">
				<view class="icon " @tap=""></view>
				<view class="icon setting" @tap="toSetting"></view>
			</view>
		</view>
		<!-- 占位 -->
		<!-- <view v-if="showHeader" class="place"></view> -->
		<!-- 用户信息 -->
		<view class="user">
			<!-- 头像 -->
			<view class="left">
				<image :src="user.avatar" @tap="toPersonal"></image>
			</view>
			<!-- 昵称,个性签名 -->
			<view class="right">
				<view class="username" @tap="toLogin">{{user.name}}</view>
				<view class="signature" @tap="toSetting">{{user.sign}}</view>
			</view>
			<!-- 二维码按钮 -->
			<!-- <view class="erweima" @tap="toMyQR">
				<view class="icon qr"></view>
			</view> -->
		</view>
		</view>
		<!-- VIP banner -->
		<!-- <view class="VIP">
			<view class="img">
				<image src="/static/img/VIP.png"></image>
			</view>
			<view class="title">开通VIP会员</view>
			<view class="tis">会员特权</view>
		</view> -->
		<!-- 订单-余额 -->
		<!-- <view class="order"> -->
			<!-- 订单类型 -->
			<!-- <view class="list">
				<view class="box" v-for="(row,index) in orderList" :key="index" @tap="toOrderList(index)">
					<view class="img">
						<view class="icon" :class="row.icon"></view>
					</view>
					<view class="text">{{row.text}}</view>
				</view>
			</view> -->
			<!-- 余额 -->
		<!-- 	<view class="balance-info">
				<view class="left">
					<view class="box">
						<view class="num">{{user.integral}}</view>
						<view class="text">{{jsonData.amount.integral}}</view>
					</view>
					<view class="box">
						<view class="num">{{user.envelope}}</view>
						<view class="text">{{jsonData.amount.brokerage}}</view>
					</view>
					<view class="box">
						<view class="num">{{user.balance}}</view>
						<view class="text">{{jsonData.amount.remainingSum}}</view>
					</view>
				</view>
				<view class="right">
					<view class="box" @tap="toDeposit">
						<view class="img">
							<view class="icon chongzhi"></view>
						</view>
						<view class="text">{{jsonData.amount.Recharge}}</view>
					</view>
				</view>
			</view> -->
		<!-- </view> -->
		<!-- 工具栏 -->
		<view class="toolbar">
			<view class="title">{{jsonData.toolbar}}</view>
			<view class="list">
				<view class="box" v-for="(row,index) in jsonData.mytoolbarList" :key="index" @tap="toPage(row.url,row.id)" v-if="row.id!=6||shopStatus">
					<view class="img">
						<image :src="row.img"></image>
					</view>
					<view class="text">{{row.text}}</view>
					<view class="icon xiangyou" style="font-size: 28upx;margin: 0 20upx;">
					</view>
				</view>
			</view>
		</view>
		<!-- 工具栏 -->
		<view class="toolbar" style="padding:0;" v-if="!shopStatus">
			<!-- <view class="title">{{jsonData.toolbar}}</view> -->
			<view class="list">
				<view class="box" v-for="(row,index) in jsonData.shopbarList" :key="index" @tap="toPage(row.url,row.id)">
					<view class="img">
						<image :src="row.img"></image>
					</view>
					<view class="text">{{row.text}}</view>
					<view class="icon xiangyou" style="font-size: 28upx;margin: 0 20upx;">
					</view>
				</view>
			</view>
		</view>
		
		<!-- 占位 -->
		<view class="place-bottom"></view>
	</view>
</template>
<script>
import JSON from "../../../static/json/user.json"
	export default {
		data() {
			return {
				isfirst:true,
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				showHeader:true,
				shopStatus:false,
				jsonData:'',
				//个人信息,
				user:{
					username:'未登录',
					face:'/static/img/face.jpg',
					integral:0,
					balance:0,
					envelope:0
				},
				// 订单类型
				orderList:[
					{text:'待付款',icon:"fukuan"},
					{text:'待发货',icon:"fahuo"},
					{text:'待收货',icon:"shouhuo"},
					{text:'待评价',icon:"pingjia"},
					{text:'退换货',icon:"tuihuo"}
				],
				// 工具栏列表
				mytoolbarList:[
					{url:'',text:'积分管理',img:'/static/img/user/choujiang.png'},
					{url:'../../user/coupon/coupon',text:'账号管理',img:'/static/img/user/quan.png'}, 
					{url:'',text:'我的竞标',img:'/static/img/user/renw.png'},
					{url:'',text:'我的需求',img:'/static/img/user/momey.png'},
					
					{url:'../../user/address/address',text:'我的产品',img:'/static/img/user/addr.png'},
					{url:'',text:'我的出售',img:'/static/img/user/security.png'},
					{url:'../../shop/check/check',text:'商铺管理',img:'/static/img/user/bank.png'},
					{url:'../../user/keep/keep',text:'收藏',img:'/static/img/user/point.png'},
					
					// {text:'客服',img:'/static/img/user/kefu.png'},
					// {text:'签到',img:'/static/img/user/mingxi.png'}
					
				]
			}
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(function () {
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		},
		onLoad() {
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			this.$http("api/user/againStatus",{},"get",false).then(res=>{
					if(res.data.code==1000){
						this.shopStatus=true;
					}else{
						this.shopStatus=false;
					}
			})
		},
		onReady(){
			//此处，演示,每次页面初次渲染都把登录状态重置
			// uni.getStorage({
			// 	key: 'UserInfo',
			// 	data: false,
			// 	success: function (res) {
			// 		console.log(res)
			// 	},
			// 	fail:function(e){
			// 		uni.navigateTo({
			// 			url:"../../login/login"
			// 		})
			// 	}
			// });
		},
		onShow(){
			console.log(11)
			uni.getStorage({	
				key:"userInfo",
				success:res=>{
					console.log(res)
					if(res.data){
						this.user=res.data
					}else{
						console.log(2)
						uni.navigateTo({
							url: '../../login/login'
						});
					}
					
				},fail: () => {
					console.log(1)
					uni.navigateTo({
						url: '../../login/login',
					});
				},
			})
			
			uni.getStorage({
				key:"lang", 
				success:res=>{
					console.log(JSON) 
					this.jsonData=JSON[res.data]
				}
			})
			// uni.getStorage({
			// 	key: 'UserInfo',
			// 	success: (res)=>{
			// 		if(!res.data){
			// 			if(this.isfirst){
			// 				//this.toLogin();
			// 			}
			// 			return ;
			// 		}
			// 		this.user = res.data;
			// 	},
			// 	fail:(e)=>{
			// 		//this.toLogin(); 
			// 	}
			// });
		},
		methods: {
			//消息列表
			toMsg(){
				uni.navigateTo({
					url:'../../msg/msg'
				})
			},
			toOrderList(index){
				uni.setStorageSync('tbIndex',index);
				uni.navigateTo({url:'../../user/order_list/order_list?tbIndex='+index}) 
			},
			toSetting(){
				uni.navigateTo({
					url:'../../user/setting/setting'
				})
			},
			toPersonal(){
				uni.navigateTo({
					url:'../../user/personal/personal'
				})
			},
			toMyQR(){
				uni.navigateTo({
					url:'../../user/myQR/myQR'
				})
			},
			toLogin(){
				uni.showToast({title: '请登录',icon:"none"});
				uni.navigateTo({
					url:'../../login/login'
				})
				this.isfirst = false;
			},
			isLogin(){
				//实际应用中,用户登录状态应该用token等方法去维持登录状态.
				const value = uni.getStorageSync('UserInfo');
				if (value) {
					return true;
				}
				return false
			},
			toDeposit(){
				uni.navigateTo({
					url:'../../user/deposit/deposit'
				})
			},
			toPage(url,id){
				if(!url){
					uni.showToast({title: '模板未包含此页面',icon:"none"});return;
				}
				if(id==6){
					uni.getStorage({
						key:"userInfo",
						success:res=>{
							if(!res.data.shopId){
								uni.navigateTo({
									url:url
								})
							}else{
								
							}
						}
					})
				}else{
					uni.navigateTo({
						url:url
					})
				}
				
			}
		}
	} 
</script>
<style lang="scss">
	page{position: relative;}
	.status {
		width: 100%;
		height: 0;
		z-index: 1000;
		// background-color: #e84148;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
		
	}
	
	.header{
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		 
		z-index: 10;
		// background-color: #e84148;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		.icon-btn{
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon{
				color: #fff;
				width: 60upx;
				height: 60upx;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				font-size: 42upx;
			}
		}
	}
	.place{
		// background-color: #e84148;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.place-bottom{
		height: 300upx;
	}
	.user{
		width: 92%;
		padding: 0 4%;
		display: flex;
		align-items: center;
		// position: relative;
		// background-color: #e84148;
		padding-bottom: 120upx;
		.left{
			width: 18vw;
			height: 18vw;
			flex-shrink: 0;
			margin-left: 30upx;
			border: solid 1upx #fff;
			border-radius: 100%;
			image{
				width: 18vw;
				height: 18vw;
				border-radius: 100%;
			}
			
		}
		.right{
			width: 97%;
			margin:5upx 20upx;
			.username{
				font-size: 36upx;
				color: #fff;
			}
			.signature{
				color: #eee;
				font-size: 28upx;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
				width: 80%;
				overflow: hidden;
			}
		}
		.erweima{
			flex-shrink: 0;
			width: 10vw;
			height: 10vw;
			margin-left: 5vw;
			border-radius: 100%;
		
			display: flex;
			justify-content: center;
			align-items: center;
			background: linear-gradient(to left, #fbbb37 0%,#fcf0d0 105%);
			.icon{
				color: #7b6335;
				font-size: 42upx;
			}
		}
	}
	.order{
		width: 84%;
		margin: 30upx 4% 30upx 4%;
		padding: 30upx 4% 20upx 4%;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		.list{
			display: flex;
			border-bottom: solid 1upx #17e6a1;
			padding-bottom: 10upx;
			.box{
				width: 20%;
				.img{
					width: 100%;
					display: flex;
					justify-content: center;
					.icon{
						font-size: 50upx;
						color: #464646;
					}
				}
				.text{
					width: 100%;
					display: flex;
					justify-content: center;
					font-size: 28upx;
					color: #3d3d3d;
				}
			}
		}
		.balance-info{
			display: flex;
			padding: 10upx 0;
			.left{
				width: 75%;
				display: flex;
				.box{
					width: 50%;
					font-size: 28upx;
					
					.num{
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						color: #f9a453;
					}
					.text{
						width: 100%;
						display: flex;
						justify-content: center;
						color: #3d3d3d;
						font-size: 28upx;
					}
				}
			}
			.right{
				border-left: solid 1upx #17e6a1;
				width: 25%;
				.box{
					
					.img{
						width: 100%;
						height: 50upx;
						display: flex;
						justify-content: center;
						align-items: flex-end;
						.icon{
							font-size: 45upx;
							color: #e78901;
						}
					}
					.text{
						width: 100%;
						display: flex;
						justify-content: center;
						font-size: 28upx;
						color: #3d3d3d;
					}
				}
			}
		}
	}
	.VIP{
		width: 84%;
		margin: -65upx auto 20upx auto;
		padding: 30upx 4%;
		background: linear-gradient(to left, #dea96d 0%,#f6d59b 100%);
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.2);
		border-radius: 15upx;
		display: flex;
		align-items: center;
		.img{
			flex-shrink: 0;
			width: 60upx;
			height: 60upx;
			image{
				width: 60upx;
				height: 60upx;
			}
		}
		.title{
			width: 100%;
			color: #796335;
			font-size: 30upx;
		}
		.tis{
			width: 100%;
			display: flex;
			justify-content: flex-end;
			color: #fcf0d0;
			font-size: 26upx;
		}
	}
	.toolbar{
		width: 92%;
		margin: 4% 4% 0 4%;
		padding: 0 0 20upx 0;
		background-color: #fff;
		box-shadow: 0upx 0upx 25upx rgba(0,0,0,0.1);
		border-radius: 15upx;
		.title{
			padding-top: 10upx;
			margin: 0 0 10upx 3%;
			font-size: 30upx;
			height: 80upx;
			display: flex;
			align-items: center;
		}
		.list{
			display: flex;
			flex-wrap: wrap;
			.box+.box{
				border-top: 1px solid #eee;
			}
			.box{
				width: 96%;
				display: flex;
				align-items: center;
				
				margin:auto ;
				padding: 15upx 0;
				.img{
					width: 23vw;
					// height: 10.5vw;
					display: flex;
					justify-content: center;
					
					image{
						width: 9vw;
						height: 9vw;
					}
				}
				.text{
					width: 100%;
					display: flex;
					
					font-size: 26upx;
					color: #3d3d3d;
				}
			}
		}
	}
</style>
