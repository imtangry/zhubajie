const express = require("express");
const path = require("path");
const app = express();
const index = require("./routers/index.js");
var options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('x-timestamp', Date.now());
    }
}
// 静态文件
app.use(express.static('public', options));
// 模版文件文件夹
app.set('views', './views');
// 模版引擎
app.set('view engine', 'ejs');

app.use("/goods",require("./routers/index"));
app.listen(80,()=>{console.log("success")});