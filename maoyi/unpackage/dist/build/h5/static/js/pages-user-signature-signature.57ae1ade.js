(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-user-signature-signature"],{"0301":function(t,e,a){"use strict";a.r(e);var n=a("035c"),i=a("1344");for(var u in i)"default"!==u&&function(t){a.d(e,t,function(){return i[t]})}(u);a("c9fc");var r=a("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,"098002ad",null);e["default"]=s.exports},"035c":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"signature"},[a("v-uni-view",{staticClass:"inputbox"},[a("v-uni-textarea",{attrs:{value:"",placeholder:t.details.placeholder},model:{value:t.user.signature,callback:function(e){t.$set(t.user,"signature",e)},expression:"user.signature"}})],1),a("v-uni-button",{staticClass:"mini-btn",attrs:{type:"warn"},on:{click:function(e){e=t.$handleEvent(e),t.btn(e)}}},[t._v(t._s(t.details.btn))])],1)},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},"046c":function(t,e,a){"use strict";var n=a("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("cf15")),u={data:function(){return{user:"",details:""}},onLoad:function(){var t=this;uni.getStorage({key:"lang",success:function(e){t.details=i.default[e.data],uni.setNavigationBarTitle({title:i.default[e.data].title})}}),uni.getStorage({key:"userInfo",success:function(e){t.user=e.data}})},methods:{btn:function(){console.log(this.user),uni.setStorage({key:"userInfo",data:this.user,success:function(t){(t.errMsg="setStorage:ok")&&uni.showToast({title:"保存",duration:2e3,icon:"success"})}})}}};e.default=u},1344:function(t,e,a){"use strict";a.r(e);var n=a("046c"),i=a.n(n);for(var u in n)"default"!==u&&function(t){a.d(e,t,function(){return n[t]})}(u);e["default"]=i.a},"44ab":function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".signature[data-v-098002ad]{width:100%;height:100vh;background:#f4f4f4}.inputbox[data-v-098002ad]{width:90%;margin:auto;padding:5% 0}.inputbox uni-textarea[data-v-098002ad]{width:95%;background:#fff;border-radius:5px;padding:10px}.mini-btn[data-v-098002ad]{margin:auto;width:90%}",""])},c9fc:function(t,e,a){"use strict";var n=a("e157"),i=a.n(n);i.a},cf15:function(t){t.exports={zh:{title:"个性签名",placeholder:"请输入个性签名",btn:"保存"},en:{title:"Personalized Signature",placeholder:"Please enter your personal signature",btn:"Save"}}},e157:function(t,e,a){var n=a("44ab");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("6a2a960a",n,!0,{sourceMap:!1,shadowMode:!1})}}]);