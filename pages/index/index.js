//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    uploadFile: {},
    num: 0
  },
  //事件处理函数
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
  bindInput: function (e) {
    this.setData({
      num: e.detail.value
    })
  },
  bindSubmit: function () {
    if (!this.data.uploadFile.path) {
      wx.showToast({
        title: '还没有上传截图',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (!this.data.num) {
      wx.showToast({
        title: '还没有填写点赞数量',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (!(/^\d+$/.test(this.data.num))) {
      wx.showToast({
        title: '请输入合法数字',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    if (parseInt(this.data.num) > 200) {
      wx.showToast({
        title: '最大点赞数量为200',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    app.globalData = {
      img: this.data.uploadFile.path,
      num: this.data.num
    };
    wx.navigateTo({
      url: '../canvas/canvas'
    })
  },
  onLoad: function () {
  },
  chooseImage: function(e) {
    console.log(e);
    wx.chooseImage({
      count: 1,  //只能选择一张图片
      sizeType: ["original"],  //选择原图，不压缩
      sourceType: ["album"],  //从相册选择，不拍照
      success: (res) => {
        wx.showToast({
          title: '上传成功',
          icon: 'success',
          duration: 2000
        })
        console.log(res);
        this.setData({
          uploadFile: {
            path: res.tempFilePaths[0]
          }
        })
      },
      fail: function (e) {
        wx.showToast({
          title: '未上传成功',
          icon: 'none',
          duration: 2000
        })
      }
    })
  }
})
