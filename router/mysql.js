const express = require("express"),
router = express.Router();
const bodyParser= require('body-parser');
const mysql = require('mysql2');
const template = require('../public/page/templete.js');
const path = require('path');

router.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '111111',
    database : 'P_1'
});


router.get("/*",(req,res)=>{
    db.getConnection(function(err,connection){
        if(err)
            throw err;
        else{
            connection.query('SELECT * FROM board WHERE boardlist = "free" ', function(err,res){
                if(err){
                    console.log(err);
                }
                let boardlist = template.list(res);
                // let viewtemplate = template.HTML(title,boardlist);
                // response.writeHead(200);
                // response.end(viewtemplate);
                console.log(res);
            });
            connection.release();

        }
    });

    res.sendFile(path.join(__dirname,'../public/index.html'));
})

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
                console.log(boardlist);

            });
        }
        connection.release();
    });

    res.redirect('/');
})


module.exports = router;