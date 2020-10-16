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
        a_id: 0,
        city_id: 1,
        imagewidth: 0,          //缩放后的宽
        imageheight: 0,         //缩放后的高  
        background: [
            {
                "url":"https://img9.doubanio.com/view/photo/l/public/p2622313088.jpg",
            },
              {
                "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600712132984&di=c87c98842ed7cc9377db3d5d6e7684fa&imgtype=0&src=http%3A%2F%2Fd.ifengimg.com%2Fw600%2Fp0.ifengimg.com%2Fpmop%2F2018%2F0606%2FAB1AE0BDB2CC8F24674A884D966AFF9F141E3EEC1_size69_w715_h468.jpeg",
              },
              {
                "url":"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1763859254,2012419354&fm=26&gp=0.jpg",
               },
              {
                  "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600712423998&di=dd67e7b24b30991dd5a608e02fff9b6f&imgtype=0&src=http%3A%2F%2Fimgs.douguo.com%2Fupload%2Fkeditor_img%2F20160726%2F20160726165749_45990.jpg"
              },
              {
                  "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600712589267&di=6e8242fe1d6130c4c7f1143fabb7ee5d&imgtype=0&src=http%3A%2F%2Fimg.yxad.cn%2Fimages%2F20190128%2Fdc3457b3783a4d07b6aed32bcb774798.jpeg"
              }

        ],
            
            
    /*['demo-text-1', 'demo-text-2', 'demo-text-3'],*/

        Tokyo: [
            {
              "url": "https://i2.gqxz.com/uploads/ueditor/image/20200413/1586749768627888.jpg",
            }
          ],
        Osaka:[
            {
              "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600583818786&di=a5ba4731f36698a1b5e3dee4a7fd9985&imgtype=0&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2Fbfe4a48a781f6912dc61d62d9ca876dfe98691d2.jpg",
            }
          ],
        Kyoto:[
          {
            "url":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600591246602&di=20362b2cb25652a4e443c6cb9100900e&imgtype=0&src=http%3A%2F%2Fs2.lvjs.com.cn%2Fuploads%2Fpc%2Fplace2%2F2018-07-13%2F6e650de3-a702-4071-8881-66bf68aaf8cd.jpg",        
          }
        ]
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
    imageLoad: function (e) {
        var imageSize = imageUtil.imageUtil(e)
        this.setData({
          imagewidth: imageSize.imageWidth,
          imageheight: imageSize.imageHeight
        })
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
     * 获取所有书籍列表
     */
    getActivityList: function() {

        let that = this;

        wx.request({
            url: api.getActivitysUrl,
            data: {
                is_all: 1,
                Object
            },
            success: function(res) {
                let data = res.data;
                console.log(data);
                if (data.result === 0) {
                    console.log(typeof(data));
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
          typeWidth: screenWidth / 4 -30,
          typeHeight: screenWidth / 4 -30

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
