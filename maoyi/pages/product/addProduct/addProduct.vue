<template>
	<view class="add">
		<view class="add_img">
			<view class="img_box" v-if="imgList.length==0" @click="aShow()">
				<image src="/static/img/issue/picture.png" mode=""></image>
			</view>
			<swiper class="swiper" :indicator-dots="true" :autoplay="false" :current="imgIndex" :interval="3000" :duration="1000" @change="swiperChange" v-else>
				<swiper-item v-for="row in imgList">
					<view class="swiper-item"><image :src="row" mode="aspectFit"></image></view>
				</swiper-item>
			</swiper>
			<view class="picture" @click="aShow()" v-if="imgList.length>0">
				<image src="/static/img/issue/picture.png" mode=""></image>
			</view>
			<view class="icon shanchu" v-if="imgList.length>0" @click="delImg">
			</view>
		</view>
		<view class="row-box">
			<view class="row-item">
				<input type="text" placeholder="产品标题" value="" />
			</view>
			<view class="row-item">
				<view class="row-title">
					产品类型
				</view>
				<view class="row-right">
					<text>123345</text>
					<text class="icon xiangyou"></text>
				</view>
			</view>
			<view class="row-item">
				<view class="row-title">
					金额类型
				</view>
				<view class="row-right">
					<text>123345</text>
					<text class="icon xiangyou"></text>
				</view>
			</view>
			<view class="row-item">
				<view class="row-title">
					产品金额
				</view>
				<view class="row-right">
					<input type="number" placeholder="≥$1" value="" />
				</view>
			</view>
			<view class="row-item">
				<view class="row-title">
					联系方式
				</view>
				<view class="row-right">
					 <radio-group @change="radioChange" style="display: flex;">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
							<view>
								<radio :value="item.value"  color="#e84148"/>
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>
				<view class="input-lx" v-if="radioIndex==0">
					<input type="number" value="" placeholder="请输入电话"/>
				</view>
				<view class="input-lx" v-if="radioIndex==1">
					<input type="number" value="" placeholder="请输入微信"/>
				</view>
				<view class="input-lx" v-if="radioIndex==2">
					<input type="number" value="" placeholder="请输入邮箱"/>
				</view>
			</view>
			<view class="row-item">
				<view class="">
					商品详情
				</view>
				<view style="width: 100%;">
					<uni-richtext :richList.sync="richList" :uploadUrl="uploadUrl"></uni-richtext>
				</view>
			</view>
		</view>
		<view class="button">
			<button type="primary">添加产品</button>
		</view>
		<choose-image ref="child" :imgList="imgList" :langth="5"></choose-image>
		<!-- <view class="yiny" v-if="showAction" @click="animationHide"></view>
		<view class="showActionSheet" :animation="animationData" v-if="showAction">
			<view class="item" @click="photo">相册</view>
			<view class="item" @click="shoot">拍照</view>
			<view class="item" @click="animationHide">取消</view>
		</view> -->
	</view>
</template>



<script>
import uniRichtext from '../../../components/uni-richtext.vue';
import chooseImage from '../../../components/chooseImage.vue';
	export default{
		components:{
			uniRichtext,chooseImage
		},
		data(){
			return {
				imgList:[],
				animationData:{},
				showAction:false,
				imgIndex:"0",
				radioIndex:null,
				items:[{value:"0",name:"电话"},{value:"1",name:"微信"},{value:"2",name:"邮箱"}],
				richList: [],
				uploadUrl:"http://120.78.87.84:8080/conduit/file/uploadFile",
				imgList:[]
			}
		},
		watch:{
			richList:function (newValue,oldValue) {
				console.log(newValue)
			},
			imgList:function(newValue,oldValue){
				console.log(newValue)
			}
		},
		onLoad(){
		},
		methods:{
			aShow(){
				this.$refs.child.animationShow()
			},
			radioChange(e){
				this.radioIndex=e.target.value;
			},
			swiperChange(e){
				this.imgIndex=e.detail.current
			},
			delImg(){
				this.imgList.splice(this.imgIndex,1);
				if(this.imgIndex>this.imgList.length-1){
					this.imgIndex=this.imgList.length-1
				}
			},
			photo(){
				uni.chooseImage({
					count: 5-this.imgList.length,
					sizeType: ['original', 'compressed'],
					sourceType: ['album',"camera"],
					success:  res=> {
						for(var i=0;i<res.tempFilePaths.length;i++){
							this.imgList.push(res.tempFilePaths[i])
						}
						this.showAction=false
					}
				});
			},
			shoot(){
				uni.chooseImage({
					count: 5-this.imgList.length, //默认9
					sizeType: ['original','compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['camera'], //从相册选择
					success:  res=> {
						for(var i=0;i<res.tempFilePaths.length;i++){
							this.imgList.push(res.tempFilePaths[i])
						}
						this.showAction=false
					}
				});
			},
// 			animationShow(){
// 				this.showAction=true
// 				var animation = uni.createAnimation({
// 					  duration: 500,
// 						timingFunction: 'ease',
// 					})
// 				this.animation = animation
// 				animation.translateY(300).step()
// 				this.animationData = animation.export()
// 
// 				setTimeout(function() {
// 				  animation.translateY(0).step()
// 				  this.animationData = animation.export()
// 				}.bind(this), 100)
// 			},
// 			animationHide(){
// 				var that=this;
// 				var animation = uni.createAnimation({
// 					  duration: 500,
// 						timingFunction: 'ease',
// 					})
// 				this.animation = animation
// 				animation.translateY(0).step()
// 				this.animationData = animation.export()
// 				animation.translateY(300).step()
// 				this.animationData = animation.export()
// 				setTimeout(function() {
// 				  that.showAction=false;
// 				}.bind(this), 400)
// 			},
			
			
		}
	}
</script>

<style lang="scss">
	
	@import '../../../static/LevineHua-editor/markdown.css';
	@import url("../../../components/uParse/src/wxParse.css");
	image{
		width: 100%;
		height: 100%;
	}
	.button{
		width: 80%;
		margin:40upx auto;
		button{
			background-color: rgb(240, 108, 122);
		}
	}
	.add_img{
		width: 100%;
		height: 40vh;
		background: #f4f4f4;
		top: 0;
		position: relative;
		.img_box{
			width: 80upx;
			height: 80upx;
			border-radius: 50%;
			padding: 20upx;
			border: 2px #999 solid;
			position: absolute;
			margin-left: calc(50% - 80upx);
			margin-top: 25%;
		}
		.swiper{
			width: 100%;
			height: 100%;
			.swiper-item{
				width: 100%;
				height: 100%;
			}
			
		}
		.picture{
			width: 60upx;
			height: 60upx;
			position: absolute;
			bottom: 20upx;
			right: 140upx;
			z-index: 10;
		}
		.icon{
			color: #999;
			position: absolute;
			bottom: 5upx;
			right: 40upx;
			z-index: 10;
			font-size: 50upx;
		}
	}
	.yiny{
		position: fixed;
		z-index: 999;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		background: rgba(0,0,0,.6);
	}
	.showActionSheet{
		width: 100%;
		height: auto;
		z-index: 999;
		position: absolute;
		bottom: 0;
		.item{
			width: 100%;
			height: 100upx;
			line-height: 100upx;
			border-bottom:1px solid #eee;
			text-align: center;
			background: #fff;
		}
	}
	.row-box{
		width: 100%;
		height: auto;
		margin: auto;
		
		background: #ffffff;
		.row-item{
			width: 94%;
			margin: auto;
			display: flex;
			align-items: center;
			justify-content: space-between;
			flex-wrap: wrap;
			color: #999;
			padding: 3% 0;
			border-bottom: 1px solid #eee;
			input{
				height: 100%;
			}
			#editor{
				width: 100%;
				height: 120upx;
				background-color: #CCCCCC;
			}
			.row-right{
				display: flex;
				align-items: center;
				color: #000;
				.icon{
					font-size: 30upx;
				}
				input{
					text-align: right;
				}
				
			}
			.input-lx{
				width: 100%;
				height: 70upx;
				border: #999 solid 1px;
				border-radius: 5px;
				margin-top:10upx; 
				input{
					padding-left: 20upx;
					color: #000;
					font-size: 35upx;
				}
			}
		}
	}
	.uni-list-cell-pd{
		padding: 11px 5px;
	}
	.toolbar {
		width: 100%;
		border: none;
		box-shadow: 0 0upx 4upx rgba(0, 0, 0, 0.157), 0 0upx 4upx rgba(0, 0, 0, 0.227);
	}
	
	.toolbar .iconfont {
		display: inline-block;
		cursor: pointer;
		height: 61.6upx;
		width: 61.6upx;
		margin: 13upx 0 11upx 0upx;
		font-size: 33upx;
		padding: 10upx 13upx 11upx 8upx;
		color: #757575;
		border-radius: 11upx;
		text-align: center;
		background: none;
		border: none;
		outline: none;
		line-height: 2.2;
		vertical-align: middle;
	}
	.my_textarea{
		// width: 100%;
		height: 200px;
		// box-sizing: border-box;
		// outline: none;
		padding: 10px;
	}
	.my_textarea .img{
		width: 80%!important;
	}
	.toolbar .editor_submit{
		font-size: 12px;
		line-height: 35px;
	}
	
	.placeholder-tip {
		width: 100%;
		font-size: 30upx;
		color: #c7c7cd;
	}
	
	.mask {
		position: fixed;
		z-index: 998;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, .3);
	}
	
	.popup {
		position: fixed;
		z-index: 999;
		background-color: #ffffff;
		-webkit-box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
		box-shadow: 0 0 30upx rgba(0, 0, 0, .1);
	}
	
	.popup-insert-text {
		width: 100%;
		height: 100vh;
	}
	
	.popup-bottom {
		bottom: 0;
		width: 100%;
	}
	
	.popup-bottom-button {
		width: 20%;
		font-size: 14px;
		text-align: center;
		line-height: 40px;
		display: flex;
		justify-content: center;
	}
	
	.popup-bottom-button:last-child {
		color: red;
	}
	
	
	.input-content {
		width: 100%;
	}
	
	.input-content textarea {
		padding: 8px 12px 8px 12px;
		font-size: 14px;
		min-height: 250px;
		line-height: 1.5;
	}
	
	.preview {
		border-top: 1px solid #e0e0e0;
		width: 100%;
	}
	
	.toolbar {
		width: 100%;
		border: none;
		box-shadow: 0 0px 2px rgba(0, 0, 0, 0.157), 0 0px 2px rgba(0, 0, 0, 0.227);
	}
	
	.toolbar .iconfont {
		display: inline-block;
		cursor: pointer;
		height: 30px;
		width: 30px;
		margin: 6px 0 5px 0px;
		font-size: 16px;
		padding: 5px 6px 5px 4px;
		color: #757575;
		border-radius: 5px;
		text-align: center;
		background: none;
		border: none;
		outline: none;
		line-height: 2.2;
		vertical-align: middle;
	}
	
	.input-content {
		min-height: 0;
	}
</style>
