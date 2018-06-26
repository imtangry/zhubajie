// 执行查询的地方，感觉不需要DAO了，直接整合在一起
var db = require("../common/mysql");
var _=exports;
_.getAllGoods=function(){
    var sql = "select * from goods";
    return db(sql,[]);
};
_.insertGood=function(values){
    var sql = "insert into goods values(null,?,?,?,?)";
    return db(sql,values);
};
_.updateGood=function(id,values){
    var sql = `update goods set name=?,price=?,num=?,descp=? where id =${id}`;
    return db(sql,values);
}
_.deleteGood=function(id){
    var sql = `delete goods where id =${id}`;
    return db(sql,[]);
}