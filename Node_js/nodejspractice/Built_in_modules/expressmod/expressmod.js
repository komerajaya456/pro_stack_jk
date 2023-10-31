const express=require("express")
const apk=express() //we need to assign express in seperate var we cannot use 'express' directly
//express.get(route,function)
apk.get('/about',(rees,reeeq,next)=>{  //function(req,res),we can give any name,& position swap also, but 1st paramtr=request,2nd parmetr=response
  reeeq.send('hello, about page')
  next()
})


apk.get('/contact',function(req,res){
  res.send("hello,contact page")
})


apk.get('/',function(req,res){
  //console.log(req)  //user data
  //console.log(res)  //coming data
  res.send("Home page or Dashboard")
})

apk.listen(3000,()=>{ //this is also function() for checking in terminal printing
  console.log('running')
})