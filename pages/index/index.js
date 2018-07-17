//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    value: '',
    isCustom: false,
    base: '',
    percent: [0.05, 0.06, 0.07, 0.08, 0.09, 0.1, 0.11, 0.12],
    percentValue: 2,
    percentData: ['5%', '6%', '7%', '8%', '9%', '10%', '11%', '12%']
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  setValue: function (e) {
    let params = {}
    params.value = e.detail.value
    if (!this.data.isCustom) {
      params.base = e.detail.value
    }
    this.setData(params)
  },
  setIsCustom: function (e) {
    this.setData({
      isCustom: e.detail.value
    })
  },
  setPercent: function (e) {
    this.setData({
      percentValue: e.detail.value
    })
  }
})
