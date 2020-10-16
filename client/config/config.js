// 服务器域
//const baseUrl                         = 'http://xx.xx.xxx.xxx:3003/';
const baseUrl                         = 'http://127.0.0.1:3003/';
///!you have to apply for a domain with https protocal to publish the app online

// 获取活动信息接口地址(可选择全部或单个书籍)
const getActivitysUrl           = baseUrl + 'api/activity/getActivitys';
// 写评论接口
const commentUrl                = baseUrl + 'api/comment/write';
// 查询当前用户是否已经报名活动并返回评论列表接口
const queryActivityUrl          = baseUrl + 'api/activity/queryActivity';
//查询当前活动所有已报名用户
const queryParticipantsUrl = baseUrl + 'api/activity/queryParticipants';
// 登录接口
const loginUrl                  = baseUrl + 'login';
// 获取当前用户已报名接口
const getBoughtActivitysUrl = baseUrl + 'api/user/getBoughtActivitys';
// 报名活动接口
const buyActivityUrl = baseUrl + 'api/order/buy';
//取消报名结偶
const cancelActivityUrl = baseUrl + 'api/order/cancel';


module.exports = {
        getActivitysUrl:                getActivitysUrl,
        commentUrl:             commentUrl,
        queryActivityUrl:               queryActivityUrl,
        queryParticipantsUrl: queryParticipantsUrl,
        loginUrl:                       loginUrl,
        getBoughtActivitysUrl:  getBoughtActivitysUrl,
        buyActivityUrl:                 buyActivityUrl,
        cancelActivityUrl : cancelActivityUrl
};
