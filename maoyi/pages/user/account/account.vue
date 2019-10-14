<template>
	<view>
		<view class="content">
			<view class="titleType">{{details.titleType1}}</view>
			<view class="list">
				
				
				<view class="row" @click="toPage('./password/password')">
					<view class="title">{{details.ChangePassword}}</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				
				
			</view>
			
			<view class="titleType">{{details.titleType2}}</view>
			<view class="list">
					<view class="row" @click="toPage('./phone/phone')">
						<view class="title">{{details.phoneAuthentication}}</view>
						<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
					</view>
					<view class="row" @click="toPage('../realName/realName')">
						<view class="title">{{details.RealNameAuthentication}}</view>
						<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
					</view>
					<view class="row" @click="toPage('./mail/mail')">
						<view class="title">{{details.MailAuthentication}}</view>
						<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
					</view>
			</view>
			<!-- <view class="titleType">{{details.titleType3}}</view>
			<view class="list">
					<view class="row" @click="toBinding('qq')">
						<view class="title">{{details.qqBinding}}</view>
						<view class="right"><view class="tis">{{details.NotBound}}</view><view class="icon "></view></view>
					</view>
					<view class="row" @click="toBinding('weixin')">
						<view class="title">{{details.wxBinding}}</view>
						<view class="right"><view class="tis">{{details.NotBound}}</view><view class="icon "></view></view>
					</view>
					
			</view> -->
		</view>
	</view>
</template>

<script>
	import JSON from "../../../static/json/account.json"
	export default {
		data() {
			return {
				user:'',
				details:{},
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
			uni.getProvider({
				service: 'oauth',
				success: (result) => {
					console.log(result)
					this.providerList = result.provider.map((value) => {
						let providerName = '';
						console.log(value) ;
						switch (value) {
							case 'weixin':
								providerName = '微信登录'
								break;
							case 'qq':
								providerName = 'QQ登录'
								break;
							case 'sinaweibo':
								providerName = '新浪微博登录'
								break;
							case 'xiaomi':
								providerName = '小米登录'
								break;
							case 'alipay':
								providerName = '支付宝登录'
								break;
							case 'baidu':
								providerName = '百度登录'
								break;
							case 'toutiao':
								providerName = '头条登录'
								break;
						}
						return {
							name: providerName,
							id: value
						}
					});
			
				},
				fail: (error) => {
					console.log('获取登录通道失败', error);
				}
			});
	
		},
		onShow() {
			
		},
		methods: {
			showType(tbIndex){
				this.tabbarIndex = tbIndex;
				this.list = this.orderList[tbIndex];
			},
			toPage(url){
				if(!url){
					uni.showToast({title: '模板未包含此页面',icon:"none"});return;
				}
				uni.navigateTo({
					url:url
				})
			},
			toBinding(type){
				uni.login({
				  provider: type,
				  success: function (loginRes) {
					console.log(loginRes.authResult);
				  }
				});
			},
			chooseImage(){
				uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album','camera'], //从相册选择
				success: function (res) {
					console.log(JSON.stringify(res.tempFilePaths));
				}
			});
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
			margin: 20upx auto;
			color: #999;
			font-size: 25upx;
		}
		.list{
			width: 96%;
			padding-left: 4%;
			background-color: #fff;
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
