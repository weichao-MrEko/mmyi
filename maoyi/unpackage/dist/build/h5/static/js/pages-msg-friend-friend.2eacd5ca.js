(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-msg-friend-friend"],{"0c1b":function(e,t,i){"use strict";i.r(t);var n=i("6a3c"),a=i.n(n);for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);t["default"]=a.a},"29b8":function(e,t,i){t=e.exports=i("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-image[data-v-49915c52]{height:100%}.search[data-v-49915c52]{padding:%?5?% %?20?% %?5?% %?30?%;background:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.search uni-input[data-v-49915c52]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;font-size:%?30?%}.icon[data-v-49915c52]{font-size:%?45?%;margin:auto}.list-box[data-v-49915c52]{background:#fff;width:100%;margin:%?100?% auto}.list-box .row[data-v-49915c52]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;padding:0 %?10?%}.list-box .row .left[data-v-49915c52]{width:%?80?%;height:%?80?%;margin:0 %?20?%}.list-box .row .center[data-v-49915c52]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #eee;height:100%;padding:%?20?% 0}.list-box .row .center .con[data-v-49915c52]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.list-box .row .icon[data-v-49915c52]{font-size:%?35?%;margin:auto %?20?%}',""])},"4b22":function(e,t,i){var n=i("29b8");"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("398ba942",n,!0,{sourceMap:!1,shadowMode:!1})},"6a3c":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{}},methods:{scan:function(){uni.scanCode({success:function(e){console.log("条码类型："+e.scanType),console.log("条码内容："+e.result)}})},search:function(){uni.navigateTo({url:"../search/search"})},phone:function(){uni.navigateTo({url:"../address/address"})}}};t.default=n},c1f0:function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"search"},[i("v-uni-input",{attrs:{type:"text",placeholder:"用户名/商铺名"},on:{focus:function(t){t=e.$handleEvent(t),e.search(t)}}}),i("v-uni-view",{staticClass:"icon search"})],1),i("v-uni-view",{staticClass:"list-box"},[i("v-uni-view",{staticClass:"row",on:{click:function(t){t=e.$handleEvent(t),e.scan(t)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:"../../../static/img/im/face/face_10.jpg",mode:""}})],1),i("v-uni-view",{staticClass:"center"},[i("v-uni-view",{staticClass:"con"},[i("v-uni-view",{staticClass:"name"},[e._v("扫一扫")]),i("v-uni-view",{staticClass:"explain"},[e._v("扫描二维码")])],1),i("v-uni-view",{staticClass:"icon xiangyou"})],1)],1),i("v-uni-view",{staticClass:"row",on:{click:function(t){t=e.$handleEvent(t),e.phone(t)}}},[i("v-uni-view",{staticClass:"left"},[i("v-uni-image",{attrs:{src:"../../../static/img/im/face/face_10.jpg",mode:""}})],1),i("v-uni-view",{staticClass:"center"},[i("v-uni-view",{staticClass:"con"},[i("v-uni-view",{staticClass:"name"},[e._v("手机联系人")]),i("v-uni-view",{staticClass:"explain"},[e._v("添加或邀请通讯录的好友")])],1),i("v-uni-view",{staticClass:"icon xiangyou"})],1)],1)],1)],1)},a=[];i.d(t,"a",function(){return n}),i.d(t,"b",function(){return a})},c460:function(e,t,i){"use strict";i.r(t);var n=i("c1f0"),a=i("0c1b");for(var s in a)"default"!==s&&function(e){i.d(t,e,function(){return a[e]})}(s);i("ee7d");var c=i("2877"),o=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"49915c52",null);t["default"]=o.exports},ee7d:function(e,t,i){"use strict";var n=i("4b22"),a=i.n(n);a.a}}]);