(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tabBar/home/home"],{5454:function(t,o,n){"use strict";n.r(o);var i=n("8053"),e=n("6dbf");for(var a in e)"default"!==a&&function(t){n.d(o,t,function(){return e[t]})}(a);n("9e07");var s=n("2877"),c=Object(s["a"])(e["default"],i["a"],i["b"],!1,null,null,null);o["default"]=c.exports},"546f":function(t,o,n){"use strict";(function(t){Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var i=e(n("3203"));function e(t){return t&&t.__esModule?t:{default:t}}var a={data:function(){return{tab:0,homelist:"",showHeader:!0,afterHeaderOpacity:1,headerPosition:"fixed",headerTop:null,statusTop:null,nVueTitle:null,city:"北京",currentSwiper:0,swiperList:[{id:1,src:"url1",img:"/static/img/1.jpg"},{id:2,src:"url2",img:"/static/img/2.jpg"},{id:3,src:"url3",img:"/static/img/3.jpg"}],categoryList:[{id:1,name:"办公",img:"/static/img/category/1.png"},{id:2,name:"家电",img:"/static/img/category/2.png"},{id:3,name:"服饰",img:"/static/img/category/3.png"},{id:4,name:"日用",img:"/static/img/category/4.png"},{id:5,name:"蔬果",img:"/static/img/category/5.png"},{id:6,name:"运动",img:"/static/img/category/6.png"},{id:7,name:"书籍",img:"/static/img/category/7.png"},{id:8,name:"文具",img:"/static/img/category/8.png"}],Promotion:[],productList:[{goods_id:0,img:"/static/img/goods/p1.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:1,img:"/static/img/goods/p2.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:2,img:"/static/img/goods/p3.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:3,img:"/static/img/goods/p4.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:4,img:"/static/img/goods/p5.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:5,img:"/static/img/goods/p6.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:6,img:"/static/img/goods/p7.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:7,img:"/static/img/goods/p8.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:8,img:"/static/img/goods/p9.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"},{goods_id:9,img:"/static/img/goods/p10.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"}],loadingText:"正在加载..."}},onPageScroll:function(t){this.headerPosition=t.scrollTop>=0?"fixed":"absolute",this.headerTop=t.scrollTop>=0?null:0,this.statusTop=t.scrollTop>=0?null:-this.statusHeight+"px"},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){t.showToast({title:"触发上拉加载"});var o=this.productList.length;if(o>=40)return this.loadingText="到底了",!1;for(var n=this.productList[o-1].goods_id,i=1;i<=10;i++){var e=n+i,a={goods_id:e,img:"/static/img/goods/p"+(e%10==0?10:e%10)+".jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"￥168",slogan:"1235人付款"};this.productList.push(a)}},onLoad:function(){var o=this;this.$http("/api/index/info",{},"get").then(function(t){o.homelist=t.data.data}),t.getStorage({key:"lang",success:function(o){t.setTabBarItem({index:0,text:i.default[o.data].home}),t.setTabBarItem({index:1,text:i.default[o.data].category}),t.setTabBarItem({index:2,text:i.default[o.data].issue}),t.setTabBarItem({index:3,text:i.default[o.data].cart}),t.setTabBarItem({index:4,text:i.default[o.data].user})}}),this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight()},methods:{TabItem:function(t){this.tab=t},loadPromotion:function(){for(var t=new Date,o=t.getFullYear(),n=t.getMonth()+1,i=t.getDate(),e=o+"/"+n+"/"+i+" 23:59:59",a=[{title:"整点秒杀",ad:"整天秒杀专区",img:"/static/img/s1.jpg",countdown:!1},{title:"限时抢购",ad:"每天23点上线",img:"/static/img/s2.jpg",countdown:e}],s=0;s<a.length;s++){var c=a[s];if(c.countdown){var g="00",d="00",r="00",u=new Date,m=new Date(e);if(!(u>=m)){var l=parseInt((m.getTime()-u.getTime())/1e3);g=parseInt(l/3600),d=parseInt(l%3600/60),r=l%60,g=g<10?"0"+g:g,d=d<10?"0"+d:d,r=r<10?"0"+r:r}a[s].countdown={h:g,m:d,s:r}}}this.Promotion=a},Timer:function(){var t=this;setInterval(function(){if(t.Promotion.length>0)for(var o=0;o<t.Promotion.length;o++){var n=t.Promotion[o];n.countdown&&(0==n.countdown.h&&0==n.countdown.m&&0==n.countdown.s||(n.countdown.s>0?(n.countdown.s--,n.countdown.s=n.countdown.s<10?"0"+n.countdown.s:n.countdown.s):n.countdown.m>0?(n.countdown.m--,n.countdown.m=n.countdown.m<10?"0"+n.countdown.m:n.countdown.m,n.countdown.s=59):n.countdown.h>0&&(n.countdown.h--,n.countdown.h=n.countdown.h<10?"0"+n.countdown.h:n.countdown.h,n.countdown.m=59,n.countdown.s=59),t.Promotion[o].countdown=n.countdown))}},1e3)},toMsg:function(){t.navigateTo({url:"../../msg/msg"})},toSearch:function(){t.navigateTo({url:"../../search/search"}),t.showToast({title:"建议跳转到新页面做搜索功能"})},toSwiper:function(o){t.showToast({title:o.src,icon:"none"})},toCategory:function(o){t.setStorageSync("catName",o.name),t.navigateTo({url:"../../goods/goods-list/goods-list?cid="+o.id+"&name="+o.name})},toRecommend:function(o){t.showToast({title:"店铺"+o.recommend_id,icon:"none"}),t.navigateTo({url:o.url})},toPromotion:function(o){t.showToast({title:o.title,icon:"none"})},toGoods:function(o){t.showToast({title:"商品"+o.recommend_id,icon:"none"}),t.navigateTo({url:o.url})},swiperChange:function(t){this.currentSwiper=t.detail.current}}};o.default=a}).call(this,n("6e42")["default"])},"6dbf":function(t,o,n){"use strict";n.r(o);var i=n("546f"),e=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(o,t,function(){return i[t]})}(a);o["default"]=e.a},8053:function(t,o,n){"use strict";var i=function(){var t=this,o=t.$createElement;t._self._c},e=[];n.d(o,"a",function(){return i}),n.d(o,"b",function(){return e})},"9e07":function(t,o,n){"use strict";var i=n("ec00"),e=n.n(i);e.a},ec00:function(t,o,n){}},[["d08e","common/runtime","common/vendor"]]]);