<template>
	<view>
		<!-- <video id="myVideo" class="myVideo" :src="videoSrc" v-show="isPlayVideo" :show-fullscreen-btn="showFullscreenBtn" :direction="videoDirection" :show-play-btn="showPlayBtn" @pause="videoPause" @fullscreenchange="viderFullscreen">
			<cover-image class="stopPlayVideoBtn" @click="stopPlayVideo" src="/static/img/close.png"></cover-image>
		</video>
		<view class="content">
			
			<view class="label">
				<view v-for="(label,index) in labelList" :class="{'on':index==labelIndex}" @tap="loadRatings(index)" :key="label.type">
					{{label.name}}({{label.number}})
				</view>
			</view>
			<view class="list">
				<view class="row" v-for="(row,Rindex) in ratingsList" :key="Rindex">
					<view class="left">
						<view class="face">
							<image :src="row.face"></image>
						</view>
					</view>
					<view class="right">
						<view class="name-date">
							<view class="username">
								{{row.username}}
							</view>
							<view class="date">
								{{row.date}}
							</view>
						</view>
						<view class="spec">
							{{row.spec}}
						</view>
						<view class="first">
							<view class="rat">
								{{row.first.content}}
							</view>
							<view class="img-video">
								<view class="box" v-for="item in row.first.video" @tap="playVideo(item.path)" :key="item.path">
									<image mode="aspectFill" :src="item.img"></image>
									<view class="playbtn">
										<view class="icon bofang"></view>
									</view>
								</view>
								<view class="box" v-for="item in row.first.img" @tap="showBigImg(item,row.first.img)" :key="item">
									<image mode="aspectFill" :src="item"></image>
								</view>
							</view>
						</view>
						<view class="append" v-if="row.append">
							<view class="date">
								{{row.append.date}}天后追加
							</view>
							<view class="rat">
								{{row.append.content}}
							</view>
							<view class="img-video">
								<view class="box" v-for="item in row.append.video" @tap="playVideo(item.path)" :key="item.path">
									<image mode="aspectFill" :src="item.img"></image>
									<view class="playbtn">
										<view class="icon bofang"></view>
									</view>
								</view>
								<view class="box" v-for="item in row.append.img" @tap="showBigImg(item,row.append.img)" :key="item">
									<image mode="aspectFill" :src="item"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view> -->
		<view class="ratings" v-if="!showSwiper">
			<view class="comment" @tap="toRatings(index)" v-for="(item,index) in offer" style="position:relative;">
				<view class="Successful_min" v-if="item.status==1"><image src="../../../static/img/Successful.png" mode=""></image></view>
				<view class="user-info" >
					<view style="display: flex;">
						<view class="face" v-if="item.avatar"><image :src="item.avatar"></image></view>
						<view class="face" v-else><image src="../../../static/img/face.jpg"></image></view>
						<view class="username">{{item.nickname}}</view>
					</view>
					<view class="dateText">
						商品{{item.look_status==0?'未':'已'}}浏览
					</view>
				</view>
				<view class="text">
					<view >价格：${{item.price}}</view>
					<view class="dateText">{{item.created_at}}</view>
				</view>
				<view class="content" >
					{{item.desc}}
				</view>
			</view>
		</view>
		<view class="storekeeper" v-if="showSwiper">
			<swiper :indicator-dots="false" :autoplay="false" :current="swiperindex" :duration="1000" style="height: 91vh;background: #F4F4F4;" @change="change">
				<swiper-item class="swiperBox" v-for="(item,index) in offer">
					<view class="exit" @click="exit">×</view>
					<view class="Successful" v-if="item.status==1"><image src="../../../static/img/Successful.png" mode=""></image></view>
					<scroll-view class="swiper-item" scroll-y>
						<view class="row">
							<view class="list">
								<view class="title">
									用户头像
								</view>
								<view class="user_img">
									<image :src="item.avatar" mode="" v-if="item.avatar" ></image>
									<image src="../../../static/img/face.jpg" mode="" v-else></image>
								</view>
							</view>
							<view class="row">
								<view class="list">
									<view class="title">
										用户名
									</view>
									<view class="user_name">
										{{item.nickname}}
									</view>
								</view>
							</view>
							<view class="row">
								<view class="list">
									<view class="title">
										报价
									</view>
									<view class="user_name">
										${{item.price}}
									</view>
								</view>
							</view>
							<view class="row">
								<view class="list">
									<view class="title">
										国家
									</view>
									<view class="user_name">
										${{item.price}}
									</view>
								</view>
							</view>
							<view class="row">
								<view class="list">
									<view class="title">
										报价时间
									</view>
									<view class="user_name">
										{{item.created_at}}
									</view>
								</view>
							</view>
							<view class="row">
									<view class="remark">{{item.desc}}</view>
							</view>
						</view>
					</scroll-view>
					<view class="footer">
						<view class="left">
							<view class="btn" @click="last" :style="0==swiperindex?'background: #999;':''">
								上一个
							</view>
							<view class="btn" @click="next" :style="offer.length-1==swiperindex?'background: #999;':''">
								下一个
							</view>
						</view>
						
							<view class="btn" :style="btncolor?'background: #999;':''" @click="Confirm" v-if="showBtn">
								确认中标人
							</view>
							<view class="btn"  style="background: #999;" v-if="Wait">
								等待接受
							</view>
							<view class="btn"  @click="" v-if="Attn">
								联系中标人
							</view>
						
					</view>
				</swiper-item>
				
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				labelIndex:0,
				showSwiper:false,
				showBtn:false,
				videoDirection:0,
				showFullscreenBtn:true,
				showPlayBtn:true,
				isPlayVideo:true,
				videoSrc:'',
				offer:[],
				swiperindex:0,
				btncolor:true,
				user_type:'',
				bidding:'',
				Wait:'',
				Attn:''
			};
		},
		onLoad(e){
			this.task_id=e.task_id
			this.dataInfo()
		},
		onReady: function (res) {
			
		},
		//下拉刷新，需要自己在page.json文件中配置开启页面下拉刷新 "enablePullDownRefresh": true
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		//上拉加载，需要自己在page.json文件中配置"onReachBottomDistance"
		onReachBottom() {
			// uni.showToast({ title: '触发上拉加载' });
		},
		methods: {
			exit(){
				this.showSwiper=false;
			},
			dataInfo(){
				this.$http("/newtasks/taskindex",
				{
					id:this.task_id,
				}).then(res=>{
					console.log(res)
					this.showBtn=res.data.data.user_type==1?true:false
					this.user_type=res.data.data.user_type
					// this.bidding=res.data.data.merge
					this.offer=res.data.data.works.data
					var currentTime=new Date().getTime();
					var startTime=new Date(res.data.data.detail.begin_at).getTime()
					var endTime=new Date(res.data.data.detail.delivery_deadline).getTime()
					if(endTime<currentTime){
						this.btncolor=false
					}
					for(var i=0;i<this.offer.length;i++){
						if(this.offer[i].status==1){
							if(res.data.data.is_win_bid==0){
								this.Wait=true;
								this.showBtn=false;
							}else if(res.data.data.is_win_bid==1){
								this.Attn=true;
								this.showBtn=false;
							}
						}
					}
				})
			},
			toRatings(e){
				this.showSwiper=true;
				this.swiperindex=e
			},
			//上一个
			last(){
				if(this.swiperindex>0){
					this.swiperindex--
				}
			},
			//下一个
			next(){
				if(this.offer.length-1>this.swiperindex){
					this.swiperindex++
				}
			},
			change(e){
				this.swiperindex=e.target.current
				if(this.user_type==1){
					this.$http("/api/work/detail",
					{
						id:this.offer[this.swiperindex].id,
					},"get",false).then(res=>{
						this.offer[this.swiperindex]=res.data.data
					})
				}
			},
			// 确认中标人
			Confirm(){
				if(this.btncolor){
					 uni.showToast({ title: '还未到选标时间',icon:"none" });
					 return;
				}
				this.$http("/newtasks/bidWinBid",
				{
					work_id:this.offer[this.swiperindex].id,
					//任务ID
					task_id:this.offer[this.swiperindex].task_id,
				}).then(res=>{
					if(res.data.status==1000){
						this.dataInfo()
						uni.showToast({
							title:'选标成功',
							icon:"success"
						})
					}else{
						uni.showToast({
							title:'选标失败',
							icon:"none"
						})
					}
				})
			}
		},
	}
</script>

<style lang="scss">
	.swiper-item{
		background: #FFFFFF;
		width: 90%;
		height: 85%;
		border-radius: 20upx;
		margin:2% auto;
	}
	.ratings{
		padding: 0 3%;
	}
	.comment {
		width: 100%;
		border-bottom: 1px solid #eee;
		padding:20upx 0;
		.user-info {
			width: 100%;
			height: 40upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.face {
				width: 40upx;
				height: 40upx;
				margin-right: 8upx;
				image {
					width: 40upx;
					height: 40upx;
					border-radius: 100%;
				}
			}
			
			.username {
				font-size: 24upx;
				color: #999;
			}
			
		}
		
		.text{
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin: 10upx 0;
			.dateText{
				text-align: right;
				font-size: 24upx;
			}
			view:nth-child(1){
				color:red;
				font-size:25upx;
			}
		}
		.content {
			margin-top: 10upx;
			font-size: 26upx;
		}
	}
	page{
		background-color: #fff;
	}
	.row{
		.list{
			display: flex;
			margin:3%;
			padding: 2% 0;
			align-items: center;
			justify-content: space-between;
			border-bottom:1px solid #eee;
			.user_img{
				width: 80upx;
				height: 80upx;
				margin:10upx;
				image{
					height: 100%;
				}
			}
		}
		.remark{
			margin: 3%;
			height: auto;
		}
	}
	.Successful{
		width: 200upx;
		height: 200upx;
		position: absolute;
		bottom:15%;
		right:10%;
		image{
			height: 100%;
		}
	}
	.Successful_min{
		width: 120upx;
		height: 120upx;
		position: absolute;
		top:15%;
		right:2%;
		image{
			height: 100%;
		}
		
	}
	.exit{
		position: absolute;
		top:0%;
		right:1%;
		text-align: center;
		font-size: 40upx;
		width: 50upx;
		height: 50upx;
		line-height: 45upx;
		background: #e84148;
		color: #FFFFFF;
		border-radius: 100%;
	}
	.footer{
		display: flex;
		width:90%;
		justify-content: space-between;
		margin:auto;
		.left{display: flex;width: 50%;}
		.btn{
			border: 1px solid #e84148;
			color: #fff;
			background: #e84148;
			margin:0 2%;
			padding: 10upx 20upx;
		}
	}
/*
* <view class="list">
				<view class="row">

					<view class="right">
						
						<view class="spec">
							规格：XL
						</view>
						<view class="first">
							<view class="rat">
								好看，可以，不愧是专业的，才拿到手上就研究了半天才装上
							</view>
							<view class="img-video">
								<view class="box">
									<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>
									<view class="playbtn">
										<view class="icon bofang"></view>
									</view>
								</view>
								<view class="box">
									<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>
								</view>
								<view class="box">
									<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>
								</view>
							</view>
						</view>
						<view class="append">
							<view class="date">
								65天后追加
							</view>
							<view class="rat">
								好看，可以，不愧是专业的，才拿到手上就研究了半天才装上
							</view>
							<view class="img-video">
								<view class="box">
									<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>
								</view>
								<view class="box">
									<image src="https://ae01.alicdn.com/kf/HTB1wREwTXzqK1RjSZFvq6AB7VXaT.jpg"></image>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			* 
			* */
</style>
