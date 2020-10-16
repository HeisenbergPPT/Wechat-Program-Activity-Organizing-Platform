// pages/detail/detail.js

var imageUtil = require('../../common/util.js');
const app = getApp();
const api = require('../../config/config.js');

Page({

    /**
     * 页面的初始数据
     */
    data: {
        commentList: [],        // 评论列表
        participants: [],       //报名用户统计
        imagewidth: 0,          //缩放后的宽
        imageheight: 0,         //缩放后的高    
        activityInfo: {},           // 活动信息
        activityIsBuy: -1,          // 是否已购买
        commentLoading: true,   // 评论loading态
        downloading: false,     // 是否正在下载
        downloadPercent: 0      // 当前书籍下载百分比
    },

    imageLoad: function (e) {
        var imageSize = imageUtil.imageUtil(e)
        this.setData({
          imagewidth: imageSize.imageWidth,
          imageheight: imageSize.imageHeight
        })
    },

    goComment: function(ev) {
        // 获取dataset
        let info = ev.currentTarget.dataset;
        let navigateUrl = '../comment/comment?';

        for (let key in info) {
            info[key] = encodeURIComponent(info[key]);
            navigateUrl += key + '=' + info[key] + '&';
        }

        navigateUrl = navigateUrl.substring(0, navigateUrl.length - 1);

        wx.navigateTo({
            url: navigateUrl
        });
    },

    readActivity: function() {
        let that = this;
        let fileUrl = that.data.activityInfo.file;
        let key = 'activity_' + that.data.activityInfo.id;
        // 活动是否已经报名
        let downloadPath = app.getDownloadPath(key);
        if (downloadPath) {
            app.openActivity(downloadPath);
            return;
        }

        const downloadTask = wx.downloadFile({
            url: fileUrl,
            success: function(res) {
                let filePath = res.tempFilePath
                that.setData({
                    downloading: false
                });

                // 调用 wx.saveFile 将下载的文件保存在本地
                app.saveDownloadPath(key, filePath)
                    .then(function(saveFilePath) {
                        app.openActivity(saveFilePath);
                    })
                    .catch(function() {
                        app.showInfo('支付信息保存失败');
                    });

            },
            fail: function(error) {
                that.showInfo('此活动无需支付');
                console.log(error);
            }
        });

        downloadTask.onProgressUpdate(function(res) {
            that.setData({
                downloading: true,
                downloadPercent: res.progress
            });
        });
    },


    confirmBuyActivity: function() {
        let that = this;
        wx.showModal({
            title: '提示',
            content: '确定用1积分报名此活动吗？',
            showCancel: true,
            cancelText: '打扰了',
            cancelColor: '#8a8a8a',
            confirmText: '确定',
            confirmColor: '#1AAD19',
            success: function(res) {
                if (res.confirm) {
                    // 报名
                    that.buyActivity();
                } else if (res.cancel) {
                    // 取消
                }
            }
        });
    },

    confirmCancelActivity: function() {
        let that = this;
        wx.showModal({
            title: '提示',
            content: '确定取消报名活动吗？豆芽积分不退哦',
            showCancel: true,
            cancelText: '不取消',
            cancelColor: '#8a8a8a',
            confirmText: '确定',
            confirmColor: '#1AAD19',
            success: function(res) {
                if (res.confirm) {
                    // 报名
                    that.cancelActivity();

                } else if (res.cancel) {
                    // 取消
                }
            }
        });
    },
    // 报名活动
    buyActivity: function() {
        let that = this;
        let activityId = that.data.activityInfo.id;
        let requestData = {
            activityid: activityId,
            skey: app.getLoginFlag()
        };

        wx.request({
            url: api.buyActivityUrl,
            method: 'POST',
            data: requestData,
            success: function(res) {
                if (res.data.result === 0) {
                    // 将按钮置为“打开”
                    // 更新用户兑换币的值
                    that.setData({
                        activityIsBuy: 1
                    });

                    let balance = app.globalData.userInfo.balance;
                    app.globalData.userInfo.balance = balance - 1;
                    wx.setStorageSync('userInfo', JSON.stringify(app.globalData.userInfo));

                    that.showInfo('报名成功', 'success');

                } else {
                    console.log(res);
                    that.showInfo('返回数据异常');
                }
            },
            fail: function(error) {
                console.log(error);
                that.showInfo('请求失败');
            }
        });

    },

    cancelActivity: function() {
        let that = this;
        let activityId = that.data.activityInfo.id;
        let requestData = {
            activityid: activityId,
            skey: app.getLoginFlag()
        };

        wx.request({
            url: api.cancelActivityUrl,
            method: 'POST',
            data: requestData,
            success: function(res) {
                if (res.data.result === 0) {
                    // 将按钮置为“打开”
                    // 更新用户兑换币的值
                    that.setData({
                        activityIsBuy: 0
                    });
                    wx.setStorageSync('userInfo', JSON.stringify(app.globalData.userInfo));
                    that.showInfo('取消成功', 'success');

                } else {
                    console.log(res);
                    that.showInfo('返回数据异常');
                }
            },
            fail: function(error) {
                console.log(error);
                that.showInfo('请求失败');
            }
        });

    },
 
    // 获取书籍评论列表及是否购买
    getPageData: function() {

        let that = this;
        let requestData = {
            activityid: that.data.activityInfo.id,
            skey: app.getLoginFlag()
        };

        wx.request({
            url: api.queryActivityUrl,
            method: 'GET',
            data: requestData,
            success: function(res) {
                if (res.data.result === 0) {
                    that.setData({
                        commentList: res.data.data.lists || [],
                        activityIsBuy: res.data.data.is_buy
                    });

                    setTimeout(function() {
                        that.setData({
                            commentLoading: false
                        });
                    }, 500);
                } else {
                    that.showInfo('返回数据异常');
                }
            },
            fail: function(error) {
                that.showInfo('请求失败');
            }
        });
    },

    getParticipants: function() {
        let that = this;
        let requestData = {
            activityid: that.data.activityInfo.id,
            skey: app.getLoginFlag()
        };

        wx.request({
            url: api.queryParticipantsUrl,
            data: requestData,

            success: function(res) {
                let data = res.data;

                if (data.result === 0) {
                    that.setData({
                        participants: data.list || [],
                    });
                }
            },
            error: function(err) {
                console.log(err);
            }
        });
    },


    showInfo: function(info, icon = 'none') {
        wx.showToast({
            title: info,
            icon: icon,
            duration: 1500,
            mask: true
        });
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let _activityInfo = {};
        let that = this;

        for (let key in options) {
            _activityInfo[key] = decodeURIComponent(options[key]);
        }

        that.setData({
            activityInfo: _activityInfo
        });

        that.getPageData();
        that.getParticipants();

    },

    // 从上级页面返回时 重新拉去评论列表
    backRefreshPage: function() {

        let that = this;
        that.setData({
            commentLoading: true
        });

        that.getPageData();

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        if (wx.getStorageSync('isFromBack')) {
            wx.removeStorageSync('isFromBack')
            this.backRefreshPage();
        }
    },
    onShareAppMessage: function(res) {
        let that = this;
        if (res.from === 'button') {
            // 来自页面内转发按钮
            console.log(res.target)
        }
        return {
            title: that.data.activityInfo.name ,
            path: '/pages/activitys/activitys',
            imageUrl: that.data.activityInfo.image,
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
