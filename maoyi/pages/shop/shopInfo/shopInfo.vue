<template>
	<view>
		<view class="info_box">
			<view class="item">
				<view class="left">商铺Logo</view>
				<view class="right">
					<view class="item-img" @click="chooseImage">
						<image :src="logo" v-if="logo"></image>
						<image src="../../../static/img/log.png" v-else></image>
						
					</view>
					<view class="icon xiangyou"></view>
				</view>
			</view>
			<view class="item">
				<input type="text" placeholder="店铺名称" style="width: 100%;font-size: 30upx;" v-model="shop_name">
			</view>
			<view class="item">
				<textarea placeholder="店铺简介" style="font-size: 30upx;" v-model="shop_desc" :maxlength="-1"></textarea>
			</view>
		</view>
		<ul>
			<li>商铺名称不得与已开通的商铺名称重复</li>
			<li>商铺名称不得使用App名称作为商铺名称的一部分</li>
			<li>商铺名称中不得包含电话，电子邮件，即时通讯工具或其他联系信息。</li>
		</ul>
		<choose-image ref="child" :langth="1" @imgList="imgway"></choose-image>
	</view>
</template>

<script>
	import chooseImage from "../../../components/chooseImage.vue"
	export default {
		components:{
			chooseImage
		},
		data() {
			return {
				logo:'',
				shop_name:'',
				shop_desc:''
			}
		},
		onLoad() {
			
		},
		onNavigationBarButtonTap(e){
			this.$http("/api/user/postShopInfo",{
				shop_pic:this.logo,
				shop_name:this.shop_name,
				shop_desc:this.shop_desc
			})
		},
		methods: {
			chooseImage(){
				this.$refs.child.animationShow()
			},
			imgway(e){
				uni.hideLoading()
				this.logo=this.baseUrl+"/"+e.uploadImg[0].url.replace(/\\/g,"/");
				
			},
			
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
	.info_box{
		background: #FFFFFF;
		.item+.item{border-top:1px solid #eee;}
		.item{
			width: 96%;
			margin: auto;
			display: flex;
			padding: 20upx 0;
			align-items: center;
			justify-content: space-between;
			.left{font-size: 30upx;}
			.right{
				display: flex;
				align-items: center;
				.item-img{
					width: 80upx;
					height: 80upx;
					border-radius: 50%;
					overflow: hidden;
					margin-right: 10upx;
				}
				.icon{
					font-size: 30upx;
					color: #999;
				}
			}
		}
	}
	ul{
		color: #666;
		margin-top:60upx;
		list-style-type:disc;
		list-style: 10px;
		padding: 0 20px 0 30px;
	}
</style>
