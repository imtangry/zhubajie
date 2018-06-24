var express = require('express');
var ejs = require("ejs");
var router = express.Router();

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now());
    next();
});
// 查询
router.get('/', function(req, res) {
    res.render('index', { title: 'Hey', message: 'Hello there!'});
});
// 增加
router.post('/', function(req, res) {
    res.send('About birds');
});
// 删除
router.delete('/:id', function(req, res) {
    res.send('About birds');
});

module.exports = router;

