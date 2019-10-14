<template>
</template>

<script>
	export default{
		data(){
			return {
				page:0
			}
		},
		onLoad() {
			console.log(11)
			
		},
		onShow() {
			var pages = getCurrentPages();
			console.log(this.page)
			// uni.navigateBack({
			// 	delta:1
			// })
			if(this.page==0){
				uni.navigateTo({
					url:"issue"
				})
			}else{
				uni.reLaunch({
					url:'../home/home'
				})
			}
			
		}
	} 
</script>

<style>
</style>
