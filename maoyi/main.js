import Vue from 'vue'
import App from './App'
import store from './store'

Vue.config.productionTip = false;
// const baseUrl = 'http://192.168.0.106/';
const baseUrl = 'http://192.168.101.52/';
Vue.prototype.$store = store
Vue.prototype.$http = appRequest
Vue.prototype.baseUrl=baseUrl
App.mpType = 'app'
console.log(appRequest)
// setInterval(function () {
//     console.log('55')
// }, 2000);
uni.onSocketMessage(function (res) {
  console.log('收到服务器内容：' + res.data);
});
uni.onSocketClose(function (res) {
  uni.showToast({
	icon :'none',
	  title: 'WebSocket连接已打开！',
	  duration: 2000
  });
});
uni.onSocketClose(function (res) {
  uni.showToast({
	icon :'none',
	  title: 'WebSocket 已关闭！',
	  duration: 2000
  });
});
uni.onSocketError(function (res) {
  uni.showToast({
	icon :'none',
	  title: 'WebSocket连接打开失败，请检查！',
	  duration: 2000
  });
});
function appRequest(api, params, method = 'POST', loading = true) {
  return new Promise((resolve, reject) => {
    // 请求开始，显示loading
    if (loading) {
      uni.showLoading({
        title: '加载中'
      })
    }
	
	uni.getStorage({
		key:"token",
		success:res=>{
			params.api_token=res.data
		}
	})
	
    // 请求
    uni.request({
      url: baseUrl + api,
      data: params,
      method: method,
      dataType: 'json',
      success: function(res) {
		  console.log('1')
        if (res.statusCode === 200) {
          resolve(res) // 接收res并传到then的参数中去
		  console.log('2')
          uni.hideLoading() // 结束加载
		  if(res.data.code==1013){
		  	uni.removeStorage({
		  		key: 'UserInfo',
		  		success: function (res) {
		  			console.log('success');
		  			uni.showModal({
		  				title:"登录过期,请重新登录！",
		  				icon:'none'
		  			})
		  			uni.navigateTo({
		  				url:"/pages/login/login"
		  			})
		  		}
		  	});
		  }
		  
        } else {
          uni.hideLoading()
          reject()
        }
		
      },
      error: function(e) {
		uni.hideLoading()
		uni.stopPullDownRefresh();
		uni.showToast({title: '加载失败',icon:"cancel"});
        reject(e)
      }
    })
  })
}
const app = new Vue({
    ...App,store
})
app.$mount()
