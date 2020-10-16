/** myActivitys.js **/

// 获取服务器接口地址
const api = require('../../config/config.js');
// 获取app应用实例
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        activityList: [],           // 书籍列表
        showLoading: true,      // 是否显示loading态
        showDownloading: false, // 是否显示下载loading态
        downloadPercent: 0      // 下载书籍进度百分比
    },
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
     * 获取已购书籍操作
     */
    getMyactivitys: function() {
        let that = this;

        wx.request({
            url: api.getBoughtActivitysUrl,
            data: {
                skey: app.getLoginFlag()            // 获取当前用户skey
            },
            success: function(res) {
                console.log(app.getLoginFlag());
                let data = res.data;
                if (data.result === 0) {
                    that.setData({
                        activityList: data.list || []
                    });
                }
                console.log(res.data);
            },
            error: function(err) {
                console.log(err);
                console.log("getboughtactivitys");
            }
        });
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let that = this;
        setTimeout(function() {
            that.setData({
                showLoading: false
            });
        }, 800);

        that.getMyactivitys();
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
    }
})
