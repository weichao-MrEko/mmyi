<template>
	<view class="signature">
		<view class="inputbox">
			<textarea value="" v-model="sign" :placeholder="details.placeholder" />
		</view>
		<button type="warn" class="mini-btn" @click="btn">{{details.btn}}</button>
	</view>
</template>

<script>
	import json from "../../../static/json/signature.json"
	export default{
		data(){
			return{
				sign:'',
				details:''
			}
		},
		onLoad(e) {
			uni.getStorage({
				key:'lang',
				success:res=>{
					this.details=json[res.data]
					uni.setNavigationBarTitle({
						title:json[res.data].title
					})
				}
			})
			if(e.data==null){
				this.sign=e.data
			}
		},
		methods:{
			btn(){
				this.$http("/api/user/updateUserInfo",
				{sign:this.sign},
				).then(res=>{
					if(res.data.code==1000){
						
						uni.getStorage({
							key:"userInfo",
							success:e=>{
								e.data.sign=res.data.data.sign
								console.log(e.data)
								uni.setStorage({
									key:"userInfo",
									data:e.data,
									success:r=> {
										uni.showToast({
											title:"修改成功！"
										})
									}
								})
							}
						})
						
						
					}
				})
				
			}
		}
	}
</script>

<style>
	.signature{
		width: 100%;
		height: 100vh;
		background: #f4f4f4;
	}
	.inputbox{
		width: 90%;
		margin: auto;
		padding: 5% 0;
	}
	.inputbox textarea{
		width: 95%;
		background: #FFFFFF;
		border-radius: 5px;
		padding: 10px;
	}
	.mini-btn{
		margin: auto;
		width: 90%;
		background: #e84148;
	}
</style>
