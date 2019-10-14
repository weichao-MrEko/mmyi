<template>
	<uni-indexed-list :options="list" :showSelect="false" @click="bindClick" />
</template>

<script>
	import airport from '@/common/airport.js'
	import uniIndexedList from '@/components/uni-indexed-list/uni-indexed-list.vue'

	export default {
		components: {
			uniIndexedList
		},
		data() {
			return {
				list: airport.list
			}
		},
		onLoad() {
			uni.addPhoneContact({
				nickName: '昵称',
				lastName: '姓',
				firstName: '名',
				remark: '备注',
				mobilePhoneNumber: '114',
				weChatNumber: 'wx123',
				success: function () {
					console.log('success');
				},
				fail: function () {
					console.log('fail');
				}
			});
		},
		methods: {
			bindClick(e) {
				console.log('点击item，返回数据' + JSON.stringify(e))
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #fff
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		font-size: 32upx;
		line-height: 32upx;
		color: #777;
		margin: 40upx 25upx;
		position: relative
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 0 40upx
	}
</style>