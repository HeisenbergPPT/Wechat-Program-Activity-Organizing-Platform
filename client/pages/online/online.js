// pages/activitys/activitys.js
var imageUtil = require('../../common/util.js');
// 获取服务器接口地址
const api = require('../../config/config.js');
// 获取app应用实例
const app = getApp();


Page({

    
    /**
     * 页面的初始数据
     */
    data: {
        activityList: [],           // 书籍列表数组
        indicatorDots: true,   // 是否显示轮播指示点
        autoplay: true,        // 是否自动播放轮播
        interval: 3000,         // 轮播间隔
        duration: 300,         // 轮播播放延迟
        screenWidth: 350,
        vertical: false,
        showLoading: true,      // 是否显示loading态
        imagewidth: 0,          //缩放后的宽
        imageheight: 0,         //缩放后的高  
        a_id: 0,
        city_id: 0
    },

    imageLoad: function (e) {
        var imageSize = imageUtil.imageUtil(e)
        this.setData({
          imagewidth: imageSize.imageWidth,
          imageheight: imageSize.imageHeight
        })
    },
    type1: function (e) {
        this.setData({
            a_id: 1
        })
    },
    type2: function (e) {
        this.setData({
            a_id: 2
        })
    },
    type3: function (e) {
        this.setData({
            a_id: 3
        })
    },
    type4: function (e) {
        this.setData({
            a_id: 4
        })
    },
    type5: function (e) {
        this.setData({
            a_id: 5
        })
    },
    type6: function (e) {
        this.setData({
            a_id: 6
        })
    },
    type7: function (e) {
        this.setData({
            a_id: 7
        })
    },
    type8: function (e) {
        this.setData({
            a_id: 0
        })
    },
    cityall: function (e) {
        this.setData({
            city_id: 0
        })
    },
    city1: function (e) {
        this.setData({
            city_id: 1
        })
    },
    city2: function (e) {
        this.setData({
            city_id: 2
        })
    },
    city3: function (e) {
        this.setData({
            city_id: 3
        })
    },
    /**
     * 打开书籍详情页面
     */
    goDetail: function(ev) {

        let info = ev.currentTarget.dataset;

        let navigateUrl = '../detail/detail?';

        for (let key in info) {
            info[key] = encodeURIComponent(info[key]);
            navigateUrl += key + '=' + info[key] + '&';
        }

        navigateUrl = navigateUrl.substring(0, navigateUrl.length - 1);

        wx.navigateTo({
            url: navigateUrl
        });
    },

    /**
     * 获取所有书籍列表
     */
    getActivityList: function() {

        let that = this;

        wx.request({
            url: api.getActivitysUrl,
            data: {
                is_all: 1
            },
            success: function(res) {
                let data = res.data;
                // console.log(data);

                if (data.result === 0) {
                    setTimeout(function() {
                        that.setData({
                            activityList: data.data,
                            showLoading: false
                        });
                    }, 800);
                }

            },
            error: function(err) {
                console.log(err);
            }
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var screenWidth = wx.getSystemInfoSync().screenWidth;
        this.setData({
          screenWidth: screenWidth / 2 - 20,
          cityWidth: screenWidth / 3 - 17,
          cityHeight: screenWidth / 5,
          typeWidth: screenWidth / 4 -15,
          typeHeight: screenWidth / 4 -15

        });

        let that = this;
        that.getActivityList();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        console.log('current page is onReady');
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        console.log('current page is onShow');
    },

    /**
     * 设置页面转发信息
     */
    onShareAppMessage: function(res) {
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: '豆芽活动',
            path: '/pages/online/online',
            imageUrl: '/images/pointicon.png',
            success: function (res) {
                // 转发成功
                console.log('转发成功');
            },
            fail: function (res) {
                // 转发失败
                console.log('转发失败')
            }
        }
    }
});
