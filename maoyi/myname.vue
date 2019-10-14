<template>
	<view class="myname">
		<view class="inputbox">
			<input type="text" value="" placeholder="请输入昵称"/>
		</view>
		<view>
			<button type="warn" class="mini-btn">更换</button>
		</view>
	</view>
</template>

<script>
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
