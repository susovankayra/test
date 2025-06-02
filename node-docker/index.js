const express=require('express');
const bp=require('body-parser');
const bodyParser = require('body-parser');

const app=express();
const port=3000;

app.use(bp.json());

app.get('/',(req,res)=>{res.send('Hello I am from express')});

app.listen(port,()=>{
    console.log(`Server runing at port number :${port}`)
    
});