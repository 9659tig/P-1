// const test = require( "../public/index.js");

const express = require("express"),
router = express.Router();
const bodyParser= require('body-parser');
const { response } = require("express");
const mysql = require('mysql2');
var path = require('path');
const template = require('../public/page/templete.js');

router.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '111111',
    database : 'P_1'
});

router.post('/assignment', (req, res) => {
    let boardlist = req.body.boardlist;
    let title = req.body.title;
    let description = req.body.description;
    // let date = req.body.date;
    // let author = req.body.author;

    db.getConnection(function(err,connection){
        if(err)
            throw err;
        else{
            connection.query('INSERT INTO board (boardlist, title, description, created) VALUES(?,?,?,NOW())',
            [boardlist, title, description], function(err,results){
                if(err){
                    console.log(err);
                }
            });

            connection.query('SELECT * FROM board WHERE boardlist = "free" ', function(err,results){
                if(err){
                    console.log(err);
                }
                let list = template.list(results);
                let html = template.HTML(list)



                // export default function test(when, what, who){
                //     when.innerText = date;
                //     what.innerText = text;
                //     who.innerText = author;
                // }

                // response.writeHead(200);
                // response.end(template);
                console.log(results);
                response.writeHead(200);
                response.end("html");

                res.redirect('/');
            });
            // console.log(req.body);
            connection.release()
        }
    });
})

module.exports = router;