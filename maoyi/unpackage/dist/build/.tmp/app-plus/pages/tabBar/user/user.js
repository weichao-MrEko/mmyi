(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/user/user"],{"0206":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},a=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return a})},"0759":function(t,e,n){"use strict";var o=n("eb2b"),a=n.n(o);a.a},"84f4":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(n("b382"));function u(t){return t&&t.__esModule?t:{default:t}}var s={data:function(){return{isfirst:!0,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,jsonData:"",user:{username:"未登录",face:"/static/img/face.jpg",integral:0,balance:0,envelope:0},orderList:[{text:"待付款",icon:"fukuan"},{text:"待发货",icon:"fahuo"},{text:"待收货",icon:"shouhuo"},{text:"待评价",icon:"pingjia"},{text:"退换货",icon:"tuihuo"}],mytoolbarList:[{url:"",text:"积分管理",img:"/static/img/user/choujiang.png"},{url:"../../user/coupon/coupon",text:"账号管理",img:"/static/img/user/quan.png"},{url:"",text:"我的竞标",img:"/static/img/user/renw.png"},{url:"",text:"我的需求",img:"/static/img/user/momey.png"},{url:"../../user/address/address",text:"我的产品",img:"/static/img/user/addr.png"},{url:"",text:"我的出售",img:"/static/img/user/security.png"},{url:"../../shop/check/check",text:"商铺管理",img:"/static/img/user/bank.png"},{url:"../../user/keep/keep",text:"收藏",img:"/static/img/user/point.png"}]}},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onLoad:function(){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},onReady:function(){},onShow:function(){var e=this;console.log(o(11," at pages\\tabBar\\user\\user.vue:192")),t.getStorage({key:"userInfo",success:function(n){console.log(o(n," at pages\\tabBar\\user\\user.vue:196")),n.data?e.user=n.data:(console.log(o(2," at pages\\tabBar\\user\\user.vue:200")),t.navigateTo({url:"../../login/login"}))},fail:function(){console.log(o(1," at pages\\tabBar\\user\\user.vue:207")),t.navigateTo({url:"../../login/login"})}}),t.getStorage({key:"lang",success:function(t){console.log(o(a.default," at pages\\tabBar\\user\\user.vue:217")),e.jsonData=a.default[t.data]},fail:function(){console.log(o(123," at pages\\tabBar\\user\\user.vue:220")),t.navigateTo({url:"../../user/language/language"})}})},methods:{toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toOrderList:function(e){t.setStorageSync("tbIndex",e),t.navigateTo({url:"../../user/order_list/order_list?tbIndex="+e})},toSetting:function(){t.navigateTo({url:"../../user/setting/setting"})},toPersonal:function(){t.navigateTo({url:"../../user/personal/personal"})},toMyQR:function(){t.navigateTo({url:"../../user/myQR/myQR"})},toLogin:function(){t.showToast({title:"请登录",icon:"none"}),t.navigateTo({url:"../../login/login"}),this.isfirst=!1},isLogin:function(){var e=t.getStorageSync("UserInfo");return!!e},toDeposit:function(){t.navigateTo({url:"../../user/deposit/deposit"})},toPage:function(e,n){e?6==n?t.getStorage({key:"userInfo",success:function(n){n.data.shopId||t.navigateTo({url:e})}}):t.navigateTo({url:e}):t.showToast({title:"模板未包含此页面",icon:"none"})}}};e.default=s}).call(this,n("6e42")["default"],n("0de9")["default"])},ca15:function(t,e,n){"use strict";n.r(e);var o=n("0206"),a=n("ed90");for(var u in a)"default"!==u&&function(t){n.d(e,t,function(){return a[t]})}(u);n("0759");var s=n("2877"),i=Object(s["a"])(a["default"],o["a"],o["b"],!1,null,null,null);e["default"]=i.exports},eb2b:function(t,e,n){},ed90:function(t,e,n){"use strict";n.r(e);var o=n("84f4"),a=n.n(o);for(var u in o)"default"!==u&&function(t){n.d(e,t,function(){return o[t]})}(u);e["default"]=a.a}},[["3e3b","common/runtime","common/vendor"]]]);