<template>
	<view>
        <view class="chat-list">
			<view class="chat" v-for="(chat,index) in chatList" :key="index">
				<view class="row" @tap="toChat(chat)">
					<view class="left">
						<image :src="chat.select_name.avatar"></image>
					</view>
					<view class="right">
						<view class="top">
							<view class="username">{{chat.select_name.nickname}}</view>
							<view class="time">{{chat.created_at}}</view>
						</view>
						<view class="bottom">
							<view class="msg">{{chat.content}}</view>
							<view class="tis" v-if="chat.id>0">{{chat.id}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				chatList:[
					{
						uid:1,
						username:"鲜果蔬专营店",
						face:"/static/img/im/face/face_1.jpg",
						time:"13:08",
						msg:"亲，20点前下单都是当天送达的",
						tisNum:1
					},
					{
						uid:2,
						username:"官店大欺客旗舰店",
						face:"/static/img/im/face/face_2.jpg",
						time:"13:05",
						msg:"问那么多干什么？不想买就滚~",
						tisNum:0
					},
					{
						uid:3,
						username:"妙不可言",
						face:"/static/img/im/face/face_3.jpg",
						time:"12:15",
						msg:"推荐一个商品呗？",
						tisNum:0
					},
				]
			}
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
			// 			url:"../login/login"
			// 		})
			// 	}
			// });
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
		    setTimeout(function () {
		        uni.stopPullDownRefresh();
		    }, 1000);
		},
		onLoad() {
			var that = this;
			    //聊天
				// var msg = {
				// 		  type:'to_from_user',
				// 		  uid:res.data.uid,
				// 		  content_type:'text',
				// 		  content:'9898989',
				// 		  to_from_user_id:9
				// }
				//切换状态
				uni.getStorage({
					key:"userInfo",
					success:res=>{
						var msg = {
						  type:'user_type',
						  uid:res.data.uid,
						  user_type:2,
						}
						uni.sendSocketMessage({
							data: JSON.stringify(msg),
						});	
					}
				})   
				
				
				
				uni.getStorage({
					key:"token",
					success:res=>{
						that.$http("api/user/getFriendList",{
							api_token:res.data,
						},"get").then(res=>{
							console.log(res)
							var da = res.data.data
							da.forEach(function(value,index,array){
							　　value.select_name.avatar = value.select_name.avatar.replace(/\\/g,"/")
							})
							this.chatList = da
						})
						
					}
				})   
				

            // uni.onSocketMessage(function (res) {
            //   console.log('收到服务器内容：' + res.data);
            // });
			

		},
		onNavigationBarButtonTap(e){
			console.log(e)
			uni.navigateTo({
				url:"friend/friend"
			})
		},
		methods: {
			toChat(chat){
                
				uni.navigateTo({
					url:"chat/chat?name="+ chat.select_name.nickname + "&pic="+chat.select_name.avatar
				}) 
			}
		}
	}
</script>

<style  lang="scss">
	page{
		background-color: rgba(0,0,0,0);
	}
	.chat-list{
		width: 94%;
		padding: 0 3%;
		.chat{
			width: 100%;
			height: 100upx;
			padding: 20upx 0;
			border-bottom: solid 1upx #eaeaea;
			.row{
				display: flex;
				justify-content: flex-start;
				.left{
					flex-shrink:0;
					width: 100upx;
					height: 100upx;
					image{
						width: 100upx;
						height: 100upx;
						border-radius: 20upx;
					}
				}
				.right{
					flex-shrink:1;
					width: 98%;
					padding-left: 2%;
					.top{
						width: 100%;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						.usernam{
							font-size: 26upx;
						}
						.time{
							font-size: 22upx;
							color: #bebebe;
						}
					}
					.bottom{
						width: 100%;
						height: 40upx;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.msg{
							font-size: 25upx;
							color: #777;
						}
						.tis{
							width: 35upx;
							height: 35upx;
							font-size: 22upx;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: #eb4d3d;
							color: #fff;
							border-radius: 100%;
						}
					}
				}
			}
		}
	}
</style>
