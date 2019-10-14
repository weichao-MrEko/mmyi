<template>
	<view>
		<view class="content">
			
		<!-- 	<view class="list">
				<view class="row">
					<view class="title">通知提醒</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
			<!-- 	<view class="row">
					<view class="title">支付设置</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view> 
				<view class="row">
					<view class="title">通用</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
			</view> -->
			<view class="list">
				<view class="row">
					<view class="title">{{details.versions}}</view>
					<view class="right"><view class="tis">v1.0.0</view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row"  @click="toPage('../language/language')">
					<view class="title">{{details.selectLanguage}}</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row" @click="clear">
					<view class="title">{{details.clearCache}}</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">{{details.feedback}}</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				<view class="row">
					<view class="title">{{details.AboutUs}}</view>
					<view class="right"><view class="tis"></view><view class="icon xiangyou"></view></view>
				</view>
				
			</view>
			<button type="" @click="exit">{{details.exit}}</button>
		</view>
	</view>
</template>

<script>
	import JSON from "../../../static/json/setting.json"
	import {mapState, mapMutations} from 'vuex';
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
			
	
		},
		onShow() {
			console.log(JSON.zh)
			
			uni.getStorage({
				key:"userInfo",
				success:res=>{
					console.log(res)
					this.user=res.data;
					// this.user.username='游客1002';
					this.user.face='/static/img/face.jpg';
					this.user.signature='点击昵称跳转登录/注册页';
					this.user.integral=500;
					this.user.balance=500;
					this.user.envelope=500;
				}
			})
		},
		methods: {
			...mapMutations(['logout']),
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
			clear(){
				uni.showModal({
					// title: "弹窗标题",
					content: "确定要清除缓存吗？",
					// showCancel: false,
					confirmText: "确定",
					cancelText: "取消",
					success:function(res){
						if(res.confirm){
							// 确定
							uni.removeStorageSync('lang');
						}
						if(res.cancel){
							
						}
					}
				})
			}, 
			exit(){
				this.$http("/api/user/loginOut",'get',false)
				this.logout()
				uni.reLaunch({
					url: '../../login/login'
				});
			}
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
	.list{
		width: 96%;
		padding-left: 4%;
		background-color: #fff;
		margin-bottom: 20upx;
		.row{
			widows: 100%;
			min-height: 100upx;
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
