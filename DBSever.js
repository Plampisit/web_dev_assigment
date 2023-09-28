var express = require('express')
,bodyParser = require('body-parser');
var cors = require('cors');
const mysql = require('mysql2');
const { del } = require('express/lib/application');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'dbs'
});

var app = express()
app.use(cors())
app.use(bodyParser.json())

///(1)
app.get('/member', function (req, res, next) {
    connection.query(
        'SELECT * FROM `member`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})
///(2)
app.post('/member', function (req, res, next) {
    connection.query(
        'INSERT INTO `member`(`m_email`, `m_password`, `m_name`) VALUES (?, ?, ?)',
        [req.body.m_email, req.body.m_password, req.body.m_name],
        function (err, results, fields) {
            
            if (err == null) {
                text = "create " 
                res.json(text)
            } else {
                res.json(err)
            }
        }
    );
})
//(3)
app.get('/member/:m_id', function (req, res, next) {
    const id = req.params.m_id;
    connection.query(
        'SELECT * FROM `member` WHERE `m_id` = ?',
        [id],
        function (err, results, fields) {
            if (results == "") {
                res.json("404 Not Found")
            } else {
                res.json(results)
            }

        }
    );
})
//(4)
app.put('/member', function (req, res, next) {
    const id = req.body.m_id;
    connection.query(
        'UPDATE `member` SET `m_email`= ?,`m_password`= ?,`m_name`= ? WHERE `m_id` = ?',
        [req.body.m_email, req.body.m_password, req.body.m_name, req.body.m_id],

        function (err, results, fields){
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})
//(5)
app.delete('/member', function (req, res, next) {
    const id = req.body.m_id;
    connection.query(
        'DELETE FROM `member` WHERE m_id = ?',
        [id],

        function (err, results, fields) {
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})
//(6)
app.get('/course', function (req, res, next) {
    connection.query(
        'SELECT * FROM `course`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})
//(7)
app.post('/course', function (req, res, next) {
    connection.query(
        'INSERT INTO `course`(`c_name`, `c_description`, `c_price`) VALUES (?, ?, ?)',
        [req.body.c_name, req.body.c_description, req.body.c_price],
        function (err, results, fields) { 
            if (err == null) {
                text = "create " 
                res.json(text)
            } else {
                res.json(err)
            }
        }
    );
})
//(8)
app.get('/course:c_id', function (req, res, next) {
    const id = req.params.c_id;
    connection.query(
        'SELECT * FROM `course` WHERE `c_id` = ?',
        [id],
        function (err, results, fields) {
            if (results == "") {
                res.json("404 Not Found")
            } else {
                res.json(results)
            }

        }
    );
})
//(9)
app.put('/course', function (req, res, next) {
    const id = req.body.c_id;
    connection.query(
        'UPDATE `course` SET `c_name` = ?, `c_description` = ?, `c_price` = ? WHERE `c_id` = ?',
        [req.body.c_name, req.body.c_description, req.body.c_price, req.body.c_id],

        function (err, results, fields) {
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})
//(10)
app.delete('/course', function (req, res, next) {
    const id = req.body.c_id;
    connection.query(
        'DELETE FROM `course` WHERE c_id = ?',
        [id],

        function (err, results, fields) {
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})
//(11)
app.get('/enroll', function (req, res, next) {
    connection.query(
        'SELECT * FROM `enroll`',
        function (err, results, fields) {
            res.json(results)
        }
    );
})
//(12)
app.post('/enroll', function (req, res, next) {
    connection.query(
        'INSERT INTO `enroll`(`m_id`, `c_id`, `cer_start`, `cer_expire`) VALUES (?, ?, ?, ?)',
        [req.body.m_id, req.body.c_id, req.body.cer_start, req.body.cer_expire],
        function (err, results, fields) {
            if (err == null) {
                text = "create " 
                res.json(text)
            } else {
                res.json(err)
            }
        }
    );
})
//(13)
app.get('/enroll/:cer_id', function (req, res, next) {
    const id = req.params.cer_id;
    connection.query(
        'SELECT * FROM `enroll` WHERE `cer_id` = ?',
        [id],
        function (err, results, fields) {
            if (results == "") {
                res.json("404 Not Found")
            } else {
                res.json(results)
            }

        }
    );
})
//(14)
app.put('/enroll', function (req, res, next) {
    const id = req.body.cer_id;
    connection.query(
        'UPDATE `enroll` SET `m_id`= ?,`c_id`= ?,`cer_start`=? ,`cer_expire`=? WHERE `cer_id` = ?;',
        [req.body.m_id, req.body.c_id, req.body.cer_start, req.body.cer_expire, req.body.cer_id ],
        function (err, results, fields) {
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})
//(15)
app.delete('/enroll', function (req, res, next) {
    const id = req.body.cer_id;
    connection.query(
        'DELETE FROM `enroll` WHERE cer_id = ?',
        [id],

        function (err, results, fields){
            if (results.affectedRows == 1) {
                res.json("200 OK")
            } else {
                res.json("404 Not Found")
            }
        }
    );
})
//(16)
app.get('/enroll/member/:m_id', function (req, res, next) {
    const id = req.params.m_id;
    connection.query(
        'SELECT * FROM `enroll` WHERE `m_id` = ?',
        [id],
        function (err, results, fields) {
            if (results == "") {
                res.json("404 Not Found")
            } else {
                res.json(results)
            }

        }
    );
})
//(17)
app.get('/enroll/course/:c_id', function (req, res, next) {
    const id = req.params.c_id;
    connection.query(
        'SELECT * FROM `enroll` WHERE `c_id` = ?',
        [id],
        function (err, results, fields) {
            if (results == "") {
                res.json("404 Not Found")
            } else {
                res.json(results)
            }

        }
    );
})

app.listen(1000, function () {
    console.log('CORS-enabled Web Server listening on port 1000' )
})