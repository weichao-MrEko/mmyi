<template>
	<view class="integral">
		<view class="header">
			<view>682</view>
			<view>{{list.integral}}</view>
			<view class="santop"></view>
			<view class="con"><text>{{list.introduce}}</text></view>
		</view>
		<view class="content">
			<view class="nav">
				<view :class="tab==item.id?'color Tab':'Tab'" @click="tab=item.id" v-for="item in list.typelist">{{item.text}}</view>
				<!-- <view :class="tab==1?'color Tab':'Tab'" @click="tab=1">使用积分</view> -->
			</view>
			<view class="list_box">
				<view class="list" v-for="item in list.tasklist" v-if="item.type==tab">
					<view class="list_img">
						<img :src="item.img" alt="">
					</view>
					<view class="title">
						<view class="text">{{item.title}}</view>
						<view class="text_a">{{item.text}}</view>
					</view>
					<button type="primary">{{item.btn}}</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import json from "../../static/json/integral.json"
	export default{
		data(){
			return{
				tab:0,
				list:[
					{
						img:'/static/img/qiandao.png',
						title:'签到送积分',
						text:'每日签到获得2积分',
						url:'',
						btn:'前往',
					},
					{
						img:'/static/img/qiandao.png',
						title:'好任务，看不停',
						text:'每天查看5次任务，可以获得5积分',
						url:'',
						btn:'前往',
					},
					{
						img:'/static/img/qiandao.png',
						title:'分享送积分',
						text:'每次分享，可以获得30积分',
						url:'',
						btn:'前往',
					},
										{
						img:'/static/img/qiandao.png',
						title:'认证送积分',
						text:'完成手机，实名认证，可以获得100积分完成手机，实名认证，可以获得100积分',
						url:'',
						btn:'前往',
					},
										{
						img:'/static/img/qiandao.png',
						title:'交稿送积分',
						text:'每天交稿5次，可以获得10积分',
						url:'',
						btn:'前往',
					},
										{
						img:'/static/img/qiandao.png',
						title:'注册送积分',
						text:'完成注册，可以获得50积分',
						url:'',
						btn:'前往',
					},
										{
						img:'/static/img/qiandao.png',
						title:'设置送积分',
						text:'完成位置设置，可以获得50积分',
						url:'',
						btn:'前往',
					},
					]
			}
		},
		onLoad(){
			console.log(json)
			uni.getStorage({
				key:"lang",
				success:res=>{
					this.list=json[res.data];
					uni.setNavigationBarTitle({
						title:json[res.data].title
					})
				}
			});
		}
	}
</script>

<style lang="scss">
	view{
		line-height: normal;
	}
	page{
		background: #fff;
	}
	.header{
		background: #e84148;
		padding:5% 4%;
		text-align: center;
		color: #ffffff;
		view:nth-child(1){
			font-size: 90upx;
		}
		.con{
			background: rgba(249,139,151,0.6);
			color: #ffffff;
			padding: 5% 3%;
			border-radius: 5px;
			text-align: left;
			font-size: 35upx;
		}
		.santop{
			width: 0; 
			height: 0;
			margin: auto;
			opacity: 0.6;
			border-width: 15px;
			border-style: solid;
			border-color: transparent  transparent  rgba(249,139,151,0.6) transparent;
		}
	}
	.content{
		.nav{
			width: 100%;
			height: 80upx;
			line-height: 80upx;
			display: flex;
			border-bottom:1px #eee solid;
			.Tab{
				flex: 1;
				text-align: center;
				font-size: 30upx;
				line-height: 80upx;
			}
			.color{
				border-bottom:2px #e84148 solid;
				color: #e84148
			}
		}
		.list{
			display: flex;
			justify-content: space-around;
			align-items: center;
			padding: 3%;
			.list_img{
				width: 80upx;
				height:80upx;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.title{
				width: 62%;
				font-size: 30upx;
			}
			.text{
				margin-bottom:15upx;
			}
			.text_a{
				font-size: 20upx;
				margin: 3px 0;
				color: #999;
			}
			button{
				margin: 0;
				height: 60upx;
				line-height: 60upx;
				font-size: 30upx;
			}
		}
		.list+.list{
			border-top: 1px solid #eee;
		}
	}
	
</style>
