<template>
	<view>
		<view class="shopType">
			<view class="row" v-for="item in list" @click="toPage(item.url)">
				<view class="row-img">
					<image :src="item.src"></image>
				</view>
				<view class="row-name">{{item.name}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:[
					{
						name:"我的店铺",
						src:"../../../static/img/shopType/dianpu.png",
						url:"../shop"
					},
					{
						name:"店铺信息",
						src:"../../../static/img/shopType/shopInfo.png",
						url:'../shopInfo/shopInfo'
					},
					{
						name:"店铺装修",
						src:"../../../static/img/shopType/zhuangx.png",
						url:"../Decoration/Decoration"
					},
					{
						name:"添加产品",
						src:"../../../static/img/shopType/shopadd.png",
						url:"../../product/addProduct/addProduct"
					},
					{
						name:"店铺照片",
						src:"../../../static/img/shopType/shopimg.png",
						url:"../../shop/shopPicture/shopPicture"
					},
					// {
					// 	name:"发布竞标",
					// 	src:"../../../static/img/tabBar/user.png",
					// },
					// {name:"我的店铺"},
					// {name:"我的店铺"},
					// {name:"我的店铺"},
					// {name:"我的店铺"},
					]
			}
			
		},
		onLoad(){
			this.$http("/api/user/againStatus",{},"get").then(res=>{
				
			})
		},
		methods:{
			toPage(url,id){
				if(!url){
					uni.showToast({title: '模板未包含此页面',icon:"none"});return;
				}
				if(id==6){
					uni.getStorage({
						key:"userInfo",
						success:res=>{
							if(res.data.shopId){
								uni.navigateTo({
									url: '../../shop/shop'
								});
							}else{
								uni.navigateTo({
									url:url
								})
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
	page{
		background: #f4f4f4;
	}
	image{
		height: 100%;
	}
	.shopType{
		display: flex;
		flex-wrap: wrap;
		.row{
			width: 33.33%;
			text-align: center;
			margin: 40upx 0;
			.row-img{
				width: 120upx;
				height: 120upx;
				padding: 10upx;
				border-radius: 50%;
				margin: 10upx auto;
				background: #e84148;
			}
			.row-name{
				font-size: 30upx;
			}
		}
	}
</style>
