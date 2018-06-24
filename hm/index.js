const express = requrie("express");
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
app.set('views', './views');
app.set('view engine', 'ejs');
app.use(express.static('public', options));
app.use();