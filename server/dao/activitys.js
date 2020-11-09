const $sqlQuery = require('./sqlCRUD').activity;
const _ = require('./query');

const activitys = {
    getActivityInfo: function (isAll, activityid) {
        if (isAll) {
            return _.query($sqlQuery.queryAll, [])
        } else {
            return _.query($sqlQuery.queryById, [activityid]);
        }
    },
    queryActivityBySkey: function (activityid, skey) {
        return _.query($sqlQuery.queryActivityBySkey, [skey, activityid]);
    },
    getPriceById: function (activityid) {
        return _.query($sqlQuery.getPrice, activityid);
    },
    queryUsersByActivity: function (activityid) {
	return _.query($sqlQuery.queryUsersByActivity, [activityid]);
    }
};
module.exports = activitys;
