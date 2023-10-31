//middleware

const express=require("express")
const app=express()


app.use((req,res,next)=>{
  console.log("middleware started")
  //res.send("middle ware"); #we cant write this here
  next()
})

app.use((req,res,next)=>{
  console.log("middleware started 2")
  //res.send("middle ware"); #we cant write this here
  next()
})



app.get('/routing',(req,res)=>{
  res.send("hello there komera")
})

app.listen(8082,()=>{console.log("runnig")})