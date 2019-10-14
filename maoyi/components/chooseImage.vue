<template>
	<view style="overflow: hidden;">
		<view class="yiny" v-if="showAction" @click="animationHide"></view>
		<view class="showActionSheet" :animation="animationData" v-if="showAction">
			<view class="item" @click="photo">相册</view>
			<view class="item" @click="shoot">拍照</view>
			<!-- <view class="item" @click="animationHide">取消</view> -->
		</view>
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				animationData:{},
				uploadImg:[],
				listimg:[],
				showAction:false,
				api_token:'',
				
			}
		},
		onReady() {
			console.log(1)
		},
		props:['langth'],
		// {
		// 	imgList: {
		// 		type: Array,
		// 		default: () => {
		// 			return []
		// 		}
		// 	},
		// 	langth: {
		// 		type: Number,
		// 		default: () => {
		// 			return 
		// 		}
		// 	},
		// 	api_token:{
		// 		type:String,
		// 		default: () => {
		// 			return 
		// 		}
		// 	}
		// },
		methods:{
			photo(){
				var that=this
				this.uploadImg=[],
				this.listimg=[],
				uni.getStorage({
					key:"token",
					success:res=>{
						this.api_token=res.data
					}
				})
				uni.chooseImage({
					count: this.langth-this.listimg.length,
					sizeType: ['original','compressed'],
					sourceType: ['album'],
					success:  res=> {
						uni.showLoading({
						  title: '上传中'
						})
						let length=res.tempFilePaths.length;
						console.log(res)
						for(var i=0;i<res.tempFilePaths.length;i++){
							this.listimg.push(res.tempFilePaths[i])
							console.log(res.tempFilePaths[i])
							uni.uploadFile({
								   url: 'http://192.168.101.52/api/user/newfile', //仅为示例，非真实的接口地址
								   filePath: res.tempFilePaths[i],
								   name: 'file',
								   header:{
								        Accept: 'application/json'
								   },
								   formData:{
										"api_token":this.api_token
								   },
								   success: (uploadFileRes) => {
									   length++;
									   var res=JSON.parse(uploadFileRes.data);
									   this.uploadImg.push(res.id)
									   if(i==length-1){
										   this.$emit('imgList',{imgList:this.listimg,uploadImg:res.message})
									   }
								   }
							   });
						}
						this.showAction=false
					},
					fail:res=>{
						console.log('2')
						
					},
					complete:res=>{
						console.log('3')
						// uni.hideLoading()
						
					}
				});
			},
			shoot(){
				
				var that=this
				this.uploadImg=[],
				this.listimg=[],
				uni.getStorage({
					key:"token",
					success:res=>{
						this.api_token=res.data
					}
				})
				uni.chooseImage({
					count: this.langth-this.listimg.length,
					sizeType: ['original','compressed'],
					sourceType: ['camera'],
					success:  res=> {
						uni.showLoading({
						  title: '上传中'
						})
						let length=res.tempFilePaths.length;
						
						for(var i=0;i<res.tempFilePaths.length;i++){
							this.listimg.push(res.tempFilePaths[i])
							
							uni.uploadFile({
							           url: 'http://192.168.101.52/api/user/newfile', //仅为示例，非真实的接口地址
							           filePath: res.tempFilePaths[i],
							           name: 'file',
							           header:{
							                Accept: 'application/json'
							           },
							           formData:{
							           		"api_token":this.api_token
							           },
							           success: (uploadFileRes) => {
										   length++;
										   var res=JSON.parse(uploadFileRes.data);
										   this.uploadImg.push(res.id)
										   if(i==length-1){
											   this.$emit('imgList',{imgList:this.listimg,uploadImg:res.message.me_url})
										   }
										   
							           }
							       });
						}
						
						
						this.showAction=false
					}
				});
			},
			animationShow(){
				this.showAction=true
				var animation = uni.createAnimation({
					  duration: 500,
						timingFunction: 'ease',
					})
				this.animation = animation
				animation.scale(0,0).step()
				this.animationData = animation.export()
			
				setTimeout(function() {
				  animation.scale(1,1).step()
				  this.animationData = animation.export()
				}.bind(this), 100)
			},
			animationHide(){
				var that=this;
				var animation = uni.createAnimation({
					  duration: 300,
						timingFunction: 'ease',
					})
				this.animation = animation
				animation.scale(1,1).step()
				this.animationData = animation.export()
				animation.scale(0,0).step()
				this.animationData = animation.export()
				setTimeout(function() {
				  that.showAction=false;
				}.bind(this), 300)
			},
		}
	}
</script>

<style lang="scss">
	.yiny{
		position: fixed;
		z-index: 999;
		top: 0;
		// right: 0;
		left: 0;
		// bottom: 0;
		background: rgba(0,0,0,.6);
		height: 100vh;
		width: 100%;
	}
	.showActionSheet{
		width: 80%;
		z-index: 999;
		overflow: hidden;
		border-radius:10upx ;
		position: fixed;
		bottom: 40%;
		left:10%;
		.item{
			width: 100%;
			height: 100upx;
			line-height: 100upx;
			border-bottom:1px solid #eee;
			text-align: center;
			background: #fff;
		}
	}
</style>
