<script>
	import {appRequest,baseUrl} from "util/util.js"
	export default {
		onLaunch: function () {
			console.log('App Launch',this.baseUrl)
			var lang=uni.getStorageSync("lang");
			console.log(lang)
			if(!lang){
				uni.getSystemInfo({
				    success: function (res) {
						console.log(res.language)
				        if(res.language=='zh'||res.language=='zh-CN'){
							uni.setStorage({
								key:'lang',
								data:"zh"
							})
						}else{
							uni.setStorage({
								key:'lang',
								data:"en"
							})
						}
				        
				    }
				});
			
		
		}
		},
		onShow: function () {
			console.log('App Show')
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import "/static/iconfont/font.scss";
	@import "/static/css/uni.css";
	uni-tabbar .uni-tabbar__icon{
		    width: 40upx;
		    height: 40upx;
	}
</style>
