const express = require("express"),
// createError = require('http-errors'),
server = express();
const router = require('./router/router');
const path = require('path');

// server.set('views', path.join(__dirname,'views'));
// server.engine('html', require('ejs').renderFile);
// server.set('view engine','html');

server.use(express.static(__dirname + "/public"))
server.use(router)

server.get("/*",(req,res)=>{
    res.sendFile(__dirname+"/views/index.html");
    // res.render('index', { date:'Express', text:"yess", author:"익명" });
})


// server.get("/",(req,res)=>{
//     throw new createError.BadRequest();
// })

server.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log("The server is listening on port 3000");
})
