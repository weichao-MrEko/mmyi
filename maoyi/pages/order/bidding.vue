<template>
	<view class="bidding">
		<view class="content">
		<view class="list">
			<view class="row">
				<view class="title">投标价格</view>
				<view class="right"><view class="tis"><input type="text" value="" v-model="price" :placeholder="'最低价格$'+hint+'元'"/></view><view class="icon"></view></view>
			</view>
			<view class="row">
				<view class="title">所在国家</view>
				<view class="right"><view class="tis"><input type="text" value=""  placeholder="请输入你所在的国家"/></view><view class="icon "></view></view>
			</view>
			<view class="row">
				<textarea value="" placeholder="备注" v-model="desc"/>
			</view>
		</view>
		</view>
		<button @click="bid" style="background-color:#e84148;color: #FFFFFF;margin: 0 5%;">投标</button>
	</view>
</template>

<script>
	
	export default{
		data(){
			return{
				id:'',
				hint:"",
				price:"",
				desc:""
			}
		},
		onLoad(options) {
			this.hint=options.price;
			this.id=options.id;
		},
		methods:{
			bid(){
				this.$http("/newtasks/apiworkcreate",{
					task_id:this.id,
					price:this.price,
					desc:this.desc
				}).then(res=>{
					if(res.data.status=='1000'){
						uni.showToast({
						    title: res.data.msg,
						    duration: 2000
						});
						setInterval(function(){
							uni.navigateBack({
								delta:1
							})
						},2000)
					}else{
						uni.showToast({
						    title: res.data.msg,
							icon:"none",
						    duration: 2000
						});
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	input{
		width: 100%;
		text-align: right;
		padding-right:20upx;
	}
	page{background: #fff;}
	.content{
		padding-bottom: 20upx;
		.list{
			width: 96%;
			padding-left: 4%;
			background-color: #fff;
			margin-bottom: 20upx;
			.row{
				widows: 100%;
				min-height: 90upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: solid 1upx #eee;
				&:last-child{
					border-bottom: none;
				}
				textarea{
					padding-top: 20upx;
					padding-left: 10upx;
					border-bottom: 1px solid #eee;
				}
				.title{
					font-size: 32upx;
					color: #333;
				}
				.right{
					display: flex;
					align-items: center;
					color: #999;
					.tis{
						font-size: 26upx;
						margin-right: 5upx;
						max-height: 120upx;
						image{
							width: 100upx;
							height: 100upx;
							border-radius: 100%;
							margin: 10upx 0;
						}
					}
					.icon{
						width: 40upx;
						font-size: 30upx;
						color: #cecece;
					}
				}
				
			}
		}
	}
</style>
