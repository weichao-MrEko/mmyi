export const baseUrl = 'http://192.168.101.52'
 
/**
 * 统一的请求封装
 * @param {String} api 请求的api地址
 * @param {JSON} params 请求携带的参数
 * @param {String} methods 请求方式，默认GET
 * @param {boolean} [loading=true] 是否显示loading，默认true
 */
export function appRequest(api, params, method = 'POST', loading = true) {
  return new Promise((resolve, reject) => {
    // 请求开始，显示loading
    if (loading) {
      wx.showLoading({
        title: '加载中'
      })
    }
    // 请求
    wx.request({
      url: baseUrl + api,
      data: params,
      method: method,
      dataType: 'json',
      success: function(res) {
        if (res.statusCode === 200) {
          resolve(res) // 接收res并传到then的参数中去
          wx.hideLoading() // 结束加载
        } else {
          wx.hideLoading()
          reject()
        }
      },
      error: function(e) {
        reject(e)
      }
    })
  })
}
