import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

let userState = {
	userName: '',
	hasLogin: false, // 是否登录
	hasSkip: false,   // 是否跳过启动页
	language: false  // 是否选择语言
};

const userInfo = uni.getStorageSync('userInfo');
if(userInfo.hasLogin){	
	userState = userInfo;
}
if(userInfo.hasSkip){	// 用户已经跳过启动页，但是没有登录
	userState.hasSkip = true;
}
const lang = uni.getStorageSync('lang');
if(lang){
	userState.language=true;
}
const store = new Vuex.Store({
    state: {...userState},
    mutations: {
        login(state, user) {  // 用户登录
            state.hasLogin = true;
			uni.setStorageSync('token', user);	
        },
        logout(state) {			// 用户退出
            state.userName = "";
            state.hasLogin = false;
			// todo: 当用户退出时，启动页可以不再显示
			
			uni.removeStorageSync('token');
			uni.removeStorageSync('userInfo');
			uni.closeSocket(function (res) {
			  console.log('WebSocket 已关闭！');
			});
			
        },
		changeLogo(state, img){	// 用户修改图片
			state.userImg = img;
			
			// uni.setStorageSync('userInfo', {...state});	
		},
		skipIndex(state){	// 用户跳过首页
			state.hasSkip = true; 
			
			uni.setStorageSync('userInfo', {...state});	
		},
		langIndex(state){
			state.language=true;
			uni.setStorageSync('userInfo', {...state});
		}
    }
});

export default store
