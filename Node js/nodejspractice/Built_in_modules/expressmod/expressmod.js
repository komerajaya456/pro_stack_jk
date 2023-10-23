const express=require("express")
const apk=express() //we need to assign express in seperate var we cannot use 'express' directly
//express.get(route,function)
apk.get('/about',(rees,reeeq)=>{  //function(req,res),we can give any name,& position swap also, but 1st paramtr=reuest,2nd parmetr=response
  reeeq.send('hello komera jaya')
})
apk.listen(3000,()=>{ //this is also function() for checking in terminal printing
  console.log('runnung')
})