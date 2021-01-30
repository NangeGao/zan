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
  // 洗牌算法生成一个n位数组 
  shuffle (n) {
    const arr = Array(n).fill().map((_, i) => i);
    while(n > 1) {
      const randomNum = Math.floor(Math.random() * n);
      n--;
      [arr[n], arr[randomNum]] = [arr[randomNum], arr[n]];
    }
    
    return arr;
  },
  onReady: function () {
    let num = parseInt(this.data.num);

    // console.log(shuffle(10));

    const headers = this.shuffle(120).slice(0,this.data.num).map((item) => {
      return { img: item + '.jpg' };
    });

    this.setData({
      headers: headers
    })
    wx.hideShareMenu();
  }
})
