const express = require("express"),
// createError = require('http-errors'),
server = express();
const router = require('./router/router');

server.use(express.static(__dirname + "/public"))
server.use(router)


server.get("/",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

// server.use((req,res)=>{
//     res.sendFile(__dirname+"/404.html");
// })
// server.get("/",(req,res)=>{
//     throw new createError.BadRequest();
// })

server.listen(3000, (err)=>{
    if (err) return console.log(err);
    console.log("The server is listening on port 3000");
})
