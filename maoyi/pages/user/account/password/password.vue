<template>
	<view class="list">
		<view class="row">
			<input type="text" :password="true" placeholder="旧密码" v-model="old"/>
		</view>
		<view class="row">
			<input type="text" :password="show"  placeholder="新密码" v-model="New"/>
			<image src="/static/img/hidepwd.png" mode="" v-if="show" @click="show=false"></image>
			<image src="/static/img/showpwd.png" mode="" v-if="!show" @click="show=true"></image>
		</view>
		<view class="row">
			<input type="text" :password="true" placeholder="确认新密码" v-model="Newer"/>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				show:true,
				old:'',
				New:'',
				Newer:''
			}
		},
		onNavigationBarButtonTap(e){
			if(this.New!=this.Newer){
				uni.showModal({
					title:"两次输入的密码不一致",
					icon:"none"
				})
				return
			}
			this.$http("/api/user/updatePassword",{
				oldPass:this.old,
				password:this.New,
				repassword:this.Newer,
			}).then(res=>{
				if(res.data.code==1000){
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
		},
	}
</script>

<style lang="scss">
	page{
		background: #f4f4f4;
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
