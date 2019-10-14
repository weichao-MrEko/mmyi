<template>
	<view class="page">
		<button type="primary" @click="showOnePicker">单列</button>
		<button type="primary" @click="showTwoPicker_linkage">双列联动</button>
		<button type="primary" @click="showTwoPicker_nolinkage">双列不联动</button>
		<button type="primary" @click="showThreePicker">三列联动</button>
		<view class="content">
			<text>{{pickerValue}}</text>
		</view>
		<wzp-picker ref="wzpPicker" :mode="mode" :pickerList="pickerList" :defaultIndex="defaultIndex" :equalModeId="equalModeId" @onConfirm="onConfirm"></wzp-picker>
	</view>
</template>

<script>
	import wzpPicker from "../../components/wzp-picker/wzpPicker.vue";
	import cityData from "../../common/city.data.js";
	import province from '../../common/province.js';
	export default {
		data() {
			return {
				pickerValue: "",
				mode: "",
				pickerList: [],
				defaultIndex: []
			};
		},
		methods: {
			// 单列初始化
			showOnePicker() {
				this.mode = 'one';
				this.pickerList = this.pickerList = [{
						label: "一"
					},
					{
						label: "二"
					},
					{
						label: "三"
					}
				];
				this.defaultIndex = [0];
				this.$refs.wzpPicker.showPicker();
			},
			// 双列联动初始化
			showTwoPicker_linkage() {
				this.mode = 'two_linkage';
				this.pickerList = cityData;
				this.defaultIndex = [0, 0];
				this.$refs.wzpPicker.showPicker();
			},
			// 双列不联动初始化
			showTwoPicker_nolinkage() {
				this.mode = 'two_nolinkage';
				this.pickerList = {
					firstArray: [{
							label: "一"
						},
						{
							label: "二"
						},
						{
							label: "三"
						}
					],
					secondArray: [{
							label: "1"
						},
						{
							label: "2"
						},
						{
							label: "3"
						}
					]
				};
				this.defaultIndex = [0, 0];
				this.$refs.wzpPicker.showPicker();
			},
			// 三列联动初始化
			showThreePicker() {
				this.mode = 'three';
				this.pickerList = province;
				this.defaultIndex = [0, 0, 0];
				this.$refs.wzpPicker.showPicker();
			},
			onConfirm(e) {
				if (this.mode == "one") {
					this.pickerValue = this.pickerList[e[0]].label;
				} else if (this.mode == "two_linkage") {
					this.pickerValue = cityData[e[0]].label + " " + cityData[e[0]].children[e[1]].label;
				} else if (this.mode == "two_nolinkage") {
					this.pickerValue = this.pickerList.firstArray[e[0]].label + " " + this.pickerList.secondArray[e[1]].label;
				} else if (this.mode == "three") {
					this.pickerValue = province[e[0]].label + " " + province[e[0]].children[e[1]].label + " " + province[e[0]].children[
						e[1]].children[e[2]].label;
				}
			}
		},
		onBackPress() {
			if (this.$refs.wzpPicker.pickerShow) {
				this.$refs.wzpPicker.closePicker();
				return true;
			}
		},
		components: {
			wzpPicker
		}
	}
</script>

<style scoped>
	button {
		width: 80%;
	}
	.content {
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 300upx;
		font-size: 28upx;
		border: #FFFFFF 1upx solid;
	}
</style>