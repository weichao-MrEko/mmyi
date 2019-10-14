<template>
	<view class="check">
		
		<form @submit="formSubmit" @reset="formReset">
		<view class="check_list">
			<view class="list_box" style="padding: 2px 0;">
				<view class="title">所在国家</view>
				<view class="right">
					<view class="con">
						<picker @change="bindPickerChange" :value="index" :range="nationPicker">
							<view class="uni-input">{{nationPicker[index]}}</view>
						</picker>
					</view>
					<view class="icon xiangyou"></view>
				</view>
			</view>
			<view class="list_box" style="padding: 2px 0;" @click="showqy(0)">
				<view class="title">企业类型</view>
				<view class="right">
					<view class="con" >
						{{taskCate[DataListItem[0]].children_task[DataListItem[1]].name}}
						<!-- <picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray" :range-key="'name'">
						    <view class="uni-input">
						      {{taskCate[multiIndex[0]].children_task[multiIndex[1]].name}}
						    </view>
						 </picker> -->
					</view>
					<view class="icon xiangyou"></view>
				</view>
			</view>
			<view class="list_box">
				<view class="title">企业名称</view>
				<view class="right">
					<input type="text" placeholder="请输入企业名称"  @input="cnInput"  :value="company_name"/>
					<view class="icon "></view>
				</view>
			</view>
			<view class="list_box">
				<view class="title">企业人数</view>
				<view class="right">
					<input type="number" placeholder="请输入企业人数"  @input="enInput" :value="employee_num"/>
					<view class="icon "></view>
				</view>
			</view>
			<view class="list_box">
				<view class="title">企业法人</view>
				<view class="right">
					<input type="text"  placeholder="请输入企业法人" @input="pnInput" :value="legal_person_name"/>
					<view class="icon "></view>
				</view>
			</view>
			<view class="list_box" style="padding: 2px 0;" @click="showqy(1)">
				<view class="title">企业省市</view>
				<view class="right">
					<view class="con" >
						{{AllCity[AllCityItem[0]].name}}  {{AllCity[AllCityItem[0]].child[AllCityItem[1]].name}}
						<!-- <picker mode="multiSelector" @change="bindMultiPickerChange" @columnchange="bindMultiPickerColumnChange" :value="multiIndex" :range="multiArray" :range-key="'name'">
						    <view class="uni-input">
						      {{taskCate[multiIndex[0]].children_task[multiIndex[1]].name}}
						    </view>
						 </picker> -->
					</view>
					<view class="icon xiangyou"></view>
				</view>
			</view>
			<view class="list_box">
				<view class="title">企业详细地址</view>
				<view class="right">
					<input type="text" placeholder="请输入企业详细地址"  @input="addressInput"  :value="address"/>
					<view class="icon "></view>
				</view>
			</view>
			
			<view class="list_box">
				<view class="title">法人身份证号</view>
				<view class="right">
					<input type="text"  placeholder="请输入法人身份证号" @input="lpInput"  :value="legal_person"/>
					<view class="icon "></view>
				</view>
			</view>
			<!-- <view class="list_box">
				<view class="title">身份证有效期</view>
				<view class="right">
					<view class="con">
						<input type="text"  placeholder="格式为'YYYY-MM-DD'" />
						
					</view>
					<view class="icon "></view>
				</view>
			</view> -->
			<!-- <view class="list_box">
				<view class="title">营业执照编号</view>
				<view class="right">
					<input type="text"  placeholder="请输入营业执照编号" @input="lpInput"  :value="legal_person"/>
					<view class="icon "></view>
				</view>
			</view> -->
					<view class="uploadText" @click="chooseImage(0)" v-if="!license" >营业执照</view>
					<view class="uploadImg" @click="chooseImage(0)" v-else>
						<image :src="license" mode="aspectFit"></image>
					</view> 
				
					<view class="uploadText" @click="chooseImage(1)"  v-if="!Assurface">法人身份证人像面</view>
					<view class="uploadImg" @click="chooseImage(1)" v-else>
						<image :src="Assurface" mode="aspectFit"></image>
					</view> 
				
					<view class="uploadText" @click="chooseImage(2)"  v-if="!national">法人身份证国徽面</view>
					<view class="uploadImg" @click="chooseImage(2)" v-else>
						<image :src="national" mode="aspectFit"></image>
					</view> 
				
				
					<view class="uploadText" @click="chooseImage(3)"  v-if="!handAssurface">手持证件照人像面</view>
					<view class="uploadImg" @click="chooseImage(3)" v-else>
						<image :src="handAssurface" mode="aspectFit"></image>
					</view> 
				
			
			</view>
			<button @click="formSubmit" v-if="showStatus!=1">提交</button>
		</form>
		<choose-image ref="child" :langth="1" @imgList="imgway"></choose-image>
		<mpvue-picker ref="wzpPicker" :DataList="DataList" @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-picker>
		<!-- <mpvue-city-picker ref="wzpPicker1" :c="hh"></mpvue-city-picker> -->
	</view>
</template>

<script>
	import json from "../../../static/json/nation.json"
	import chooseImage from "../../../components/chooseImage.vue"
	import mpvuePicker from "../../../components/mpvue-citypicker/mpvuePicker.vue"
	import mpvueCityPicker from "../../../components/mpvue-citypicker/mpvueCityPicker.vue"
	
	
	export default{
		components:{
			chooseImage,mpvuePicker,mpvueCityPicker
		},
		data(){
			return{
				DataList:[],
				AllCity:[],
				showStatus:'',
				Picker:true,
				headerPosition:"fixed",
				headerTop:null,
				statusTop:null,
				showHeader:true,
				index:0,
				license:'',
				Assurface:'',
				national:'',
				handAssurface:'',
				nationArray:[],
				nationPicker:[],
				date:"",
				indate:'请选择',
				imgID:'',
				taskCate:[],
				cate:[],
				cateindex:0,
				company_name:'',
				employee_num:'',
				legal_person_name:'',
				legal_person:'',
				address:'',
				DataListItem:[0,0],
				multiArray: [],
				multiIndex: [0, 0],
				AllCityItem:[0,0],
				showqyId:''
			}
		},
		onLoad(){
			console.log(json)
			this.$http("api/taskCate",{},"get").then(res=>{
				this.taskCate=res.data.data
				for(var i=0;i<this.taskCate.length;i++){
					this.cate.push(this.taskCate[i].name)
				}
				this.multiArray = [this.taskCate,this.taskCate[0].children_task]
				this.DataList = res.data.data

			})
			this.$http("api/task/district",{},"get").then(res=>{
				this.AllCity = res.data.data
			})
			uni.getStorage({
				key:"userInfo",
				success:res=>{
					if(res.data.shopId){
						uni.redirectTo({
							url: '../shop'
						});
					}
				}
			})
			
			uni.getStorage({
				key:"lang",
				success:res=>{
					this.nationArray=json[res.data];
					// uni.setNavigationBarTitle({
					// 	title:json[res.data].title
					// })
					for (var i=0;i<this.nationArray.length;i++) {
						this.nationPicker.push(this.nationArray[i].countries)
					}
					console.log(res.data)
				}
			});
			this.statusHeight = 0;
			// #ifdef APP-PLUS
			this.showHeader = false;
			this.statusHeight = plus.navigator.getStatusbarHeight();
			// #endif
		},
		
		methods:{
			showqy(e){
				this.showqyId = e
				if(this.showqyId == 0){
					this.DataList = this.taskCate
				}else{
					this.DataList = this.AllCity
				}
				this.$refs.wzpPicker.showPicker = true
			},
			showTwoPicker_linkage(e){
				console.log(this.$refs.wzpPicker.b)
			},
			cnInput(e){
				var v = e.detail.value
				this.company_name = v
			},
			enInput(e){
				var v = e.detail.value
				this.employee_num = v
			},
			pnInput(e){
				var v = e.detail.value
				this.legal_person_name = v
			},
			addressInput(e){
				var v = e.detail.value
				this.address = v
			},
			lpInput(e){
				var v = e.detail.value
				this.legal_person = v
			},
			bindPickerChange(e) {
				this.index = e.target.value
			},
			bindMultiPickerChange: function (e) {
			    console.log('picker发送选择改变，携带值为', e.detail.value)
			      this.multiIndex=e.detail.value
			  },
			bindMultiPickerColumnChange: function (e) {
			    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
			    var data = {
			      multiArray: this.multiArray,
			      // multiIndex: this.multiIndex
			    };
			    // data.multiIndex[e.detail.column] = e.detail.value;
				if(e.detail.column == 0){
					data.multiArray[1] = this.taskCate[e.detail.value].children_task
				}
				
			},
			chooseImage(e){
				if(this.showStatus==1)return false
				this.imgID=e
				this.$refs.child.animationShow()
			},
			showPicker(e){
				this.DataList=e;
				console.log(this.DataList)
				this.Picker=true;
				
			},
			onCancel(e){
				console.log(e)
			},
			onConfirm(e){
				console.log(e);
				if(this.showqyId == 0){
					this.DataListItem = e
				}else{
					this.AllCityItem = e
				}
			},
			imgway(e){
				uni.hideLoading();
				
				if(this.imgID==0){
					this.license = e.uploadImg.replace(/\\/g,"/")
				}
				if(this.imgID==1){
					this.Assurface = e.uploadImg.replace(/\\/g,"/")
				}
				if(this.imgID==2){
					this.national = e.uploadImg.replace(/\\/g,"/")
				}
				if(this.imgID==3){
					this.handAssurface= e.uploadImg.replace(/\\/g,"/")
				}
			},
			formSubmit(){
				if(this.company_name == '' || this.employee_num == '' || this.legal_person_name == ''
				   || this.address == '' || this.legal_person == '' || this.license == '' || 
				   this.Assurface == '' || this.national == '' || this.handAssurface == ''){
					   uni.showToast({
					   	icon :'none',
					       title: '信息还没填写完!',
					       duration: 2000
					   });
				   }else{
					   uni.getStorage({
					   	key:"token",
					   	success:res=>{
					   		this.$http("/api/user/enterpriseAuth",{
					   			api_token:res.data,
					   			//公司名称
					   			company_name:this.company_name,
					   			//行业分类ID
					   			cate_id:this.taskCate[this.DataListItem[0]].children_task[this.DataListItem[1]].id,
					   			//员工人数
					   			employee_num:this.employee_num,
					   			//企业法人
					   			legal_person_name:this.legal_person_name,
					   			//省
					   			province:this.AllCity[this.AllCityItem[0]].id,
					   			//市
					   			city:this.AllCity[this.AllCityItem[0]].child[this.AllCityItem[1]].id,
					   			//详细地址
					   			address:this.address,
					   			//法人身份证号
					   			legal_person:this.legal_person,
					   			//营业执照  文件url
					   			business_license:this.license,
					   			//身份证正面
					   			legal_person_y:this.Assurface,
					   			//身份证反面
					   			legal_person_n:this.national,
					   			//手持身份证
					   			legal_person_hold:this.handAssurface,
					   		},"post").then(res=>{
					   			uni.showToast({
					   				icon :'none',
					   			    title: res.data.message,
					   			    duration: 2000
					   			});
					   		})
					   	}
					   })
				   }
				
				
			},
			exit(){
				uni.navigateBack({
					delta: 1
				});
			},
			uploadImg(e){
				console.log(e)
				uni.chooseImage({
					 sizeType: ['original', 'compressed'],
					 sourceType: ['album','camera'],
					 success: res=> {
						 if(e==0){
							this.license = res.tempFilePaths[0]
						 }
						 if(e==1){
						 	this.Assurface = res.tempFilePaths[0]
						 }
						 if(e==2){
						 	this.national = res.tempFilePaths[0]
						 }
						 if(e==3){
						 	this.handAssurface = res.tempFilePaths[0]
						 }
						 
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
		
		.uploadImg{
			width: 150upx;
			height: 150upx;
			margin: 10upx;
			image{
				width: 100%;
				height: 100%;
			}
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
	button{
		background: #e84148;
		margin: 3%;
		color: #fff;
	}
</style>
