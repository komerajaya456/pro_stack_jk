const express=require('express')
const app=express()

app.get('/',(req,res)=>{
  res.send("camed")
})

app.listen(3000,()=>{console.log("running")})

//console.log("running")