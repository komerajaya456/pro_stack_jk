//chk for gow laptop vs 




const express=require('express')
const apk=express()

const obj={name:"komera"}
apk.get('/',(req,res)=>{

  res.send(JSON.stringify(obj))
})

apk.listen(3000,()=>{console.log("connected to server")})