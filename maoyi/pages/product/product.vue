<template>
	<view class="product">
		<view class="carrier" v-for="row in goodsList">
			<view class="goods-info" @tap="toGoods(row)">
				<view class="img">
					<image :src="row.img"></image>
				</view>
				<view class="info">
					<view class="title">{{row.name}}</view>
					<view class="price-number">
						<view class="keep-num">
							<!-- 905人收藏 -->
						</view>
						<view class="price">￥{{row.price}}</view>
						
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				goodsList:[
					{id:1,img:'/static/img/goods/p1.jpg',name:'商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题',spec:'规格:S码',price:127.5,number:1,selected:false},
					{id:2,img:'/static/img/goods/p1.jpg',name:'商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题',spec:'规格:S码',price:127.5,number:1,selected:false},
					{id:3,img:'/static/img/goods/p1.jpg',name:'商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题',spec:'规格:S码',price:127.5,number:1,selected:false},
				],
				api_token:''
			}
		},
		onNavigationBarButtonTap(e){
			console.log(e)
			uni.navigateTo({
				url:"addProduct/addProduct"
			})
		},
		onShow(){
			uni.getStorage({
				key:"token",
				success:res=>{
					//console.log(res)
					this.api_token=res.data
					var that=this;
					uni.request({
						url: 'http://192.168.101.52/api/user/workList', 
						data: {
							api_token: that.api_token
						},
						success: function(res) {
							console.log(res);
						},
					});
				},
				fail:function(e){
				}
			})
		},
	}
</script>

<style lang="scss">
	.carrier{
		@keyframes showMenu {
			0% {transform: translateX(0);}100% {transform: translateX(-28%);}
		}
		@keyframes closeMenu {
			0% {transform: translateX(-28%);}100% {transform: translateX(0);}
		}
		&.open{
			animation: showMenu 0.25s linear both;
		}
		&.close{
			animation: closeMenu 0.15s linear both;
		}
		background-color: #fff;
		
		// position: absolute;
		width: 100%;
		padding: 0 0;
		height: 100%;
		z-index: 3;
		flex-wrap: nowrap;
		.goods-info{
			width: calc(100% - 40upx);
			padding: 20upx;
			display: flex;
			flex-wrap: nowrap;
			.img{
				width: calc(30vw - 40upx);
				height: calc(30vw - 40upx);
				border-radius: 10upx;
				overflow: hidden;
				flex-shrink: 0;
				margin-right: 20upx;
				image{
					width: calc(30vw - 40upx);
					height: calc(30vw - 40upx);
				}
			}
			.info{
				width: 100%;
				height: calc(30vw - 40upx);
				overflow: hidden;
				flex-wrap: wrap;
				align-content: space-between;
				position: relative;
				.title{
					width: 100%;
					font-size: 28upx;
					display: -webkit-box;
					-webkit-box-orient: vertical;
					-webkit-line-clamp: 2;
					overflow: hidden;
				}
				
				.price-number{
					width: 100%;
					justify-content: space-between;
					align-items: baseline;
					
					.keep-num{
						font-size: 26upx;
						color: #999;
					}
					.price{
						font-size: 30upx;
						color: #e84148;
					}
				}
			}
		}
	}
</style>
