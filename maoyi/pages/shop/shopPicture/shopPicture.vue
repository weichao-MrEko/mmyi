<template>
	<view>
		<view class="shop_box">
			<view class="listbox">
				<view class="row-img" v-for="(item,index) in picturelist" @click="animationShow(index)">
					<image :src="item.img" mode="aspectFill"></image>
					<view class="picture_text">
						{{item.text}}
					</view>
				</view>
				<view class="row-add" @click="change()">
					+
				</view>
			</view>
		</view>
		<choose-image ref="child" :imgList="imgList" :langth="9"></choose-image>
		<view style="overflow: hidden;">
			<view class="yiny" v-if="Action" @click="animationHide"></view>
			<view class="showActionSheet" :animation="animationData" v-if="showAction">
				<view class="item" @click="showText">标题</view>
				<view class="item" @click="shoot">删除</view>
			</view>
			<view class="showActionSheet" :animation="animationData" v-if="showActioner">
				<view class="item text" >标题：<input type="text" v-model="picturelist[index].text" placeholder="请输入标题" /></view>
				<!-- <view class="item" @click="shoot">确定</view> -->
			</view>
		</view>
	</view>
</template>

<script>
 import chooseImage from '../../../components/chooseImage.vue';
 export default{
	components:{
		chooseImage
	},
	data(){
		return{
			imgList:[],
			animationData:{},
			showAction:false,
			showActioner:false,
			Action:false,
			picturelist:[],
			picture:[],
			index:''
		}
	},
	watch:{
		imgList:function(newValue,oldValue){
			
			for(var i=0;i<newValue.length;i++){
				if(this.picturelist[i]){
					this.picturelist[i]={img:'',text:this.picturelist[i].text}
				}else{
					this.picturelist[i]={img:'',text:''}
				}
				this.picturelist[i].img=newValue[i]
			}
		
		}
	},
	methods:{
		change(){
			this.$refs.child.animationShow()
			console.log(this.imgList)
		},
		showText(e){
			this.showAction=false;
			this.showActioner=true;
			
		},
		animationShow(e){
			this.index=e
			this.showAction=true;
			this.Action=true;
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
			  that.Action=false;
			  that.showActioner=false;
			}.bind(this), 300)
		},
	}
	}
</script>

<style lang="scss">
	page{
		background: #FFFFFF!important;
	}
	.shop_box{
		width: 96%;
		margin:2% auto;
		.shopText{
			display: flex;
			padding:0 2%;
		}
		.add_img{
			width: 140upx;
			height: 140upx;
			// border-radius: 20upx;
			// border: 1px solid #999;
			image{
				height: 100%;
			}
		}
	}
	.listbox{
		flex-wrap: wrap;
		display: flex;
		.row-img{
			width: 48%;
			margin: 1%;
			position:relative;
			height: 240upx;
			image{
				height: 100%;
			}
			.picture_text{
				position: absolute;
				bottom:0;
				width: 100%;
				background: rgba(0,0,0,0.4);
				color: #FFFFFF;
				text-align: center;
			}
		}
		.row-add{
			width: 46%;
			margin: 1%;
			position:relative;
			height: 230upx;
			line-height: 220upx;
			text-align: center;
			font-size: 180upx;
			border: 3px dashed #999;
			color: #999;
		}
	}
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
		.text{
			display: flex;
			padding: 2%;
			align-items: center;
			text-align: left;
			input{
				border: 1px solid #999;
				width: 78%;
				padding: 10upx 0 10upx 10upx;
			}
		}
	}
</style>
