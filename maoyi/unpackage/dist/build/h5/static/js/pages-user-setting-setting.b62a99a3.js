(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-setting-setting"],{"069b":function(t,i,e){i=t.exports=e("2350")(!1),i.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-1ba1d373]{background-color:#f3f3f3}.icon[data-v-1ba1d373]{font-size:%?30?%}.content[data-v-1ba1d373]{padding-bottom:%?20?%}.content .list[data-v-1ba1d373]{width:96%;padding-left:4%;background-color:#fff;margin-bottom:%?20?%}.content .list .row[data-v-1ba1d373]{widows:100%;min-height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:solid %?1?% #eee}.content .list .row[data-v-1ba1d373]:last-child{border-bottom:none}.content .list .row .title[data-v-1ba1d373]{font-size:%?32?%;color:#333}.content .list .row .right[data-v-1ba1d373]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;color:#999}.content .list .row .right .tis[data-v-1ba1d373]{font-size:%?26?%;margin-right:%?5?%;max-height:%?120?%}.content .list .row .right .tis uni-image[data-v-1ba1d373]{width:%?100?%;height:%?100?%;border-radius:100%;margin:%?10?% 0}.content .list .row .right .icon[data-v-1ba1d373]{width:%?40?%;color:#cecece}body.?%PAGE?%[data-v-1ba1d373]{background-color:#f3f3f3}',""])},"102b":function(t){t.exports={zh:{title:"设置",head:"头像",nickname:"昵称",signature:"个性签名",security:"账号安全",versions:"版本升级",selectLanguage:"选择语言",clearCache:"清除缓存",feedback:"问题反馈",AboutUs:"关于我们",exit:"退出"},en:{title:"Setting",head:"Head Portrait ",nickname:"Nick Name",signature:"Personalized Signature",security:"Account Security",versions:"Version Upgrade",selectLanguage:"Select Language",clearCache:"Clear Cache",feedback:"Problem Feedback",AboutUs:"About Us",exit:"exit"}}},"226b":function(t,i,e){"use strict";e.r(i);var n=e("6115"),a=e.n(n);for(var s in n)"default"!==s&&function(t){e.d(i,t,function(){return n[t]})}(s);i["default"]=a.a},6115:function(t,i,e){"use strict";var n=e("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=n(e("102b")),s={data:function(){return{user:"",details:{}}},onLoad:function(){var t=this;uni.getStorage({key:"lang",success:function(i){t.details=a.default[i.data],uni.setNavigationBarTitle({title:a.default[i.data].title})}})},onShow:function(){var t=this;console.log(a.default.zh),uni.getStorage({key:"userInfo",success:function(i){console.log(i),t.user=i.data,t.user.face="/static/img/face.jpg",t.user.signature="点击昵称跳转登录/注册页",t.user.integral=500,t.user.balance=500,t.user.envelope=500}})},methods:{showType:function(t){this.tabbarIndex=t,this.list=this.orderList[t]},toPage:function(t){t?uni.navigateTo({url:t}):uni.showToast({title:"模板未包含此页面",icon:"none"})},chooseImage:function(){uni.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){console.log(a.default.stringify(t.tempFilePaths))}})},clear:function(){uni.showModal({content:"确定要清除缓存吗？",confirmText:"确定",cancelText:"取消",success:function(t){t.confirm&&uni.removeStorageSync("lang"),t.cancel}})},exit:function(){uni.reLaunch({url:"../../login/login"})}}};i.default=s},"7a6d":function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("v-uni-view",[e("v-uni-view",{staticClass:"content"},[e("v-uni-view",{staticClass:"list"},[e("v-uni-view",{staticClass:"row"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.details.versions))]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"tis"},[t._v("v1.0.0")]),e("v-uni-view",{staticClass:"icon xiangyou"})],1)],1),e("v-uni-view",{staticClass:"row",on:{click:function(i){i=t.$handleEvent(i),t.toPage("../language/language")}}},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.details.selectLanguage))]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"tis"}),e("v-uni-view",{staticClass:"icon xiangyou"})],1)],1),e("v-uni-view",{staticClass:"row",on:{click:function(i){i=t.$handleEvent(i),t.clear(i)}}},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.details.clearCache))]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"tis"}),e("v-uni-view",{staticClass:"icon xiangyou"})],1)],1),e("v-uni-view",{staticClass:"row"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.details.feedback))]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"tis"}),e("v-uni-view",{staticClass:"icon xiangyou"})],1)],1),e("v-uni-view",{staticClass:"row"},[e("v-uni-view",{staticClass:"title"},[t._v(t._s(t.details.AboutUs))]),e("v-uni-view",{staticClass:"right"},[e("v-uni-view",{staticClass:"tis"}),e("v-uni-view",{staticClass:"icon xiangyou"})],1)],1)],1),e("v-uni-button",{attrs:{type:""},on:{click:function(i){i=t.$handleEvent(i),t.exit(i)}}},[t._v(t._s(t.details.exit))])],1)],1)},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},a2c8:function(t,i,e){"use strict";var n=e("b246"),a=e.n(n);a.a},b246:function(t,i,e){var n=e("069b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=e("4f06").default;a("ef41c302",n,!0,{sourceMap:!1,shadowMode:!1})},f8cd:function(t,i,e){"use strict";e.r(i);var n=e("7a6d"),a=e("226b");for(var s in a)"default"!==s&&function(t){e.d(i,t,function(){return a[t]})}(s);e("a2c8");var o=e("2877"),c=Object(o["a"])(a["default"],n["a"],n["b"],!1,null,"1ba1d373",null);i["default"]=c.exports}}]);