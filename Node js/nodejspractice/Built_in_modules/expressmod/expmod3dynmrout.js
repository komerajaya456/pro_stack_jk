//dynamic routing
const express=require('express')
var app=express()


app.use((req,res,next)=>{
  console.log('middleware')
  next()
})



app.get('/:page',(req,res)=>{  //params=page
  console.log(req.params)
  res.send(`hello ${req.params.page}`)
})

app.get('/profile/:username',(req,res)=>{
  console.log(req.params)
  res.send(`hello ${req.params.username}`)
  
})




app.listen(8080,()=>{console.log('running')})