const express=require('express');
const bp=require('body-parser');

const app=express();
const port=3000;

const todo=[]

app.use(bp.json());

app.get('/',(req,res)=>{res.send(todo)})

app.post('/addTodo',(req,res)=>{
    res.send(req.body.title)
    todo.push({title:req.body.title});
    res.status(200).send(todo);
})

app.listen(port,()=>{
    console.log(`Server running in port: ${port}`)
})