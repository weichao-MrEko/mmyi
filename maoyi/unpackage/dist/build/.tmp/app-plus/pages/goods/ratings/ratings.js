(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/goods/ratings/ratings"],{"2ec4":function(t,n,e){"use strict";e.r(n);var i=e("fb73"),a=e("7b35");for(var s in a)"default"!==s&&function(t){e.d(n,t,function(){return a[t]})}(s);e("cd28");var o=e("2877"),d=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);n["default"]=d.exports},"7b35":function(t,n,e){"use strict";e.r(n);var i=e("fc7a"),a=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=a.a},ccd6:function(t,n,e){},cd28:function(t,n,e){"use strict";var i=e("ccd6"),a=e.n(i);a.a},fb73:function(t,n,e){"use strict";var i=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return i}),e.d(n,"b",function(){return a})},fc7a:function(t,n,e){"use strict";(function(t,e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={data:function(){return{labelIndex:0,showSwiper:!1,showBtn:!1,videoDirection:0,showFullscreenBtn:!0,showPlayBtn:!0,isPlayVideo:!0,videoSrc:"",offer:[],swiperindex:0,btncolor:!0,user_type:"",bidding:"",Wait:"",Attn:""}},onLoad:function(t){this.task_id=t.task_id,this.dataInfo()},onReady:function(t){},onPullDownRefresh:function(){setTimeout(function(){t.stopPullDownRefresh()},1e3)},onReachBottom:function(){},methods:{exit:function(){this.showSwiper=!1},dataInfo:function(){var t=this;this.$http("/newtasks/taskindex",{id:this.task_id}).then(function(n){console.log(e(n," at pages\\goods\\ratings\\ratings.vue:229")),t.showBtn=1==n.data.data.user_type,t.user_type=n.data.data.user_type,t.offer=n.data.data.works.data;var i=(new Date).getTime(),a=(new Date(n.data.data.detail.begin_at).getTime(),new Date(n.data.data.detail.delivery_deadline).getTime());a<i&&(t.btncolor=!1);for(var s=0;s<t.offer.length;s++)1==t.offer[s].status&&(0==n.data.data.is_win_bid?(t.Wait=!0,t.showBtn=!1):1==n.data.data.is_win_bid&&(t.Attn=!0,t.showBtn=!1))})},toRatings:function(t){this.showSwiper=!0,this.swiperindex=t},last:function(){this.swiperindex>0&&this.swiperindex--},next:function(){this.offer.length-1>this.swiperindex&&this.swiperindex++},change:function(t){var n=this;this.swiperindex=t.target.current,1==this.user_type&&this.$http("/api/work/detail",{id:this.offer[this.swiperindex].id},"get",!1).then(function(t){n.offer[n.swiperindex]=t.data.data})},Confirm:function(){var n=this;this.btncolor?t.showToast({title:"还未到选标时间",icon:"none"}):this.$http("/newtasks/bidWinBid",{work_id:this.offer[this.swiperindex].id,task_id:this.offer[this.swiperindex].task_id}).then(function(e){1e3==e.data.status?(n.dataInfo(),t.showToast({title:"选标成功",icon:"success"})):t.showToast({title:"选标失败",icon:"none"})})}}};n.default=i}).call(this,e("6e42")["default"],e("0de9")["default"])}},[["13fd","common/runtime","common/vendor"]]]);