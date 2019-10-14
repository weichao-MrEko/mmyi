<template>
	
	<view>
		<view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
		<view  class="header" :style="{position:headerPosition,top:headerTop}">
			<view class="icon xiangqian" @click="exit" style="font-size: 40upx;"></view>
			<button type="primary" size="mini" @click="primary">{{info.btn}}</button>
		</view>
		<!-- 占位 -->
		<view v-if="showHeader" class="place"></view>
		<view class="content">
			<view class="example-title">{{info.title}}</view>
			<view class="list">
				<radio-group @change="radioChange">
				<view class="row" v-for="(item,index) in list" >
					<view class="title" >{{item.title}}</view>
					<view class="right"><view class="tis"></view><radio :value="item.language" :checked="item.language === current" /></view>
				</view>
				</radio-group>
			</view>
		</view>
	</view>
</template>

<script>
	import json from "../../../static/json/language.json"
	export default {
		data() {
			return {
				list:[
						{id:"0",title:"中国",language:'zh'},
						{id:"1",title:"English",language:'en'},
						{id:"2",title:"日本語",language:'jp'},
						{id:"3",title:"한국어",language:'kor'},
						{id:"4",title:"Français",language:'fra'},
						{id:"5",title:"Español",language:'spa'},
						{id:"6",title:"ภาษาไทย",language:'th'},
						{id:"7",title:"عربي ،",language:'ara'},
						{id:"8",title:"русский язык",language:'ru'},
						{id:"9",title:"Português",language:'pt'},
						{id:"10",title:"Deutsch",language:'de'},
						{id:"11",title:"Italiano",language:'it'},
						{id:"12",title:"Ελληνικά",language:'el'},
						{id:"13",title:"Nederlands",language:'nl'},
						{id:"14",title:"Polski",language:'pl'},
						{id:"15",title:"Български",language:'bul'},
						{id:"16",title:"Eesti",language:'est'},
						{id:"17",title:"Dansk",language:'dan'},
						{id:"18",title:"Suomi",language:'fin'},
						{id:"19",title:"Česko",language:'cs'},
						{id:"20",title:"RomânăName",language:'rom'},
						{id:"21",title:"SlovenskoName",language:'slo'},
						{id:"22",title:"Svenska",language:'swe'},
						{id:"23",title:"MagyarName",language:'hu'},
						{id:"24",title:"ViệtName",language:'vie'},
					],
					current:'',
					info:{title:'Select Language',btn:"confirm"},
					showHeader:true,
					statusHeight:0,
					headerPosition:"fixed",
					headerTop:null,
					statusTop:null,
			};
		},
		onLoad() {
			this.statusHeight = 0; 
			// #ifdef APP-PLUS
			// this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
		
			// #endif
			uni.getStorage({
				key:"lang",
				success:res=>{
					this.info=json[res.data]
					this.current=res.data
					
					
				}
			})
			
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = e.scrollTop>=0?null:0;
			this.statusTop = e.scrollTop>=0?null:-this.statusHeight+'px';
		},
		methods: {
			exit(){
				uni.navigateBack({
					delta:1
				})
			},
			showType(tbIndex){
				this.tabbarIndex = tbIndex;
				this.list = this.orderList[tbIndex];
			},
			radioChange(e){
				this.current= e.detail.value
			},
			Switch(e){
				uni.request({
					url: 'http://127.0.0.1/tp5/public/index/index/lang', //仅为示例，并非真实接口地址。
					data: {
						lang: e
					},
					success: (res) => {
						console.log(res);
						this.text = 'request success';
					}
				});
			},
			primary(){
				
				uni.setStorage({
					key:"lang",
					data:this.current,
					success:function(){
						uni.reLaunch({
							url:"../../tabBar/home/home"
						})
					}
				})
			},
			toPage(url){
				if(!url){
					uni.showToast({title: '模板未包含此页面',icon:"none"});return;
				}
				uni.navigateTo({
					url:url
				})
			},
			clear(){
				uni.showModal({
					// title: "弹窗标题",
					content: "确定要清除缓存吗？",
					// showCancel: false,
					confirmText: "确定",
					cancelText: "取消",
					success:function(res){
						console.log(res)
						if(res.confirm){
							// 确定
							uni.clearStorage();
						}
						if(res.cancel){
							
						}
					}
				})
			}, 
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f3f3f3;	
		position: relative;
	}
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #f8f8f8;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
		
	}
	.header{
	width: 92%;
	padding: 0 4%;
	height: 100upx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	top: 0;
	z-index: 10;
	background-color: #f8f8f8;
	/*  #ifdef  APP-PLUS  */
	top: var(--status-bar-height);
	/*  #endif  */
	}
	.header button{
		margin: 10upx 20upx;
	}
	.place{
		background-color: #e84148;
		height: 40upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.content{
		margin-top:120upx; 
	}
	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
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
