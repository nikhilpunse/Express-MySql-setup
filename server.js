const express = require("express");
const mysql = require("mysql");
const morgan = require("morgan");
const dotenv = require("dotenv");

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(morgan('dev'))

var con =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'test'
})

con.connect((err)=>{
    if(err){
        console.log('DB connection failed.');
    }else{
        console.log('DB connection success.');
    }
})


app.get('/test',(req,res)=>{
    res.status(200).send('<h1> Welcome to Nodejs Mysql app </h1>')
})

app.listen(PORT,()=>{
    console.log('server runing on port',PORT)
})