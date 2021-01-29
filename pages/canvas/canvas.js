//logs.js
//获取应用实例
const app = getApp()

Page({
  data: {
    screenshot: "",
    num: 0,
    headers: []
  },
  onLoad: function () {
    this.setData({
      screenshot: app.globalData.img,
      num: app.globalData.num
    })
  },
  onReady: function () {
    let num = parseInt(this.data.num);

    const headers = Array(num).fill().map((item, i) => {
      return { img: i + '.jpg' };
    });

    this.setData({
      headers: headers
    })
    wx.hideShareMenu();
  }
})
