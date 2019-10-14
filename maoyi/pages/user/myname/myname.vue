<template>
	<view class="myname">
		<view class="inputbox" >
			<input type="text" v-model="userName" :placeholder="details.placeholder"/>
		</view>
		<view>
			<button :loading="loading" style="background:#e84148;color: #fff;" class="mini-btn" @click="btn" >{{details.btn}}</button>
		</view>
	</view>
</template>

<script>
	import json from "../../../static/json/myname.json"
	export default{
		data(){
			return {
				userName:'',
				details:"",
				loading:false
			}
		},
		onLoad(data) {
			this.userName=data.data
			uni.getStorage({
				key:'lang',
				success:res=>{
					this.details=json[res.data]
					uni.setNavigationBarTitle({
						title:json[res.data].title
					})
				}
			})
			
		},
		methods:{
			btn(){
				this.$http("/api/user/updateUserInfo",
				{nickname:this.userName},"post"
				).then(res=>{
					if(res.data.code==1000){
						
						uni.getStorage({
							key:"userInfo",
							success:e=>{
								e.data.nickname=res.data.data.nickname
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
	.myname{
		width: 100%;
		height: 100vh;
		background: #f4f4f4;
	}
	.inputbox{
		width: 90%;
		margin: auto;
		padding: 5% 0;
		
	}
	.inputbox input{
		background: #FFFFFF;
		height: 2rem;
		border-radius: 5px;
		padding-left: 10px;
	}
	.mini-btn{
		margin: auto;
		width: 90%;
	}
</style>
