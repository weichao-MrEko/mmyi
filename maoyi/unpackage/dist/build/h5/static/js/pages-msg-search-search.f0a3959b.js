(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-msg-search-search"],{3650:function(e,t,n){var i=n("cce1");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("8374a152",i,!0,{sourceMap:!1,shadowMode:!1})},"7bc3":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{list:["",""]}},methods:{userinfo:function(){uni.navigateTo({url:"../userinfo/userinfo"})}}};t.default=i},"84d3":function(e,t,n){"use strict";n.r(t);var i=n("7bc3"),a=n.n(i);for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);t["default"]=a.a},"9d52":function(e,t,n){"use strict";n.r(t);var i=n("ebae"),a=n("84d3");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("c576");var s=n("2877"),u=Object(s["a"])(a["default"],i["a"],i["b"],!1,null,"2b8ca880",null);t["default"]=u.exports},c576:function(e,t,n){"use strict";var i=n("3650"),a=n.n(i);a.a},cce1:function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.user-list[data-v-2b8ca880]{background:#fff}.user-list .row[data-v-2b8ca880]{width:100%;margin:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:%?20?% %?0?%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;border-bottom:#eee 1px solid;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.user-list .row .row-img[data-v-2b8ca880]{width:%?100?%;height:%?100?%;margin:auto %?20?%;border-radius:%?10?%;overflow:hidden}.user-list .row .center[data-v-2b8ca880]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.user-list .row .center uni-view+uni-view[data-v-2b8ca880]{color:#999}.user-list .row .btn[data-v-2b8ca880]{height:%?60?%;width:%?100?%;border:1px solid #eee;text-align:center;line-height:%?60?%;margin-right:%?20?%}uni-image[data-v-2b8ca880]{height:100%}',""])},ebae:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("v-uni-view",{staticClass:"user-list"},e._l(e.list,function(t){return n("v-uni-view",{staticClass:"row"},[n("v-uni-view",{staticClass:"row-img",on:{click:function(t){t=e.$handleEvent(t),e.userinfo(t)}}},[n("v-uni-image",{attrs:{src:"../../../static/img/goods/p1.jpg",mode:""}})],1),n("v-uni-view",{staticClass:"center"},[n("v-uni-view",[e._v("姓名")]),n("v-uni-view",[e._v("信息")])],1),n("v-uni-view",{staticClass:"btn"},[e._v("添加")])],1)}),1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})}}]);