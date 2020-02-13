
const express = require('express')
const app = express()
const portNo = 80

var request = require('request');
var config  = require('./config.json');

//use path module
const path = require('path');


//use bodyParser middleware
const bodyParser = require('body-parser');

//use mysql database
const mysql = require('mysql');
const AWS = require('aws-sdk');

//Create Connection
const conn = mysql.createConnection({
    host: config.rds_host,
    user: config.rds_user,
    password: config.rds_password,
    database: config.rds_database
});


var cookieParser = require('cookie-parser')
var expressSession = require('express-session');

app.use(expressSession({
        secret:'my key',
        resave:true,
        saveUninitialized:true
}));
app.use('/', express.static('./public'));
 app.use('/users', require('./routes/users.js'));

app.listen(portNo, () => {
     console.log('서버 실행 완료:  ', `http://localhost:${portNo}`)
})
