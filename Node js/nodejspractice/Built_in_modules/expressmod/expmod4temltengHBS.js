const express=require('express')
var app=express()

app.set("view engine",'hbs')

app.get('/',(req,res)=>{
//  res.send('<h6>gello</h6>')
   res.render('index_hbs',{name:'koera'})
})


 
app.get('/profile/:username',(req,res)=>{
  console.log(req.params)
  res.send(`hello ${req.params.username}`)
  
})

app.listen(3030,()=>{
  console.log('running')
})
