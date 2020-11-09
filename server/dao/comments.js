const $sqlQuery = require('./sqlCRUD').comment;
const _ = require('./query');

const comments = {
    getCommentsBySkey: function(activityid) {
        return _.query($sqlQuery.queryComments, activityid);
    },
    addCommentBySkey: function(skey, content, activityid) {
        return _.query($sqlQuery.addComment, [activityid, activityid, content, skey]);
    }
};
module.exports = comments;
