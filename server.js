const express = require("express");
// createError = require('http-errors'),
const mysql = require('./router/mysql');
const server = express();
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackConfig = require("./webpack.config.js");
const compiler = webpack(webpackConfig);

// server.set('views', path.join(__dirname,'views'));
// server.engine('html', require('ejs').renderFile);
// server.set('view engine','html');
server.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      stats: { colors: true },
    })
  );
server.use(express.static(__dirname + "/public"))
server.use(mysql)

// server.get("/*",(req,res)=>{
//     res.sendFile(__dirname+"/views/index.html");
//     // res.render('index', { date:'Express', text:"yess", author:"익명" });
// })


// server.get("/",(req,res)=>{
//     throw new createError.BadRequest();
// })

server.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log("The server is listening on port 3000");
})
