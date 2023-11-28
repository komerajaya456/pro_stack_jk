const express=require('express')
const apk=express()


apk.get('/home',(req,res)=>{
  
  res.render("<h1>heading<h1/>")
})

apk.listen(3000,()=>{console.log("connected to server")})