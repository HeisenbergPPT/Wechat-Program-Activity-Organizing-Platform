const $sqlOrderQuery = require('./sqlCRUD').order;
const $sqlUserQuery = require('./sqlCRUD').user;

const _ = require('./query');

const orders = {
    addActivityOrder: function (activityid, price, uid, balance) {
        return Promise.all([
            _.query($sqlOrderQuery.buyActivity, [uid, price, activityid]),
            _.query($sqlUserQuery.reduceBalance, [(balance - price), uid])
        ])
    },
    cancelActivityOrder: function (activityid, uid, balance) {
        return Promise.all([
            _.query($sqlOrderQuery.cancelActivity, [uid, activityid]),
            _.query($sqlUserQuery.reduceBalance, [balance, uid])
        ])
    }
};
module.exports = orders;
