var express = require('express');
var router = express.Router();
var service = require("../service/goodsService");
// 获取所有商品
router.get("/", function (req, res, next) {
    service.getAllGoods().then(function (data) {
        console.log(data);
        res.render("goods", {goods: data});
    })
});
// 添加一个商品
router.post("/", function (req, res, next) {
    var body = req.body;
    var values = [
        body.name,
        body.price,
        body.num,
        body.descp
    ];
    console.log(values);
    service.insertGood(values).then(function (data) {
        res.send(data);
    })
});
// 修改一个商品
router.post("/:id", function (req, res, next) {
    var body = req.body;
    var id=body.id;
    var values = [
        body.name,
        body.price,
        body.num,
        body.descp
    ];
    console.log(values);
    service.updateGood(id,values).then(function (data) {
        res.send(data);
    })
});
// 删除一个商品
router.get("/del", function (req, res, next) {
    var id = req.body.id;
    service.deleteGood(id).then(function (data) {
        res.send(data);
    })
});
module.exports=router;