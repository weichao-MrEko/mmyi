(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-order-confirmation"],{"3af4":function(e,i,t){var s=t("f04c");"string"===typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);var a=t("4f06").default;a("46d3c480",s,!0,{sourceMap:!1,shadowMode:!1})},"4f80":function(e,i,t){"use strict";var s=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",[t("v-uni-view",{staticClass:"addr",on:{click:function(i){i=e.$handleEvent(i),e.selectAddress(i)}}},[t("v-uni-view",{staticClass:"icon"},[t("v-uni-image",{attrs:{src:"../../static/img/addricon.png",mode:""}})],1),t("v-uni-view",{staticClass:"right"},[t("v-uni-view",{staticClass:"tel-name"},[t("v-uni-view",{staticClass:"name"},[e._v(e._s(e.recinfo.name))]),t("v-uni-view",{staticClass:"tel"},[e._v(e._s(e.recinfo.tel))])],1),t("v-uni-view",{staticClass:"addres"},[e._v(e._s(e.recinfo.address.region.label)+"\n\t\t\t\t"+e._s(e.recinfo.address.detailed))])],1)],1),t("v-uni-view",{staticClass:"buy-list"},e._l(e.buylist,function(i,s){return t("v-uni-view",{key:s,staticClass:"row"},[t("v-uni-view",{staticClass:"goods-info"},[t("v-uni-view",{staticClass:"img"},[t("v-uni-image",{attrs:{src:i.img}})],1),t("v-uni-view",{staticClass:"info"},[t("v-uni-view",{staticClass:"title"},[e._v(e._s(i.name))]),t("v-uni-view",{staticClass:"spec"},[e._v("选择"+e._s(i.spec)+" 数量:"+e._s(i.number))]),t("v-uni-view",{staticClass:"price-number"},[t("v-uni-view",{staticClass:"price"},[e._v("￥"+e._s(i.price*i.number))]),t("v-uni-view",{staticClass:"number"})],1)],1)],1)],1)}),1),t("v-uni-view",{staticClass:"order"},[t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"left"},[e._v("积分 :")]),t("v-uni-view",{staticClass:"right"},[e._v("已扣除"+e._s(e.int)+"积分抵扣"+e._s(e._f("toFixed")(e.deduction))+"元")])],1),t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"left"},[e._v("备注 :")]),t("v-uni-view",{staticClass:"right"},[t("v-uni-input",{attrs:{placeholder:"选填,备注内容"},model:{value:e.note,callback:function(i){e.note=i},expression:"note"}})],1)],1)],1),t("v-uni-view",{staticClass:"detail"},[t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"nominal"},[e._v("商品金额")]),t("v-uni-view",{staticClass:"content"},[e._v("￥"+e._s(e._f("toFixed")(e.goodsPrice)))])],1),t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"nominal"},[e._v("运费")]),t("v-uni-view",{staticClass:"content"},[e._v("￥+"+e._s(e._f("toFixed")(e.freight)))])],1),t("v-uni-view",{staticClass:"row"},[t("v-uni-view",{staticClass:"nominal"},[e._v("积分抵扣")]),t("v-uni-view",{staticClass:"content"},[e._v("￥-"+e._s(e._f("toFixed")(e.deduction)))])],1)],1),t("v-uni-view",{staticClass:"blck"}),t("v-uni-view",{staticClass:"footer"},[t("v-uni-view",{staticClass:"settlement"},[t("v-uni-view",{staticClass:"sum"},[e._v("合计:"),t("v-uni-view",{staticClass:"money"},[e._v("￥"+e._s(e._f("toFixed")(e.sumPrice)))])],1),t("v-uni-view",{staticClass:"btn",on:{click:function(i){i=e.$handleEvent(i),e.toPay(i)}}},[e._v("提交订单")])],1)],1)],1)},a=[];t.d(i,"a",function(){return s}),t.d(i,"b",function(){return a})},"6c2f":function(e,i,t){"use strict";t.r(i);var s=t("bb90"),a=t.n(s);for(var n in s)"default"!==n&&function(e){t.d(i,e,function(){return s[e]})}(n);i["default"]=a.a},7490:function(e,i,t){"use strict";t.r(i);var s=t("4f80"),a=t("6c2f");for(var n in a)"default"!==n&&function(e){t.d(i,e,function(){return a[e]})}(n);t("e526");var o=t("2877"),d=Object(o["a"])(a["default"],s["a"],s["b"],!1,null,"23b307d5",null);i["default"]=d.exports},bb90:function(e,i,t){"use strict";var s=t("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a=s(t("59ad")),n={data:function(){return{buylist:[],goodsPrice:0,sumPrice:0,freight:12,note:"",int:1200,deduction:0,recinfo:{id:1,name:"大黑哥",head:"大",tel:"18816881688",address:{region:{label:"广东省-深圳市-福田区",value:[18,2,1],cityCode:"440304"},detailed:"深南大道1111号无名摩登大厦6楼A2"},isDefault:!0}}},onShow:function(){var e=this;uni.getStorage({key:"buylist",success:function(i){e.buylist=i.data,e.goodsPrice=0;for(var t=e.buylist.length,s=0;s<t;s++)e.goodsPrice=e.goodsPrice+e.buylist[s].number*e.buylist[s].price;e.deduction=e.int/100,e.sumPrice=e.goodsPrice-e.deduction+e.freight}}),uni.getStorage({key:"selectAddress",success:function(i){e.recinfo=i.data,uni.removeStorage({key:"selectAddress"})}})},onHide:function(){},onBackPress:function(){this.clearOrder()},filters:{toFixed:function(e){return(0,a.default)(e).toFixed(2)}},methods:{clearOrder:function(){var e=this;uni.removeStorage({key:"buylist",success:function(i){e.buylist=[],console.log("remove buylist success")}})},toPay:function(){for(var e=this,i=[],t=[],s=this.buylist.length,a=0;a<s;a++)i.push(this.buylist[a]),t.push(this.buylist[a].id);0!=i.length?(uni.showLoading({title:"正在提交订单..."}),setTimeout(function(){uni.setStorage({key:"paymentOrder",data:i,success:function(){uni.hideLoading(),uni.redirectTo({url:"../pay/payment/payment?amount="+e.sumPrice})}})},1e3)):uni.showToast({title:"订单信息有误，请重新购买",icon:"none"})},selectAddress:function(){uni.navigateTo({url:"../user/address/address?type=select"})}}};i.default=n},e526:function(e,i,t){"use strict";var s=t("3af4"),a=t.n(s);a.a},f04c:function(e,i,t){i=e.exports=t("2350")(!1),i.push([e.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.addr[data-v-23b307d5]{width:86%;padding:%?20?% 3%;margin:%?30?% auto %?20?% auto;-webkit-box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.addr .icon[data-v-23b307d5]{width:%?80?%;height:%?80?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.addr .icon uni-image[data-v-23b307d5]{width:%?60?%;height:%?60?%}.addr .tel-name[data-v-23b307d5]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:%?32?%}.addr .tel-name .tel[data-v-23b307d5]{margin-left:%?40?%}.addr .addres[data-v-23b307d5]{width:100%;font-size:%?26?%;color:#999}.buy-list[data-v-23b307d5]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;-webkit-box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.buy-list .row[data-v-23b307d5]{margin:%?30?% 0}.buy-list .row .goods-info[data-v-23b307d5]{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.buy-list .row .goods-info .img[data-v-23b307d5]{width:22vw;height:22vw;border-radius:%?10?%;overflow:hidden;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;margin-right:%?10?%}.buy-list .row .goods-info .img uni-image[data-v-23b307d5]{width:22vw;height:22vw}.buy-list .row .goods-info .info[data-v-23b307d5]{width:100%;height:22vw;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;position:relative}.buy-list .row .goods-info .info .title[data-v-23b307d5]{width:100%;font-size:%?28?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.buy-list .row .goods-info .info .spec[data-v-23b307d5]{font-size:%?22?%;background-color:#f3f3f3;color:#a7a7a7;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 %?10?%;border-radius:%?20?%;margin-bottom:20vw}.buy-list .row .goods-info .info .price-number[data-v-23b307d5]{position:absolute;width:100%;bottom:%?0?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end;font-size:%?28?%;height:%?40?%}.buy-list .row .goods-info .info .price-number .price[data-v-23b307d5]{color:#f06c7a}.buy-list .row .goods-info .info .price-number .number[data-v-23b307d5]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.order[data-v-23b307d5]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;-webkit-box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.order .row[data-v-23b307d5]{margin:%?20?% 0;height:%?40?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.order .row .left[data-v-23b307d5]{font-size:%?28?%}.order .row .right[data-v-23b307d5]{margin-left:%?40?%;font-size:%?26?%;color:#999}.order .row .right uni-input[data-v-23b307d5]{font-size:%?26?%;color:#999}.blck[data-v-23b307d5]{width:100%;height:%?100?%}.footer[data-v-23b307d5]{width:92%;padding:0 4%;background-color:#fbfbfb;height:%?100?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?28?%;position:fixed;bottom:%?0?%;z-index:5}.footer .settlement[data-v-23b307d5]{width:80%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.footer .settlement .sum[data-v-23b307d5]{width:50%;font-size:%?28?%;margin-right:%?10?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.footer .settlement .sum .money[data-v-23b307d5]{font-weight:600}.footer .settlement .btn[data-v-23b307d5]{padding:0 %?30?%;height:%?60?%;background-color:#f06c7a;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;font-size:%?30?%;border-radius:%?40?%}.detail[data-v-23b307d5]{width:86%;padding:%?10?% 3%;margin:%?30?% auto %?20?% auto;-webkit-box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);box-shadow:%?0?% %?5?% %?20?% rgba(0,0,0,.1);border-radius:%?20?%}.detail .row[data-v-23b307d5]{height:%?60?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.detail .row .nominal[data-v-23b307d5]{font-size:%?28?%}.detail .row .content[data-v-23b307d5]{font-size:%?26?%;color:#f06c7a}',""])}}]);