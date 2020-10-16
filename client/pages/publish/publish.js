var imageUtil = require('../../common/util.js');

Page({
  data: {
    imagewidth: 0,          //缩放后的宽
    imageheight: 0,         //缩放后的高  
  },
  imageLoad: function (e) {
    var imageSize = imageUtil.imageUtil(e)
    this.setData({
      imagewidth: imageSize.imageWidth,
      imageheight: imageSize.imageHeight
    })
},
})
