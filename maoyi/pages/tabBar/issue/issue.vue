<template>
	<view class="add">
		<view class="add_img">
			<view class="img_box" v-if="listimg.length==0" @click="aShow()">
				<image src="/static/img/issue/picture.png" mode=""></image>
			</view>
			<swiper class="swiper" :indicator-dots="true" :autoplay="false" :current="imgIndex" :interval="3000" :duration="1000" @change="swiperChange" v-else>
				<swiper-item v-for="row in listimg">
					<view class="swiper-item"><image :src="row" mode="aspectFill"></image></view>
				</swiper-item>
			</swiper>
			<view class="picture" @click="aShow()" v-if="listimg.length>0">
				<image src="/static/img/issue/picture.png" mode=""></image>
			</view>
			<view class="icon shanchu" v-if="listimg.length>0" @click="delImg">
			</view>
		</view>
		<view class="row-box">
			<view class="row-item">
				<input type="text" placeholder="产品标题" v-model="title" />
			</view>
			<view class="row-item">
				<view class="row-title">
					产品类型
				</view>
				<view class="row-right">
					<!-- <text>{{productType}}</text> -->
					<picker @change="bindPickerChange" :value="i" :range="productType">
					    <view class="uni-input">{{category_all[i].name}}</view>
					</picker>
					<text class="icon xiangyou"></text>
				</view>
			</view>
			<view class="row-item">
				<view class="row-title">
					指定国家
				</view>
				<view class="row-right">
					<picker @change="PickerChange" :value="0" :range="nations">
					    <view class="uni-input">{{nations[i]}}</view>
					</picker>
					<text class="icon xiangyou"></text>
					
				</view>
			</view>
			<view class="row-item">
				<view class="row-title">
					产品最低金额($)
				</view>
				<view class="row-right">
					<view class="price">
						<input type="number" placeholder="" v-model="low" :focus="true"  :selection-start="-1" :selection-end="low.length"/>
					</view>
					
				</view>
			</view>
			
			<view class="row-item">
				<view class="row-title">
					联系方式
				</view>
				<view class="row-right">
					 <radio-group @change="radioChange" style="display: flex;justify-content: flex-end;">
						<label class="radio" v-for="(item, index) in items" :key="item.value">
							<view>
								<radio :value="item.value" :checked="index == radioIndex"  color="#e84148"/>
							</view>
							<view>{{item.name}}</view>
						</label>
					</radio-group>
				</view>
				<view class="input-lx" v-if="radioIndex==0">
					<input type="number" v-model="phone" placeholder="请输入电话" focus/>
				</view>
				<view class="input-lx" v-if="radioIndex==1">
					<input type="text" v-model="email" placeholder="请输入邮箱" focus/>
				</view>
			</view>
			<view class="row-item">
				<view class="row-title">
					竞标时间段
				</view>
				<view class="row-right">
					<picker mode="date" :value="start_Date"  @change="startDateChange">
					     <view class="uni-input">{{start_Date}}</view>
					</picker>-
					<picker mode="date" :value="end_Date"  @change="endDateChange">
					     <view class="uni-input">{{end_Date}}</view>
					</picker>
					<text class="icon xiangyou"></text>
				</view>
			</view>
			<view class="row-item">
				<view class="">
					商品详情
				</view>
				<view style="width: 100%;">
					<uniRichtext @richList="richList" :uploadUrl="uploadUrl"></uniRichtext>
				</view>
			</view>
		</view>
		<view class="button">
			<button type="primary" @click="issue">发布</button>
		</view>
		<!-- <choose-image ref="child" :listimg="listimg" :uploadImg="uploadImg" :langth="5" :api_token="api_token" @imgList="imgway"></choose-image> -->
		<choose-image ref="child" :langth="5-listimg.length" @imgList="imgway"></choose-image>
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
import state from "../../../static/json/nation.json";
	export default{
		components:{
			uniRichtext,chooseImage
		},
		data(){
			const currentDate = this.getDate(0)
			return {
				api_token:'',
				imgList:[],
				animationData:{},
				showAction:false,
				imgIndex:"0",
				radioIndex:0,
				items:[{value:"0",name:"电话"},{value:"1",name:"邮箱"}],
				richInfo: null,
				langth:'',
				uploadUrl:"http://120.78.87.84:8080/conduit/file/uploadFile",
				start_Date: currentDate,
				end_Date:this.getDate(7),
				low:'',//低价
				high:'',//高价
				productType:[],//产品类型
				phone:'',//手机
				email:'',//邮箱地址
				title:'',//标题
				category_all:[],
				i:'0',
				listimg:[],
				uploadImg:[],
				nation:[],
				nations:[],
			}
		},
		// watch:{
		// 	richList:function (newValue,oldValue) {
		// 		console.log(newValue)
		// 	},
		// 	imgList:function(newValue,oldValue){
		// 		this.imgList=newValue
		// 	}
		// },
		onLoad() {
			var page=getCurrentPages();
			page[0].page=1
			uni.getStorage({
				key:"UserInfo",
				success:res=>{
					this.email=res.data.email
				},
				})
			uni.getStorage({
				key:"lang",
				success:res=>{
					console.log(res)
					if(res.data=="zh"){
						this.nation=state[res.data]
					}else{
						this.nation=state["en"]
					}
					for(var i=0;i<this.nation.length;i++){
						this.nations.push(this.nation[i].countries)
					}
				}
			})
			console.log(state)
			this.$http('/newtasks/postclass',{}).then(res=>{
				for (let i = 0; i < res.data.category_all.length; i++) {
					this.category_all.push({name:res.data.category_all[i].name,id:res.data.category_all[i].id})
					this.productType.push(res.data.category_all[i].name)
				}
			})
			this.$http('/newtasks/postTaskType',{}).then(res=>{
				// for (let i = 0; i < res.data.category_all.length; i++) {
				// 	this.category_all.push({name:res.data.category_all[i].name,id:res.data.category_all[i].id})
				// 	this.productType.push(res.data.category_all[i].name)
				// }
			})
		},
		onShow(){
			uni.getStorage({
				key:"token",
				success:res=>{
					console.log(res)
					this.api_token=res.data
				},
				fail:function(e){
					uni.navigateTo({
						url:"../../login/login"
					})
				}
			})
		},
		onReady(){
		
		},
		onBackPress(){
			uni.reLaunch({
				url:"../home/home"
			})
			return true;
		},
		methods:{
			richList(e){
				this.richInfo=e
			},
			imgway(e){
				for(var i=0;i<e.imgList.length;i++){
					this.imgList.push(e.imgList[i])
					this.uploadImg.push(e.uploadImg[i].id)
				}
				// this.listimg=e.imgList
				// 
				// this.uploadImg=e.uploadImg
			},
			bindPickerChange(e){
				this.i=e.detail.value
			},
			startDateChange(e){
				this.start_Date = e.target.value
				
			},
			endDateChange(e){
				this.end_Date = e.target.value
			},
			issue(){
				this.$http("/newtasks/postcreate",
					{
						description: JSON.stringify(this.richInfo),
						//地区限制0为不限制
						area:'0',
						//任务类型悬赏或招标
						type_id:'3',
						//招标开始时间
						begin_atzhaobiao:Math.floor(new Date(this.start_Date+" "+"00:00:00").getTime()/1000) ,
						//招标结束之间
						delivery_deadlinezhaobiao:Math.floor(new Date(this.end_Date+" "+"00:00:00").getTime()/1000),
						//悬赏金额
						bountyzhaobiao:this.low,
						//服务商数量
						worker_numzhaobiao:'1',
						//布预览和暂不发布切换1,2,3
						slutype:'1',
						//联系电话
						phone:this.phone,
						//任务分类
						cate_id:this.category_all[this.i].id,
						//标题
						title:this.title,
						//金额类型
						money_type:'1',
						//图片id Array类型
						file_id:this.uploadImg,
						//联系方式1:电话2：微信3:邮箱
						email:this.email   
					}).
					then(res=>{
					  if(res.data.msg){
						  uni.showToast({
						      title: '发布成功',
						      duration: 2000
						  });
					  }else{
						  uni.showToast({
						      title: '发布失败',
						  });
					  }
						
					}
				)
			},
			getDate(day) {
				var targetday_milliseconds=  new Date().getTime() + 1000*60*60*24*day;
				var today=new Date(targetday_milliseconds); //注意，这行是关键代码
				var tYear = today.getFullYear();
				var tMonth = today.getMonth();
				var tDate = today.getDate();
				tMonth = this.doHandleMonth(tMonth + 1);
				tDate = this.doHandleMonth(tDate);
			    return `${tYear}-${tMonth}-${tDate}`;	
			},
			doHandleMonth(month){
				var m = month;
				if(month.toString().length == 1){
					    m = "0" + month;
				}
				return m;
			},
			aShow(){
				if(this.listimg.length>=5){
					uni.showToast({
						title:"最多5张",
						icon:"none"
					})
					return
				}
				this.$refs.child.animationShow()
			},
			radioChange(e){
				this.radioIndex=e.target.value;
			},
			swiperChange(e){
				this.imgIndex=e.detail.current
			},
			delImg(){
				// this.imgList.splice(this.imgIndex,1);
				this.listimg.splice(this.imgIndex,1)
				this.uploadImg.splice(this.imgIndex,1)
				if(this.imgIndex>this.listimg.length-1){
					this.imgIndex=this.listimg.length-1
				}
			},

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
	input{
		font-size: 30upx;
		padding: 5upx 5upx 5upx 15upx;
		text-align: left!important;
	}
	.price{
		// border: 1px solid #999;
		border-radius: 10upx;
		input{
			font-size: 30upx;
			padding: 5upx 5upx 5upx 15upx;
			text-align: right!important;
		}
	}
	.radio{
		display: flex;
		align-items: center;
	}
	.button{
		width: 80%;
		margin:40upx auto;
		button{
			background-color: #e84148;
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
				width: 100%;
				height: 100%;
				color: #000000;
			}
			#editor{
				width: 100%;
				height: 120upx;
				background-color: #CCCCCC;
			}
			.row-right{
				display: flex;
				align-items: center;
				justify-content: flex-end;
				color: #000;
				width:70%;
				.icon{
					font-size: 30upx;
				}
				input{
					text-align: right;
				}
				
			}
			.input-lx{
				width: 100%;
				border: #999 solid 1px;
				border-radius: 5px;
				padding: 5upx 0;
				margin-top:20upx; 
				input{
					padding-left: 20upx;
					color: #000;
					font-size: 28upx;
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
