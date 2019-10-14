<template>
	<view>
		<view class="user-list">
			<view class="row" v-for="item in list" >
				<view class="row-img" @click="userinfo"><image src="../../../static/img/goods/p1.jpg" mode=""></image></view>
				<view class="center">
					<view>姓名</view>
					<view>信息</view>
				</view>
				<view class="btn">添加</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				list:["",""]
			}
		},
		methods:{
			userinfo(){
				uni.navigateTo({
					url:"../userinfo/userinfo"
				})
			}
		}
	}
</script>

<style lang="scss">
	.user-list{
		background: #fff;
		.row{
			width: 100%;
			margin: auto;
			display: flex;
			padding: 20upx 0upx;
			justify-content: space-between;
			border-bottom: #eee 1px solid;
			align-items: center;
			.row-img{
				width: 100upx;
				height: 100upx;
				margin: auto 20upx;
				border-radius: 10upx;
				overflow: hidden;
			}
			.center{
				flex: 1;
				view+view{
					color: #999;
				}
			}
			.btn{
				height: 60upx;
				width: 100upx;
				border: 1px solid #eee;
				text-align: center;
				line-height: 60upx;
				margin-right: 20upx;
			}
		}
	}
	image{
		height: 100%;
	}
</style>
