<template>
	<view class="check">
		
		<form @submit="formSubmit" @reset="formReset" v-if="showStatus!=0">
		<view class="check_list">
			
			<view class="list_box">
				<view class="title">真实名字</view>
				<view class="right">
					<input type="text" placeholder="请输入真实名字" v-model="realname" :disabled="showStatus==1"/>
					<view class="icon "></view>
				</view>
			</view>
			<view class="list_box">
				<view class="title">认证类型</view>
				<view class="right">
					个人
					<view class="icon "></view>
				</view>
			</view>
			<view class="list_box">
				<view class="title">身份证号码</view>
				<view class="right">
					<input type="text" value="" placeholder="请输入身份证号码" v-model="card_number" :disabled="showStatus==1"/>
					<view class="icon "></view>
				</view>
			</view>
			<view class="uploadText" @click="chooseImage(0)"  v-if="!Assurface">身份证人像面</view>
			<view class="uploadImg" @click="chooseImage(0)" v-else>
				<image :src="Assurface" mode="aspectFit"></image>
			</view> 
			<view class="uploadText" @click="chooseImage(1)"  v-if="!national">身份证国徽面</view>
			<view class="uploadImg" @click="chooseImage(1)" v-else>
				<image :src="national" mode="aspectFit"></image>
			</view> 
			<view class="uploadText" @click="chooseImage(2)"  v-if="!handAssurface">手持证件照人像面</view>
			<view class="uploadImg" @click="chooseImage(2)" v-else>
				<image :src="handAssurface" mode="aspectFit"></image>
			</view> 
			</view>
			<button @click="formSubmit" v-if="showStatus!=1">提交</button>
		</form>
		<view class="showdai" v-if="showStatus==0">等待审核...</view>
		<image src="../../../static/img/renzheng.png" class="renzheng" mode="" v-if="showStatus==1"></image>
		<choose-image ref="child" :langth="1" @imgList="imgway"></choose-image>
	</view>
</template>

<script>
	import json from "../../../static/json/nation.json"
	import chooseImage from "../../../components/chooseImage.vue"
	export default{
		components:{
			chooseImage
		},
		data(){
			return{
				uploadImg:[],
				listimg:[],
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				showHeader:true,
				index:"0",
				license:'',
				Assurface:'',
				national:'',
				handAssurface:'',
				nationArray:[],
				date:"",
				indate:'请选择',
				api_token:'',
				imgID:'',
				realname:'',
				card_number:'',
				showStatus:null
			}
		},
		onLoad(){
			console.log(json)
			this.$http("/api/auth/realnameAuthInfo",{},"get").then(res=>{
				
					this.showStatus=res.data.data.status;
				
			})
			
			uni.getStorage({
				key:"lang",
				success:res=>{
					this.nationArray=json[res.data];
					// uni.setNavigationBarTitle({
					// 	title:json[res.data].title
					// })
				}
			});
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
		},
		
		methods:{
			chooseImage(e){
				if(this.showStatus==1)return false
				this.imgID=e
				this.$refs.child.animationShow()
			},
			
			imgway(e){
				uni.hideLoading()
				if(this.imgID==0){
					this.Assurface = this.baseUrl+'/'+e.uploadImg[0].url.replace(/\\/g,"/")
				}
				if(this.imgID==1){
					this.national = this.baseUrl+'/'+e.uploadImg[0].url.replace(/\\/g,"/")
				}
				if(this.imgID==2){
					this.handAssurface = this.baseUrl+'/'+e.uploadImg[0].url.replace(/\\/g,"/")
				}
			},
			exit(){
				uni.navigateBack({
					delta: 1
				});
			},
		
			formSubmit(e){
				this.$http("/api/auth/realnameAuth",
				{
					//姓名
					realname:this.realname,
					//身份证号码
					card_number:this.card_number,
					//正面 文件url
					card_front_side:this.Assurface,
					//反面 文件url
					card_back_dside:this.national,
					//认证类型1个人
					type:1,
					//手持 文件url
					validation_img:this.handAssurface
				}).then(res=>{
					if(res.data.code==1000){
						uni.showToast({
							title:"提交成功！",
							icon:"success",
							duration:2000
						})
						setTimeout(function(){
							uni.navigateBack({
								delta:1
							})
						},2000)
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #F4F4F4;
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
	.header{
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		color: #fff;
		top: 0;
		z-index: 10;
		background-color: #e84148;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
	}
	.header button{
		margin: 10upx 20upx;
	}
	.place{
		background-color: #ffffff;
		height: 40upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}
	input{text-align: right;font-size: 30upx;}
	.check_list{width: 100%;background: #ffffff;}
	.list_box{
		display: flex;
		padding: 20upx 0;
		justify-content: space-between;
		align-items: center;
		line-height: 80upx;
		width: 96%;
		margin: auto;
		border-bottom: 1px solid #cecece;
		background: #ffffff;
		.title{
			color: #999;
			font-size: 30upx;
		}
		.right{
			display: flex;
			align-items: center;
			color:#333;
		}
		
	}
	.icon{
		width: 40upx;
		font-size: 35upx;
		color: #cecece;
		margin-left: 10upx;
	}
	.uploadText{
		width: 94%;
		margin: 10upx auto;
		height: 350upx;
		line-height: 350upx;
		border-radius: 5px;
		font-size: 38upx;
		text-align: center;
		color: #999;
		border: 4upx dashed  #999;
		padding: 5upx;
		// align-items: center;
		// display: flex;
		// justify-content: center;
	}
	.uploadImg{
		width: 94%;
		margin: 10upx auto;
		height: 350upx;
		line-height: 350upx;
		margin: 10upx;
		image{
			width: 100%;
			height: 100%;
		}
	}
	button{
		background: #e84148;
		margin: 3%;
		color: #fff;
	}
	.showdai{
		width: 100%;
		height: 92vh;
		z-index: 1000;
		line-height: 92vh;
		color: #e84148;
		background: #fff;
		font-size: 40upx;
		text-align: center;
		position: absolute;
		top:0;
	}
	.renzheng{
		width: 240upx;
		height: 240upx;
		position: fixed;
		bottom: 0;
		right: 20upx;
	}
</style>
