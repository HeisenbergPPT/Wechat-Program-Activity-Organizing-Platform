// 用户相关的CRUD操作
const user = {
    queryById: 'select * from users where uid=?',
    add: 'insert into users set ?',
    hasUser: 'select count(*) as userCount,ubalance from users where uid=? group by ubalance',
    update: 'update users set ? where uid=?',
    getBoughtActivitys: 'select * from activitys right join orders on activitys.bkid=orders.bkid right join users on users.uid=orders.uid where users.skey=?',
    getBalance: 'select ubalance,uid from users where skey=?',
    reduceBalance: 'update users set ubalance=? where uid=?',
    getId: 'select users.uid,users.uname,comment.ctime from users left join comment on comment.uid=users.uid where users.skey=? and comment.ccontent=?'
};
//旧版本  getBoughtActivitys: 'select activitys.bkid,bkname,bkfile,bkcover from activitys right join orders on activitys.bkid=orders.bkid right join users on users.uid=orders.uid where users.skey=?',


// 活动相关的CRUD操作
const activity = {
    queryById: 'select * from activitys where bkid=?',
    queryAll: 'select * from activitys',
    queryActivityBySkey: 'select count(*) as buyCount from orders left join users on users.uid=orders.uid where users.skey=? and orders.bkid=?',
    getPrice: 'select bkprice from activitys where bkid=?',
    queryUsersByActivity: 'select users.uname, uavatar, activitys.nlimit from users left join orders on users.uid=orders.uid left join activitys on orders.bkid=activitys.bkid where orders.bkid=?'
};

// 评论相关的CRUD操作
const comment = {
    queryById: 'select * from comment where bkid=?',
    addComment: 'insert into comment (uid,uname,uavatar,bkid,bkname,ccontent) select uid,uname,uavatar,?,(select bkname from activitys where bkid=?),? from users where users.skey=?',
    queryComments: 'select * from comment where bkid=? limit 0,10'
};


// 订单相关的CRUD操作
const order = {
    queryById: 'select * from orders where bkid=?',
    buyActivity: 'insert into orders (uid,oprice,bkid) VALUES (?,?,?)',
    cancelActivity: 'delete from orders where uid=? and bkid=?'
};

// 接口凭据相关的CRUD操作
const access = {
    queryToken: 'select token from access'
};

module.exports = {
    user,
    order,
    comment,
    activity,
    access
}
