(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shop/shopDetails/shopDetails"],{"3ecf":function(t,e,i){"use strict";i.r(e);var a=i("62ca"),o=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=o.a},4649:function(t,e,i){"use strict";i.r(e);var a=i("ecc8"),o=i("3ecf");for(var n in o)"default"!==n&&function(t){i.d(e,t,function(){return o[t]})}(n);i("dc6e");var s=i("2877"),c=Object(s["a"])(o["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"62ca":function(t,e,i){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{api_token:"",shop_list:"",shopdetails:"",isKeep:!1,headerPosition:"fixed",headerTop:null,statusTop:null,showHeader:!0,tab:0,fixation:!1,renderImage:!0,distance:"0",productList:[{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg",title:"Apple iPhone X 256GB 深空灰色 移动联通电信4G手机",originalPrice:9999,favourPrice:8888,tip:"自营"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg",title:"Apple iPad 平板电脑 2018年新款9.7英寸",originalPrice:3499,favourPrice:3399,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg",title:"Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）",originalPrice:12999,favourPrice:10688,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg",title:"Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色",originalPrice:999,favourPrice:958,tip:"秒杀"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg",title:"微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）",originalPrice:8888,favourPrice:8288,tip:"优惠"},{image:"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg",title:"Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）",originalPrice:2899,favourPrice:2799,tip:"自营"}]}},onLoad:function(e){this.statusHeight=0,this.showHeader=!1,this.statusHeight=plus.navigator.getStatusbarHeight(),console.log(t(e.shop_id," at pages\\shop\\shopDetails\\shopDetails.vue:162"));var a=this;i.request({url:"http://192.168.101.52/api/shop/shopDetail",data:{shop_id:e.shop_id},success:function(e){console.log(t(e.data.data," at pages\\shop\\shopDetails\\shopDetails.vue:170")),a.shopdetails=e.data.data}})},onShow:function(){var e=this;i.getStorage({key:"token",success:function(a){var o=e;o.api_token=a.data,i.request({url:"http://192.168.101.52/api/user/workList",data:{api_token:o.api_token},success:function(e){console.log(t(e.data.data.data," at pages\\shop\\shopDetails\\shopDetails.vue:188")),o.shop_list=e.data.data.data}})},fail:function(t){}})},onPageScroll:function(t){this.fixation=t.scrollTop>120},methods:{ViewImage:function(e){i.previewImage({urls:this.shopdetails.initBanner,current:e,success:function(e){console.log(t(e," at pages\\shop\\shopDetails\\shopDetails.vue:207"))}})},tablist:function(t){this.tab=t,this.distance=0,this.distance=100*t},exit:function(){i.navigateBack({delta:1})},changeTab:function(t){this.tab=t.target.current,this.distance=0,this.distance=100*t.target.current},pageScroll:function(t){var e=t.detail.scrollTop;this.fixation=e>145},scrollB:function(t){var e=t.detail.scrollTop;this.fixation=0!=e},keep:function(){this.isKeep=!this.isKeep}}};e.default=a}).call(this,i("0de9")["default"],i("6e42")["default"])},ab6d:function(t,e,i){},dc6e:function(t,e,i){"use strict";var a=i("ab6d"),o=i.n(a);o.a},ecc8:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c},o=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return o})}},[["3bac","common/runtime","common/vendor"]]]);