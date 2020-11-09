const Orders = require('../dao/orders');
const Users = require('../dao/users');
const Activitys = require('../dao/activitys');

module.exports = {
    /**
     * 根据用户skey标识，兑换当前书籍
     */
    buyActivityBySkey: function (req, res, next) {
        // 获取用户余额
        let uid, balance, price;

        const {
            skey,
            activityid
        } = req.body;

        // 获取当前书籍的积分价值
        Activitys.getPriceById(activityid)
        .then((resData) => {

            if (resData && resData[0] && resData[0].bkprice) {
                
                price = Number(resData[0].bkprice);

                // 获取当前用户积分余额
                return Users.getUserBalance(skey);

            } else {
                res.json({
                    result: -3,
                    errmsg: '书籍信息出错'
                })
            }

        })
        .then((resData) => {
            // 如果当前用户余额可以继续兑换当前书籍
            if (resData && resData[0] && !isNaN(resData[0].ubalance) && resData[0].uid) {
                
                if (Number(resData[0].ubalance) >= price) {
                    uid = resData[0].uid;
                    balance = Number(resData[0].ubalance);

                    // 兑换书籍，添加订单并更新用户余额信息
                    return Orders.addActivityOrder(activityid, price, uid, balance);
                } else {
                    
                    res.json({
                        result: -4,
                        errmsg: '余额不足，无法购买'
                    })

                }

            } else {
            
                res.json({
                    result: -3,
                    errmsg: '用户信息出错'
                })

            }

        })
        .then((resData) => {
            if(resData && resData[0] && resData[1]) {
                res.json({
                    result: 0,
                    errmsg: '兑换成功'
                })
            } else {
                res.json({
                    result: -5,
                    errmsg: '兑换失败'
                })
            }
        })
        .catch((e) => {
            res.json({
                result: -3,
                errmsg: '网络错误'
            })
        })
    },

    cancelActivityBySkey: function (req, res, next) {
	        // 获取用户余额
        let uid, balance, price;

        const {
            activityid,
	    skey
        } = req.body;

        // 获取当前书籍的积分价值
        Activitys.getPriceById(activityid)
        .then((resData) => {

            if (resData && resData[0] && resData[0].bkprice) {

                price = Number(resData[0].bkprice);
		console.log("price:",price);
                // 获取当前用户积分余额
                return Users.getUserBalance(skey);

            } else {
                res.json({
                    result: -3,
                    errmsg: '书籍信息出错'
                })
            }

        })
        .then((resData) => {
            if (resData) {
                uid = resData[0].uid;
                balance = Number(resData[0].ubalance);

                // 兑换书籍，添加订单并更新用户余额信息
                return Orders.cancelActivityOrder(activityid,  uid, balance);
                

            } else {

                res.json({
                    result: -3,
                    errmsg: '用户信息出错'
                })

            }

        })
        .then((resData) => {
            if(resData && resData[0] && resData[1]) {
                res.json({
                    result: 0,
                    errmsg: '取消成功'
                })
            } else {
                res.json({
                    result: -5,
                    errmsg: '取消失败'
                })
            }
        })
        .catch((e) => {
            res.json({
                result: -3,
                errmsg: '网络错误'
            })
        })
    }

}
