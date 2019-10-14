<template>
  <div class="mpvue-picker">
    <div :class="{'pickerMask':showPicker}" @click="maskClick" catchtouchmove="true"></div>
    <div class="mpvue-picker-content " :class="{'mpvue-picker-view-show':showPicker}">
      <div class="mpvue-picker__hd" catchtouchmove="true">
        <div class="mpvue-picker__action" @click="pickerCancel">取消</div>
        <div class="mpvue-picker__action" :style="{color:themeColor}" @click="pickerConfirm">确定</div>
      </div>
      <picker-view indicator-style="height: 40px;" class="mpvue-picker-view" :value="pickerValue" @change="pickerChange">
        <block>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in a" :key="index">{{item.name}}</div>
          </picker-view-column>
          <picker-view-column>
            <div class="picker-item" v-for="(item,index) in b" :key="index">{{item.name}}</div>
          </picker-view-column>
        </block>
      </picker-view>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      showPicker: false,
      pickerValue: [0,0],
	  a:[],
	  b:[]
    };
  },
  created() {
	  this.init()
  },
  props: {
	DataList:Array,
	pickerValueDefault: {
	  type: Array,
	  default(){
				return [0, 0]
			}
	},
    /* 主题色 */
    themeColor: String
  },
  watch:{
	  pickerValueDefault(){
	  	this.init();
	  },
	  DataList(){
		 this.init();
	  }
  },
  methods: {
	init() {
		this.a = this.DataList;
		console.log(this.DataList)
		if(this.DataList[0].name == '北京市'){
			this.b = this.DataList[0].child;
		}else{
			this.b = this.DataList[0].children_task;
		}
		
		this.pickerValue = this.pickerValueDefault
	},	
    show() {
      setTimeout(() => {
        this.showPicker = true;
      }, 0);
    },
    maskClick() {
      this.pickerCancel();
    },
    pickerCancel() {
      this.showPicker = false;
      this._$emit('onCancel');
    },
    pickerConfirm(e) {
	  console.log(e)
      this.showPicker = false;
      this._$emit('onConfirm');
    },
    showPickerView() {
      this.showPicker = true;
    },
 
    pickerChange(e) {
      let changePickerValue = e.mp.detail.value;
      console.log(changePickerValue)
      this.pickerValue = changePickerValue;
	  if(this.DataList[0].name == '北京市'){
	  	this.b = this.DataList[changePickerValue[0]].child;
	  }else{
	  	this.b = this.DataList[changePickerValue[0]].children_task
	  }
	  
      
    },
    _$emit(emitName) {
      this.$emit(emitName,this.pickerValue);
    },
  
  }
};
</script>

<style>
.pickerMask {
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
}
.mpvue-picker-content {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  transition: all 0.3s ease;
  transform: translateY(100%);
  z-index: 3000;
}
.mpvue-picker-view-show {
  transform: translateY(0);
}
.mpvue-picker__hd {
  display: flex;
  padding: 9px 15px;
  background-color: #fff;
  position: relative;
  text-align: center;
  font-size: 17px;
}
.mpvue-picker__hd:after {
  content: ' ';
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  height: 1px;
  border-bottom: 1px solid #e5e5e5;
  color: #e5e5e5;
  transform-origin: 0 100%;
  transform: scaleY(0.5);
}
.mpvue-picker__action {
  display: block;
  flex: 1;
  color: #1aad19;
}
.mpvue-picker__action:first-child {
  text-align: left;
  color: #888;
}
.mpvue-picker__action:last-child {
  text-align: right;
}
.picker-item {
  text-align: center;
  line-height: 40px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
}
.mpvue-picker-view {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 238px;
  background-color: rgba(255, 255, 255, 1);
}
</style>
