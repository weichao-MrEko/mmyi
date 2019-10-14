<template>
	<view>
		<view class="list">
			<view class="row">
				<input type="text" placeholder="请输入手机号" v-model="mobile"/>
			</view>
			<!-- <view class="row">
				<input placeholder="请输入短信验证码" type="text" v-model="code" />
				<view class="get-code" :style="{'color':getCodeBtnColor}" @click.stop="getCode()">{{getCodeText}}</view>
			</view> -->
			
		</view>
		<button type="primary" @click="btn">绑定手机</button>	
	</view>
	
</template>

<script>
	export default{
		data(){
			return{
				getCodeText:'获取验证码',
				code:"",
				getCodeBtnColor:'#000',
				mobile:''
			}
		},
		methods: {
			btn(){
				this.$http("/api/user/updateUserInfo",
				{mobile:this.mobile}).then(res=>{
					if(res.data.code==1000){
						uni.getStorage({
							key:"userInfo",
							success:e=>{
								e.data.mobile=res.data.data.mobile
								console.log(e.data)
								uni.setStorage({
									key:"userInfo",
									data:e.data,
									success:r=> {
										uni.showToast({
											title:"修改成功！",
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
						})
						
					}
				})
			},
			getCode(){
				uni.hideKeyboard()
				if(this.getCodeisWaiting){
					return ;
				}
				
				this.getCodeText = "发送中..."
				this.getCodeisWaiting = true;
				this.getCodeBtnColor = "rgba(0,0,0,0.5)"
				//示例用定时器模拟请求效果
				setTimeout(()=>{
					uni.showToast({title: '验证码已发送',icon:"none"});
					//示例默认1234，生产中请删除这一句。
					this.code=1234;
					this.setTimer();
				},1000)
			},
			setTimer(){
				let holdTime = 60;
				this.getCodeText = "重新获取(60)"
				this.Timer = setInterval(()=>{
					if(holdTime<=0){
						this.getCodeisWaiting = false;
						this.getCodeBtnColor = "#eee";
						this.getCodeText = "获取验证码"
						clearInterval(this.Timer);
						return ;
					}
					this.getCodeText = "重新获取("+holdTime+")"
					holdTime--;
					
				},1000)
			},
		},
	}
</script>

<style lang="scss">
	page{
		background: #f4f4f4;
	}
	button{
		margin: 20upx auto;
		width: 96%;
		background: #e84148;
	}
	.list{
		background:#fff;
		margin: 20upx auto;
		.row+.row{
			border-top: 1px #eee solid;
		}
		.row{
			width: 94%;
			margin: auto;
			height: 80upx;
			display: flex;
			align-items: center;
			input{
				flex:1;
				height: 100%;
			}
			image{
				width: 60upx;
				height: 60upx;
			}
		}
	}
</style>
