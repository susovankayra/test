const express=require('express');

const app=express();
//const port=5987;
const port=process.env.PORT;

app.get('/',(req,res)=>{
    res.send('Hello from docker enviroment test');
})

app.listen(port,()=>{
    console.log(`App listen in port :${port}`);
    
})