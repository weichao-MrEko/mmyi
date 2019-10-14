<template>
	<view>
		<view class="content">
			<view class="list">
				<view class="row" @click="chooseImage">
					<view class="title">{{details.head}}</view>
					<view class="right"><view class="tis">
					<image :src="userData.avatar" mode=" aspectFit"></image>
					</view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row" @click="toPage('../myname/myname',userData.nickname)">
					<view class="title">{{details.nickname}}</view>
					<view class="right"><view class="tis">{{userData.nickname}}</view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row" @click="toPage('../signature/signature',userData.sign)">
					<view class="title">{{details.signature}}</view>
					<view class="right"><view class="tis">{{userData.sign}}</view><view class="icon xiangyou"></view></view>
				</view>
				<!-- <view class="row">
					<view class="title">收货地址</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view> -->
				<!-- <view class="row" @click="toPage('../security/security')">
					<view class="title">{{details.security}}</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view> -->
			</view>
			<view class="titleType">{{details.titleType}}</view>
			<view class="list">
					<view class="row" @click="toPage('./phone/phone',userData.mobile)">
						<view class="title">{{details.phone}}</view>
						<view class="right"><view class="tis">{{userData.mobile}}</view><view class="icon xiangyou"></view></view>
					</view>
					<!-- <view class="row" @click="toPage('../security/security')">
						<view class="title">{{details.WechatID}}</view>
						<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
					</view>
					<view class="row" @click="toPage('../security/security')">
						<view class="title">{{details.qq}}</view>
						<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
					</view> -->
					<view class="row" @click="toPage('./mail/mail',userData.email)">
						<view class="title">{{details.mail}}</view>
						<view class="right"><view class="tis">{{userData.email}}</view><view class="icon xiangyou"></view></view>
					</view>
			</view>
			</view>
			<choose-image ref="child" :langth="1" @imgList="imgway"></choose-image>
			
			</view>
			
	</view>
</template>

<script>
	import JSON from "../../../static/json/personal.json"
	import chooseImage from "../../../components/chooseImage.vue"
	export default {
		components:{
			chooseImage
		},
		data() {
			return {
				user:'',
				details:{},
				imgList:[],
				userData:'',
				api_token:'',
				uploadImg:[],
				listimg:[]
			};
		},
		onLoad(){
			uni.getStorage({
				key:'lang',
				success:res=>{
					this.details=JSON[res.data]
					uni.setNavigationBarTitle({
						title:JSON[res.data].title
					})
				}
			})
			uni.getStorage({
				key:"token",
				success:res=>{
					this.api_token=res.data
				}
			})
			
	
		},
		onShow() {
			uni.getStorage({
				key:"userInfo",
				success:res=>{
					this.userData=res.data
				}
			})
			
		},
		methods:{
			chooseImage(){
				this.$refs.child.animationShow()
			},
			richList(e){
				this.richInfo=e
			},
			imgway(e){
				uni.hideLoading();
				this.listimg=e.imgList
				this.uploadImg=e.uploadImg
				console.log(e)
				this.$http("/api/user/updateUserInfo",{avatar:e.uploadImg.url.replace(/\\/g,"/")},"post",false).then(res=>{
					if(res.data.code==1000){
						this.userData.avatar=res.data.data.avatar
						uni.setStorage({
							key:"userInfo",
							data:this.userData
						})
					}
					
				})
			},
			toPage(url,data){
				if(!url){
					uni.showToast({title: '模板未包含此页面',icon:"none"});return;
				}
				uni.navigateTo({
					url:url+"?data="+data
				})
			},
		}
	}
</script>

<style lang="scss">
	page{
		background-color: #f3f3f3;	
	}
	
	.icon {
		font-size: 30upx;
	
	}
	.content{
		padding-bottom: 20upx;
		.titleType{
			width: 94%;
			margin: 0 auto 20upx auto;
			color: #999;
			font-size: 25upx;
		}
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
						width: 320upx;
						text-align: right;
						text-overflow:ellipsis;
						white-space: nowrap;
						overflow: hidden;
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
