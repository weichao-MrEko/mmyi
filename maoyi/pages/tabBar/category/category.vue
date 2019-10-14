<template>
	<view >
		<!-- 状态栏 -->
		<!-- <view class="status" :style="{position:headerPosition}"></view>
        <view class="header" :style="{position:headerPosition}">
			<view class="addr"><view class="icon location"></view>{{city}}</view>
			<view class="input-box">
				<input placeholder="搜索感兴趣商品" placeholder-style="color:#c0c0c0;" @tap="toSearch()"/>
				<view class="icon search"></view>
			</view>
			<view class="icon-btn">
				<view class="icon " @tap="" style="font-size: 20upx;">搜索</view>
			</view>
		</view> -->
		<!-- 占位 -->
		<!-- <view class="place"></view> -->
		<!-- <view class="category-list"> -->
			<!-- 左侧分类导航 -->
			<!-- <scroll-view  scroll-y="true" class="left"  style="background: #FFFFFF;">
                <view class="row" v-for="(category,index) in categoryList" :key="category.id" :class="[index==showCategoryIndex?'on':'']" @tap="showCategory(index)">
					<view class="text">
						<view class="block"></view>
						{{category.name}}
					</view>
				</view>
				
            </scroll-view> -->
			<!-- 右侧子导航 -->
			<!-- <scroll-view  scroll-y="true" class="right" >
			    <view class="category" v-for="(category,index) in categoryList" :key="category.id" v-show="index==showCategoryIndex" > -->
					<!-- <view class="banner">
						<image :src="category.pic"></image>
					</view> -->
				<!-- 	<view class="list">
						<view class="box" v-for="(box,i) in category.children_task" :key="i" @tap="toCategory(box)">
							<image :src="box.pic"></image>
							<view class="text">{{box.name}}</view>
						</view>
					</view>
				</view>
			</scroll-view>
		</view> -->
		<view class="menu_nav">
			<view class="row-item" @click="openbox(0)" :class="cateIndex==0?'selectcolor':''">
				<view>分类</view>
				<view class="icon xia" style="font-size: 28upx;margin: 0 5upx;" :class="cateIndex==0?'selectcolor du':''"></view>
			</view>
			<view class="row-item" @click="openbox(1)" :class="cateIndex==1?'selectcolor':''">
				<view>价格</view>
				<view class="icon xia" style="font-size: 28upx;margin: 0 5upx;"  :class="cateIndex==1?'selectcolor du':''"></view>
			</view>
			<view class="row-item" @click="openbox(2)" :class="cateIndex==2?'selectcolor':''">
				<view>排序</view>
				<view class="icon xia" style="font-size: 28upx;margin: 0 5upx;" :class="cateIndex==2?'selectcolor du':''"></view>
			</view>
			<view class="row-item" @click="openbox(3)" :class="cateIndex==3?'selectcolor':''">
				<view>筛选</view>
				<view class="icon xia" style="font-size: 28upx;margin: 0 5upx;" :class="cateIndex==3?'selectcolor du':''"></view>
			</view>
		</view>
		<view class="showBox" v-if="showbox">
			<view class="Boxmenu">
				<view v-if="cateIndex==0">
					<view style="display: flex;width: 100%;">
						<view class="onemenu">
							<view class="row" v-for="(category,index) in categoryList" :key="category.id" @tap="showCategory(index)" :style="index==showCategoryIndex?'background:#eee;':''">
								{{category.name}}
							</view>
						</view>
						<view class="onemenu" v-if="showCategoryIndex" style="background: #f4f4f4;">
							<view class="row" v-for="(box,i) in categoryList[showCategoryIndex].children_task" :key="i" @click="toCategory(i)" :class="showcate==i?'selectcolor':''">
								{{box.name}} 
								<span style="float: right;color: #e84148;" v-if="showcate==i">√</span>
							</view>
						</view>
					</view>
					
					<view class="footer-box">
						<view class="left-btn">
							重置
						</view>
						<view class="right-btn" @click="cateAffirm">
							确定
						</view>
					</view>
				</view>
				<view v-if="cateIndex==1">
					<view class="onemenu" >
						<view class="row" :class="priceIndex==-1?'selectcolor':''" @click="selectprice(-1)">全部
							<span style="float: right;color: #e84148;" v-if="priceIndex==-1">√</span>
						</view>
						<view class="row" v-for="(item,index) in priceGroup" :key="index" @click="selectprice(index)" :class="high==item.high&&low==item.low?'selectcolor':''">
							{{item.low}}<i v-if="item.high">-</i><span v-else>以上</span>{{item.high}}
							<span style="float: right;color: #e84148;" v-if="high==item.high&&low==item.low">√</span>
						</view>
					</view>
					<view class="footer-box">
						<view class="left">
							<view style="margin-right: 20upx;">自定义</view>
							<input type="text" value="" v-model="low" placeholder="最低价"/>━
							<input type="text" value="" v-model="high" placeholder="最高价"/>
						</view>
						<view class="right-qued" :style="priceIndex!=null?'background: #e84148;':''" @click="priceAffirm">
							确定
						</view>
					</view>
				</view>
				<view v-if="cateIndex==2">
					<view class="onemenu" style="height: auto;">
						<view class="row" v-for="(paixu,index) in paixuGroup" :key="index" @tap="selectpaixu(index)" >
							{{paixu.paixu}}
							<span style="float: right;color: #e84148;" v-if="paixuIndex==index">√</span>
						</view>
					</view>
				</view>
				<view v-if="cateIndex==3">
					<view class="onemenu" style="height: auto;">
						
					</view>
					<view class="footer-box">
						<view class="left-btn">
							重置
						</view>
						<view class="right-btn" @click="cateAffirm">
							确定
						</view>
					</view>
				</view>
			</view>
			<view class="yinying" @click="showbox=false;cateIndex=-1"></view>
		</view>
		<view style="margin-top:100upx ;">
			<view class="recommend_2"  v-for="(item,index) in InfoList" :key="index">
				<image class="recommend_img" src="/static/img/1.jpg"></image>
				<view class="recommend_2_name">
					<view class="title" style="">dadffasdafeae</view>
					<view style="align-self:flex-end;display: flex;justify-content: space-between;width: 100%;">
						<view style="color: red;">$300</view>
						<view>2019-09-17</view>
					</view>
				</view>
			</view>
		</view>
		<view style="display: flex;align-items: center;justify-content: center;">
			<view class="loadingbtn"><image src="../../../static/img/loading.gif" style="width:240upx;height: 240upx;margin: -84upx;" mode="aspectFit"></image></view>
			<view >{{loading}}</view>
		</view>
		
	</view>
</template>
<script>
	//高德SDK
	import amap from '@/common/SDK/amap-wx.js';
	import datalist from '@/static/json/category.json';
	import uniCollapse from '@/components/uni-collapse/uni-collapse.vue'
	import uniCollapseItem from '@/components/uni-collapse-item/uni-collapse-item.vue'
	export default {
		components: {
			uniCollapse,
			uniCollapseItem
		},
		data() {
			return {
				loading:"往上拉加载更多",
				showCategoryIndex:null,
				showcate:null,
				showbox:false,
				headerPosition:"fixed",
				city:"北京",
				//分类列表
				categoryList:[],
				InfoList:["","","","","","","","","","","","","","","",""],
				cateIndex:-1,
				priceIndex:null,
				low:'',
				high:'',
				paixuIndex:0,
				priceGroup:[
					{low:100,high:1000},
					{low:1000,high:3000},
					{low:3000,high:5000},
					{low:5000,high:10000},
					{low:10000,high:""},
					],
				paixuGroup:[
					{id:0,paixu:'综合排序'},
					{id:1,paixu:'最新发布'},
					{id:2,paixu:'价格从高到低'},
					{id:3,paixu:'价格从低到高'},
					],
				form:{
					page:"1",
					cateID:'',
					low:'',
					hight:'',
					paixuID:0,
				}
			}
		},
		onPageScroll(e){
			//兼容iOS端下拉时顶部漂移
			if(e.scrollTop>=0){
				this.headerPosition = "fixed";
			}else{
				this.headerPosition = "absolute";
			}
		},
		onPullDownRefresh(){
			this.form.page++;
			this.shuju();
			
		},
		onReachBottom(){
			this.loading="加载中...";
			this.form.page++;
			this.shuju();
			// setTimeout(()=>{
			// 	for(var i=0;i<10;i++){
			// 		this.InfoList.push("")
			// 	}
			// 	this.loading="往上拉加载更多";
			// },1000)
			
		},
		onLoad() {
			var lang=uni.getStorageSync("lang");
			this.categoryList=datalist[lang].data;
			
		},
		onNavigationBarButtonTap(e){
			uni.navigateTo({
				url:"../../search/search"
			})
		},
		methods: {
			//分类确认
			cateAffirm(){
				var e=this.showCategoryIndex
				var i=this.showcate;
				if(i>0){
					this.form.cateID=this.categoryList[e].children_task[i].id;
				}else if(e>0){
					this.form.cateID=this.categoryList[e].id;
				}else{
					this.form.cateID="";
				}
				this.form.page=1;
				this.showbox=false;
				this.cateIndex=-1;
				this.shuju();
			},
			// 价格确认
			priceAffirm(){
				this.form.low=this.low;
				this.form.hight=this.high;
				this.form.page=1;
				this.showbox=false;
				this.cateIndex=-1;
				this.shuju();
			},
			shuju(e){
				this.$http("",this.form,"post",false).then(res=>{
					uni.stopPullDownRefresh();
				})
			},
			openbox(e){
				if(this.cateIndex==e){
					this.showbox=false;
					this.cateIndex=-1
				}else{
					this.showbox=true;
					this.cateIndex=e;
				}
			},
			selectpaixu(e){
				this.form.page=1;
				this.paixuIndex=e;
				this.form.paixuID=this.paixuGroup[e].id;
				this.shuju();
				this.cateIndex=-1
				this.showbox=false;
			},
			selectprice(e){
				this.priceIndex=e;
				if(e==-1){
					this.low='';
					this.high='';
				}else{
					this.low=this.priceGroup[e].low;
					this.high=this.priceGroup[e].high;
				}
				
			},
			//消息列表
			toMsg(){
				uni.navigateTo({
					url:'../../msg/msg'
				})
			},
			//点击一级分类
			showCategory(index){
				console.log(index)
				this.showCategoryIndex = index;
			},
			// 选择二级分类
			toCategory(e){
				this.showcate=e
				// uni.setStorageSync('catName',e.name);
				// uni.navigateTo({
				// 	url: '../../goods/goods-list/goods-list?cid='+e.id+'&name='+e.name
				// });
			},
			//搜索跳转
			toSearch(){
				uni.navigateTo({
					url:'../../search/search'
				})
				uni.showToast({title: "建议跳转到新页面做搜索功能"});
			},
		}
	}
</script>
<style lang="scss">
	
	.selectcolor{color: #e84148;}
	.du{transform:rotate(180deg);}
	.loadingbtn{width: 80upx;height: 80upx;overflow: hidden;margin:20upx ;}
	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
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
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
		
		.addr{
			width: 120upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			align-items: center;
			font-size: 28upx;
			.icon{
				height: 60upx; 
				margin-right: 5upx;
				display: flex;
				align-items: center;
				font-size: 42upx;
				color: #ffc50a;
			}
		}
		.input-box{
			width: 100%;
			height: 60upx;
			background-color: #f5f5f5;
			border-radius: 10upx;
			position: relative;
			display: flex;
			align-items: center;
			.icon{
				display: flex;
				align-items: center;
				position: absolute;
				top:0;
				right: 0;
				width: 60upx;
				height: 60upx;
				font-size: 34upx;
				color: #c0c0c0;
			}
			input{
				padding-left: 28upx;
				height: 28upx;
				font-size: 28upx;
			}
		}
		.icon-btn{
			width: 60upx;
			height: 60upx;
			flex-shrink: 0;
			display: flex;
			.icon{
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
		
		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	.category-list{
		width: 100%;
		background-color: #fff;
		display: flex;
		.left,.right{
			position: absolute;
			
			top: 100upx;
			/*  #ifdef  APP-PLUS  */
			top: calc(100upx + var(--status-bar-height));
			/*  #endif  */
			bottom: 0upx;
		}
		.left{
			width: 24%;
			left: 0upx;
			background-color: #f2f2f2;
			.row{
				width: 100%;
				height: 90upx;
				display: flex;
				align-items: center;
				.text{
					width: 100%;
					position: relative;
					font-size: 28upx;
					display: flex;
					justify-content: center;
					color: #3c3c3c;
					.block{
						position: absolute;
						width: 0upx;
						left: 0;
					}
				}
				&.on{
					height: 100upx;
					background-color: #fff;
					.text{
						font-size: 30upx;
						font-weight: 600;
						color: #2d2d2d;
						.block{
							width: 10upx;
							height: 80%;
							top: 10%;
							background-color: #e84148;
						}
					}
				}
			}
		}
		.right{
		   width: 76%;
			left: 24%;
			.category{
				width: 94%;
				padding: 20upx 3%;
				.banner{
					width: 100%;
					height: 24.262vw;
					border-radius: 10upx;
					overflow: hidden;
					box-shadow: 0upx 5upx 20upx rgba(0,0,0,0.3);
					image{
						width: 100%;
						height: 24.262vw;
					}
				}
				.list{
					margin-top: 40upx;
					width: 100%;
					display: flex;
					flex-wrap: wrap;
					.box{
						width: calc(71.44vw / 3);
						margin-bottom: 30upx;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-wrap: wrap;
						image{
							width: 60%;
							height: calc(71.44vw / 3 * 0.6);
						}
						.text{
							margin-top: 5upx;
							width: 100%;
							display: flex;
							justify-content: center;
							font-size: 26upx;
						}
					}
				}
			}
		}
	}
	.menu_nav{
		display: flex;
		background: #fff;
		line-height: 80upx;
		height: 80upx;
		align-items: center;
		z-index: 1;
		border-bottom: 2px solid #eee;
		position: fixed;
		top:104upx;
		width: 100%;
		.row-item{
			flex: 1;
			display: flex;
			justify-content: center;
			text-align: center;
		}
	}
	.showBox{
		width: 100%;
		position: fixed;
		top:182upx;
		z-index: 999;
		height: auto;
		.Boxmenu{
			width: 100%;
			position: fixed;
			top:182upx;
			max-height: 50vh;
			overflow: hidden;
			background: #fff;
			.onemenu{
				height: 40vh;
				flex: 1;
				overflow-y: scroll;
				.row{
					margin:0 20upx;
					padding: 20upx 0;
					border-bottom: 1px solid #eee;
				}
			}
			.footer-box{
				display: flex;
				text-align: center;
				justify-content: space-around;
				padding: 20upx 0;
				.left-btn{
					width: 40%;
					padding: 10upx 0;
					background: #F8F8F8;
					color: #e84148;
				}
				.right-btn{
					width: 40%;
					padding: 10upx 0;
					color: #fff;
					background: #e84148;
				}
				.left{
					display: flex;
					flex:0.8;
					align-items: center;
					input{
						width: 25%;
						font-size: 28upx;
						background: #f4f4f4;
						padding: 10upx 0;
						margin: 0 5upx;
					}
				}
				.right-qued{
					padding: 5upx 20upx;
					background: #eee;
					color: #fff;
					border-radius: 10upx;
				}
			}
		}
		.yinying{
			width: 100%;
			height: 100vh;
			background: rgba(0,0,0,0.4);
		}
	}
	.recommend_2+.recommend_2{border-bottom: 2rpx solid #eee;}
	.recommend_2{display:flex;align-items: flex-start;padding: 15rpx;background: #fff;border-radius: 20upx;margin:2% auto;width: 94%;}
	.recommend_img{width: 205upx;height: 135upx;margin-right: 18upx;border-radius: 15upx;}
	.recommend_2_name{font-size: 26rpx;display: flex;height: 135upx;flex-wrap: wrap;width: 65%;}
	.recommend_2_name .title{
		width: 100%;
		overflow: hidden;
		text-overflow:ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		word-break:break-all;
		-webkit-line-clamp: 2;
	}
</style>
