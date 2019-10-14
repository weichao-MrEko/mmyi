<template>
	<view>
		<view class="Decoration">
			
			<image :src="bgimg"></image>
			<view class="suggest">建议尺寸：1080像素*615像素</view>
		</view>
		<button style="color: #666;margin: 20upx;" @click="change">更换背景图</button>
		<choose-image ref="child" :imgList="imgList" :langth="1"></choose-image>
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
				bgimg:'',
				imgList:[]
			}
		},
		watch:{
			imgList:function(newValue,oldValue){
				this.bgimg=newValue[newValue.length-1]
			}
		},
		methods:{
			change(){
				this.$refs.child.animationShow()
			}
		}
	}
</script>

<style lang="scss">
	image{
		height: 100%;
	}
	.Decoration{
		width: 100%;
		height: 400upx;
		position: relative;
		background: #eee;
		.suggest{
			background: rgba(0,0,0,0.4);
			color: #fff;
			border-radius: 10upx;
			font-size: 24upx;
			padding:5upx 20upx;
			position: absolute;
			bottom:10upx;
			right: 10upx;
		}
	}
</style>
