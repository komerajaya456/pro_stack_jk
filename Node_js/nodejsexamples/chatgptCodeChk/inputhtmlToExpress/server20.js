const express=require('express')
const app=express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index20.html')
 
})

app.post('/login',(req,res)=>{
    const x="kkkkkkk"
    res.send("login page")
})

app.listen(3000,()=>{console.log("running")})