<template>
	<view class="">
		<view class="" v-if="swiper">
		<!-- 	<view class="img-skip" @tap="bindSkip"> 
				<text>跳过</text>
			</view> -->
			<swiper indicator-dots="true" :autoplay="false" @animationfinish="animationfinish" @touchend="touchend" @touchstart="touchstart">
				<swiper-item v-for="(img,key) in imgs" :key="key">
					<image :src="img" class="img-view" />
				</swiper-item>
			</swiper>
		</view>
		<view>
			
			<view class="content" v-if="!swiper">
				<view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
				<view v-if="showHeader" class="header" :style="{position:headerPosition,top:headerTop}">
					<view class="addr"><view class="example-title">Language</view></view>
					<view class="input-box">
						
					</view>
					<view class="icon-btn">
						<button type="primary" size="mini" @click="Confirm">Confirm</button>
						<!-- <view class="icon tongzhi" @tap="toMsg"></view>
						<view class="icon setting" @tap="toSetting"></view> -->
					</view>
				</view>
				<!-- 占位 -->
				<view v-if="showHeader" class="place"></view>
				<!-- <view class="flex">
					<view class="example-title">Language</view>
					<button type="primary" size="mini" @click="Confirm">Confirm</button>
				</view> -->
				
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
	</view>
</template>

<script>
	import {mapState, mapMutations} from 'vuex';
	
	export default {
		data() {
			return {
				page:false,
				isfirst:true,
				headerPosition:"fixed",
				headerTop:0,
				statusTop:0,
				showHeader:true,
				statusHeight:0,
				current:'',
				swiper:true,
				imgs: [
					"../../static/img/index/index_1.jpg",
					"../../static/img/index/index_2.jpg",
					"../../static/img/index/index_3.jpg"
				],
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
					num:0,
			}
		},
		computed: mapState(['hasSkip','language']),
		methods:{
			...mapMutations(['skipIndex',"langIndex"]),
			bindSkip(){
				this.skipIndex();
				this.swiper=false;
				uni.getSystemInfo({
					success: function (res) {
						console.log(res.model);
						console.log(res.pixelRatio);
						console.log(res.windowWidth);
						console.log(res.windowHeight);
						console.log(res.language);
						console.log(res.version);
						console.log(res.platform);
					}
				});
				// uni.reLaunch({
				// 	url:'../denglu/login/login'
				// });
			},
			radioChange(e){
				this.current= e.detail.value
			},
			Confirm(){
				this.langIndex()
				uni.setStorageSync('lang', this.current);
				uni.reLaunch({
					url:'../login/login'
				});
			},
			touchstart(e){
				this.clientX=e.changedTouches[0].clientX
			},
			touchend(e){
				var clientX=e.changedTouches[0].clientX
				if(this.clientX>clientX){
					console.log(123)
					if(this.page){
						// this.swiper=false
						 this.skipIndex();
						 uni.reLaunch({
						 	url:'../tabBar/home/home'
						 });
					}
				}
			},
			animationfinish(e){
				var i=e.detail.current;
				var len=this.imgs.length-1;
				console.log(i,len)
				if(i==len){
					this.page=true
				}
			}
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			// this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			// this.headerTop = e.scrollTop>=0?0:this.statusHeight+'px';
			// this.statusTop = e.scrollTop>=0?0:0;
		},
		onLoad() {
			console.log(this)
			this.statusHeight = 0;
			
			// #ifdef APP-PLUS
			// this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// this.headerPosition = e.scrollTop>=0?"fixed":"absolute";
			this.headerTop = this.statusHeight+'px';
			
			uni.showModal({
			    title: '提示',
			    content: this.statusHeight,
			    success: function (res) {
			        if (res.confirm) {
			            console.log('用户点击确定');
			        } else if (res.cancel) {
			            console.log('用户点击取消');
			        }
			    }
			});
			// #endif
			console.log(this.hasSkip)
			if(this.hasSkip){
				// this.swiper=false;
				// if(this.language){
					uni.reLaunch({
						url:'../tabBar/home/home'
					});
				// }
			}
			
		}  
	}
</script>

<style lang="scss">
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 1000;
		background-color: #00BFFF;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		-webkit-transform: translateZ(0);
		overflow: hidden;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
		
	}
	page{height:100%;overflow:auto;margin: 0;}
	body.position-fixed {
	  position: fixed;
	  top: 0;
	  left: 0;
	  right: 0;
	  bottom: 0;
	  overflow: hidden;
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
		right: 0;
		left: 0;
		bottom: 0;
		overflow: hidden;
		-webkit-transform: translateZ(0);
		z-index: 1000;
		background-color: #f3f3f3;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		.icon-btn{
			width: 180upx;
			height: 60upx;
			flex-shrink: 0;
			margin-right: 20upx;
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
		background-color: #f3f3f3;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	swiper{
		height: 100vh;
	}
	.img-skip{
		width: 2.5em;
		height: 1.6em;
		position: absolute;
		z-index: 100; 
		right: 15upx;
		top: 50px; /*隐藏导航条的高度为44px*/
		background-color: #D3D3D3;
		text-align: center;
		border-radius: 15%;
	}
	.img-skip text{
		font-size: 0.8em;
		line-height: 1.6em;
		color: #FFFFFF;
	}
	.img-view{
		width: 100%;
		height: 100%;
	}
	
	// .header{
	// 	display: flex;
	// 	width: 100%;
	// 	justify-content: space-between;
	// 	align-items: center;
	// 	position: fixed;
	// 	top:0;
	// 	height: 70upx;
	// 	background: #f8f8f8;
	// 	z-index: 20;
	// 	padding: 10upx;
	// }
	.header button{
		width: 100%;
		height: 60upx;
		line-height: 60upx;
		padding: 0upx;
	}
	.content{
		// margin-top:120upx; 
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
		.flex{
			display: flex;
			justify-content: space-between;
			background-color: #f3f3f3;	
			position: fixed;
			width: 100%;
			z-index: 20;
			top:0;
			button{
				width: auto;
				height: 80upx;
				margin: 10upx;
				padding: 10upx 30upx;
				font-size: 30upx;
			}
		}
		// .header button{
		// 	
		// }
	}
</style>
