<template>
	<view>
		<view class="head" style="background-image: url('/static/img/q.jpg');">
			<view class="head_box">
				<view class="head_img">
					<image class="head_img" :src="shopdetails.shop_pic"></image>
				</view>
				<view class="head_name">
					<view>{{shopdetails.shop_name}}</view>
					<view>地址:{{shopdetails.city_name}}</view>
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
					信誉度
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
							{{shopdetails.shop_desc}}
						</view>
						<image :src="shopdetails.central_ad" style="width: 100%;"></image>
					</view>
				</view>
			</scroll-view>
		</swiper-item>
                   
		<swiper-item>
		<scroll-view :scroll-y="fixation" style="height: 100%;" @scroll="scrollB">
		<view class="uni-product-list" >
			<view class="uni-product" v-for="(product,index) in shop_list" :key="index">
				<view class="image-view">
					<image v-if="renderImage" class="uni-product-image" :src="product.cover"></image>
				</view>
				<view class="uni-product-title">{{product.title}}</view>
				<view class="uni-product-price">
					<text class="uni-product-price-original">￥{{product.cash}}</text>
				</view>
			</view>
		</view>
		</scroll-view>
		</swiper-item>
		
		<swiper-item>
			<scroll-view :scroll-y="fixation" style="height: 100%;" @scroll="scrollB">
				<view class="picture_box" >
					<view class="img_box" v-for="(item,index) in shopdetails.initBanner" @click="ViewImage(index)">
						<image :src="item" mode=""></image>
					</view>
				</view>
			</scroll-view>
			</swiper-item>
		</swiper>
	</view>
	<!-- 底部菜单 -->
	<view class="footer">
		<view class="icons">
			<view class="box" @tap="keep">
				<view class="icon" :class="[isKeep?'shoucangsel':'shoucang']" style="font-size: 40upx;"></view>
				<view class="text">{{isKeep?'已':''}}收藏</view>
			</view>
		</view>
		<view class="btn">
			<view class="joinCart">联系店铺</view>
		</view>
	</view>
		<!-- </scroll-view> -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				api_token:'',
				shop_list:'',
				shopdetails:'',
				isKeep:false,//收藏
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				showHeader:true,
				tab:0,
				fixation:false,
				renderImage: true,
				distance:'0',
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
		onLoad(option) {
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
			console.log(option.shop_id); //打印出上个页面传递的参数。
			var that = this
			uni.request({
				url: 'http://192.168.101.52/api/shop/shopDetail', 
				data: {
					shop_id: option.shop_id
				},
				success: function(res) {
					console.log(res.data.data);
					that.shopdetails = res.data.data
				},
			});
		},
		onShow(){
			uni.getStorage({
				key:"token",
				success:res=>{
					//console.log(res)
					var that=this;
					that.api_token=res.data;
					uni.request({
						url: 'http://192.168.101.52/api/user/workList', 
						data: {
							api_token: that.api_token
						},
						success: function(res) {
							console.log(res.data.data.data);
							that.shop_list = res.data.data.data
						},
					});
				},
				fail:function(e){
				}
			})
		},
		onPageScroll(e){
			//console.log(e)
			this.fixation=e.scrollTop>120?true:false
		},
		methods:{
			ViewImage(e){
				uni.previewImage({
					urls:this.shopdetails.initBanner,
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
				//console.log(e.detail)
				this.tab=e.target.current
				this.distance=0;
				this.distance=e.target.current*100;
			},
			pageScroll(e){
				//console.log(e.detail.scrollTop)
				var scrollTop=e.detail.scrollTop
				this.fixation=scrollTop>145?true:false
				
			},
			scrollB(e){
				//console.log(e.detail.scrollTop)
				var scrollTop=e.detail.scrollTop
				this.fixation=scrollTop==0?false:true
			},
			//收藏
			keep(){
				this.isKeep = this.isKeep?false:true;
			},
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
	.footer {
		position: fixed;
		bottom: 0upx;
		width: 92%;
		padding: 0 4%;
		height: 99upx;
		border-top: solid 1upx #eee;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.icons {
			display: flex;
			height: 80upx;
			margin-left: -4%;
			.box {
				margin-top: -10upx;
				width: 80upx;
				height: 80upx;
				display: flex;
				justify-content: center;
				flex-wrap: wrap;
				.icon {
					font-size: 40upx;
					color: #828282;
				}
				.text {
					display: flex;
					justify-content: center;
					width: 100%;
					font-size: 22upx;
					color: #666;
					margin-top: -20upx;
				}
			}
		}
		.btn {
			height: 100%;
			// border-radius: 40upx;
			// overflow: hidden;
			display: flex;
			width: 320upx;
			margin-right: -4%;
			.joinCart,
			.buy {
				// height: 80upx;
				// padding: 0 40upx;
				flex: 1;
				justify-content: center;
				color: #fff;
				display: flex;
				align-items: center;
				font-size: 28upx;
			}
			.joinCart {
				background-color: #f0b46c;
			}
			.buy {
				background-color: #e84148;
			}
		}
	}
</style>

