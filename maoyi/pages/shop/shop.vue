<template>
	<view>
		<!-- <scroll-view @scroll="pageScroll" style="height: 100vh;" scroll-y> -->
		<view class="head" style="background-image: url('/static/img/q.jpg');">
		<!-- 	<view v-if="showHeader" class="status" :style="{position:headerPosition,top:statusTop}"></view>
			<view  class="header" :style="{position:headerPosition,top:headerTop},fixation?'background-color: #e84148;':''">
				<view class="icon xiangqian" @click="exit" style="font-size: 40upx;color: #fff;"></view>
				
			</view> -->
			<!-- 占位 -->
			<view v-if="showHeader" class="place"></view>
			<view class="head_box">
				<view class="head_img">
					<image src="/static/img/face.jpg" mode="aspectFit"></image>
				</view>
				<view class="head_name">
					asdffegweasdfw
				</view>
			</view>
			
		</view>
		<view >
			
		
		<view class="menu">
			<view class="menu_list">
				<view :class=" tab==0?'bottom list_name':'list_name'"  @click="tablist(0)">
					商铺信息
				</view>
				<view :class=" tab==1?'bottom list_name':'list_name'" @click="tablist(1)">
					商品出售
				</view>
				<view :class=" tab==2?'bottom list_name':'list_name'" @click="tablist(2)">
					店铺照片
				</view>
				<view :class=" tab==3?'bottom list_name':'list_name'" @click="tablist(3)">
					商铺信息
				</view>
				<view class="border" :style="'transform: translate3d('+ distance +'%,0,0);'"></view>
			</view>
		</view>
		<swiper class="swiper" :indicator-dots="false" :autoplay="false"  duration="500" :current="tab" @change="changeTab">
         <swiper-item>
			 <scroll-view :scroll-y="fixation" style="height: 100%;" @scroll="scrollB">
				<view class="content_shop" >
					<view class="shop_box">
						<view class="shop_title">
							<span>店铺简介</span>
						</view>
						<view class="shop_con">
							啥都佛一阿斯顿发你 打飞机就；撒旦法山东矿机爱空间大师傅啊进度款换肤官方阖家安康维护费的框架奥古斯丁发卡行答复粉红色的高房价安徽的噶几盾构法决胜巅峰赶赴安抚ad回放的房价‘
							打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂打卡换肤看到回复卡士大夫海口市答复哈开始的放假哈收款方看得见回复卡萨丁加号发的咖啡大黄蜂ask大富豪
						</view>
					</view>
					<view class="shop_box">
						<view class="shop_title">
							<span>营业执照</span>
							<view style="display: flex;align-items: center;">
								<view class="title_img">
									<image src="/static/img/q.jpg" mode="aspectFit"></image>
								</view>
								<view class="icon xiangyou" style="font-size: 40upx;margin-left: 10upx;">
									
								</view>
							</view>
							
						</view>
						
					</view>
				</view>
			</scroll-view>
		</swiper-item>
                   
		<swiper-item>
		<scroll-view :scroll-y="fixation" style="height: 100%;" @scroll="scrollB">
		<view class="uni-product-list" >
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<view class="image-view">
					<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
				</view>
				<view class="uni-product-title">{{product.title}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-favour">￥{{product.originalPrice}}</text>
					<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
					<text class="uni-product-tip">{{product.tip}}</text>
				</view>
			</view>
		</view>
		</scroll-view>
		</swiper-item>
		
		<swiper-item>
		<scroll-view :scroll-y="fixation" style="height: 100%;" @scroll="scrollB">
			<view class="picture_box" >
				<view class="img_box" v-for="(item,index) in imglist" @click="ViewImage(index)">
					<image :src="item" mode=""></image>
					<view class="picture_text">
						asdlfj
					</view>
				</view>
			</view>
		</scroll-view>
		</swiper-item>
	</swiper>
	</view>
		<!-- </scroll-view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				showHeader:true,
				tab:0,
				fixation:false,
				renderImage: true,
				distance:'0',
				imglist:[
					"../../static/img/1.jpg",
					"../../static/img/2.jpg",
					"../../static/img/3.jpg",
					"../../static/img/face.jpg",
					"../../static/img/q.jpg",
					"../../static/img/userbg.jpg"],
				productList:[
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',
				        title: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',
				        originalPrice: 9999,
				        favourPrice: 8888,
				        tip: '自营'
				    },
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',
				        title: 'Apple iPad 平板电脑 2018年新款9.7英寸',
				        originalPrice: 3499,
				        favourPrice: 3399,
				        tip: '优惠'
				    },
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',
				        title: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',
				        originalPrice: 12999,
				        favourPrice: 10688,
				        tip: '秒杀'
				    },
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',
				        title: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',
				        originalPrice: 999,
				        favourPrice: 958,
				        tip: '秒杀'
				    },
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',
				        title: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',
				        originalPrice: 8888,
				        favourPrice: 8288,
				        tip: '优惠'
				    },
				    {
				        image: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',
				        title: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',
				        originalPrice: 2899,
				        favourPrice: 2799,
				        tip: '自营'
				    }
				]
			}
		},
		onLoad() {
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			this.$http("/api/user/myShop",{},"get").then(res=>{
				
			})
		},
		onPageScroll(e){
			console.log(e)
			this.fixation=e.scrollTop>120?true:false
		},
		methods:{
			ViewImage(e){
				uni.previewImage({
					urls:this.imglist,
					current:e,
					success:function(res){
						console.log(res)
					}
				})
			},
			tablist(e){
				this.tab=e
				this.distance=0;
				this.distance=e*100;
			},
			exit(){
				uni.navigateBack({
					delta:1
				})
			},
			changeTab(e){
				console.log(e.target.current)
				this.tab=e.target.current
				this.distance=0;
				this.distance=e.target.current*100;
			},
			pageScroll(e){
				console.log(e.detail.scrollTop)
				var scrollTop=e.detail.scrollTop
				this.fixation=scrollTop>145?true:false
				
			},
			scrollB(e){
				console.log(e.detail.scrollTop)
				var scrollTop=e.detail.scrollTop
				this.fixation=scrollTop==0?false:true
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #f1f1f1;
	}
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #ffffff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height);//覆盖样式
		/*  #endif  */
		
	}
	.fixedmenu{
		position: fixed;
		top:95upx;
		z-index: 10;
		left: 0;
		width: 100%;
	}
	.border{
		width: 25%;
		
		height: 4upx;
		background-color: #e84148;
		transition: all .3s ease-out;
		&.shop{
			transform: translate3d(100%,0,0);
		}
	}
	.header{
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		flex-wrap: wrap;
		color: #fff;
		top: 0;
		z-index: 10;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
	}
	.header button{
		margin: 10upx 20upx;
	}
	.place{
		// background-color: #ffffff;
		height: 40upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.head{
		width: 100%;
		height: 400upx;
		background: fuchsia;
		background-size:100% 100%;
		.head_box{
			width: 40%;
			margin:auto;
			padding: 10%;
			.head_img{
				width: 120upx;
				height: 120upx;
				overflow: hidden;
				margin: auto;
				border-radius: 100%;
				image{
					width: 100%;
					height: 100%;
				}
			}
			.head_name{
				margin-top:10upx;
				color: #fff;
				text-align: center;
			}
		}
	}
	.menu{
		height: auto;
	}
	.menu_list{
		width: 100%;
		height: 90upx;
		font-size: 30upx;
		flex-wrap: wrap;
		border-bottom:1px solid #eee; 
		background: #ffffff;
		display: flex;
		.list_name{
			width: 25%;
			text-align: center;
			color: #999;
			line-height: 90upx;
		}
		.bottom{
			// border-bottom:2px solid red;
			color: #000;
		}
	}
	.content_shop{
		width: 100%;
		height: auto;
		margin: auto;
		// position: absolute;
		// top:0;
		.shop_box{
			background: #fff;
			width: 100%;
			height: auto;
			margin-bottom:20upx;
			position: relative;
			.shop_title{
				align-items: center;
				justify-content: space-between;
				display: flex;
				margin: 0upx 2%;
				padding: 20upx 0;
				border-bottom: #eee solid 1px;
				span{
					border-left: 5px solid orangered;
					padding-left:20upx; 
					height: 30upx;
					line-height: 30upx;
					font-size: 33rpx;
				}
				.title_img{
					width: 180upx;
					height: 120upx;
					image{
						width: 100%;
						height: 100%;
					}
				}
			}
			.shop_con{
				width: 96%;
				margin:auto;
				padding: 3% 0;
				font-size: 28upx;
			}
		}
	}
	.uni-product{
		background: #fff;
		border-radius:10px; 
		margin: 1.5%;
		padding:15upx 10upx;
	}
	.swiper{
		margin-top: 2upx;
		height: 86.29vh;
	}
	.picture_box{
		margin-top: 20upx;
		flex-wrap: wrap;
		display: flex;
		.img_box{
			width: 48%;
			margin: 1%;
			position:relative;
			height: 240upx;
			image{
				height: 100%;
			}
			.picture_text{
				position: absolute;
				bottom:0;
				width: 100%;
				background: rgba(0,0,0,0.4);
				color: #FFFFFF;
				text-align: center;
			}
		}
	}
</style>
