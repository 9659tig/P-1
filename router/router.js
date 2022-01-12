const express = require("express"),
router = express.Router();
const bodyParser= require('body-parser');
const mysql = require('mysql2');

router.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createPool({
    host : 'localhost',
    user : 'root',
    password : '111111',
    database : 'opentutorials'
});

router.post('/assignment', (req, res) => {
    let boardlist = req.body.boardlist;
    let title = req.body.title;
    let description = req.body.description;

    db.getConnection(function(err,connection){
        if(err)
            throw err;
        else{
            connection.query('INSERT INTO topic (title, description, created, author) VALUES(?,?,NOW(),"익명")',
            [title, description], function(err,results){
                if(err){
                    console.log(err);
                }
                console.log(results);
            });

            connection.query('SELECT * FROM topic', function(err,results,fields){
                if(err){
                    console.log(err);
                }
                console.log(results);
            });

            connection.release()
        }
    });
    // db.query('INSERT INTO topic (title, description, created, author) VALUES(?,?,NOW(),"익명")',
    // [title, description], function(err,results){
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(results);
    // });

    // db.query('SELECT * FROM topic', function(err,results,fields){
    //     if(err){
    //         console.log(err);
    //     }
    //     console.log(results);
    // });

})

module.exports = router;