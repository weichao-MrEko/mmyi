(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"244f":function(e,n,t){"use strict";var o=t("27b0"),a=t.n(o);a.a},"249e":function(e,n,t){"use strict";var o=function(){var e=this,n=e.$createElement;e._self._c},a=[];t.d(n,"a",function(){return o}),t.d(n,"b",function(){return a})},"27b0":function(e,n,t){},"578a":function(e,n,t){"use strict";t.r(n);var o=t("5fc2"),a=t.n(o);for(var i in o)"default"!==i&&function(e){t.d(n,e,function(){return o[e]})}(i);n["default"]=a.a},"5fc2":function(e,n,t){"use strict";(function(e,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;i(t("0ff2"));var a=t("2f62");function i(e){return e&&e.__esModule?e:{default:e}}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},o=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.forEach(function(n){u(e,n,t[n])})}return e}function u(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s={data:function(){return{username:"",passwd:"",isShowOauth:!1,showProvider:{weixin:!1,qq:!1,sinaweibo:!1,xiaomi:!1}}},onShow:function(){},onBackPress:function(n){return console.log(e(n," at pages\\login\\login.vue:56")),o.reLaunch({url:"../tabBar/home/home"}),!0},onLoad:function(){this.isShowOauth=!0,this.getProvider(),this.hasLogin&&o.reLaunch({url:"../tabBar/home/home"})},computed:(0,a.mapState)(["hasLogin"]),methods:r({},(0,a.mapMutations)(["login"]),{oauthLogin:function(n){o.showLoading(),o.login({provider:n,success:function(t){console.log(e("success: "+JSON.stringify(t)," at pages\\login\\login.vue:86")),o.getUserInfo({provider:n,success:function(n){console.log(e("用户信息："+JSON.stringify(n.userInfo)," at pages\\login\\login.vue:91")),o.setStorage({key:"UserInfo",data:{username:n.userInfo.nickName,face:n.userInfo.avatarUrl,signature:"个性签名",integral:0,balance:0,envelope:0},success:function(){o.hideLoading(),o.showToast({title:"登录成功",icon:"success"}),setTimeout(function(){o.navigateBack()},300)}})}})},fail:function(n){console.log(e("fail: "+JSON.stringify(n)," at pages\\login\\login.vue:114"))}})},getProvider:function(){var e=this;o.getProvider({service:"oauth",success:function(n){for(var t=n.provider.length,o=0;o<t;o++)e.showProvider[n.provider[o]]=!0;0==n.provider.length&&(e.isShowOauth=!1)}})},toPage:function(e){o.hideKeyboard(),o.navigateTo({url:e})},doLogin:function(){var n=this;if(console.log(e(this.username," at pages\\login\\login.vue:141")),o.hideKeyboard(),""==this.username)return o.showToast({title:"用户名不能为空",icon:"none"}),!1;this.$http("/api/user/login",{username:this.username,password:this.passwd}).then(function(e){"1000"==e.data.code?(o.showToast({title:"登录成功！",duration:1e3}),n.login(e.data.data.api_token),n.$http("/api/user/getUserInfo",{},"get",!1).then(function(e){1e3==e.data.code&&o.setStorage({key:"userInfo",data:e.data.data})}),setTimeout(function(){o.reLaunch({url:"../tabBar/home/home"})},1e3)):o.showToast({title:e.data.message,duration:1e3})})}})};n.default=s}).call(this,t("0de9")["default"],t("6e42")["default"])},ba2d:function(e,n,t){"use strict";t.r(n);var o=t("249e"),a=t("578a");for(var i in a)"default"!==i&&function(e){t.d(n,e,function(){return a[e]})}(i);t("244f");var r=t("2877"),u=Object(r["a"])(a["default"],o["a"],o["b"],!1,null,null,null);n["default"]=u.exports}},[["0574","common/runtime","common/vendor"]]]);