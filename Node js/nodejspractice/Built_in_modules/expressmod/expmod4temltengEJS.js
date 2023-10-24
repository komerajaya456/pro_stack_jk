//template engines
const express=require('express')
var app=express()

app.set("view engine",'ejs')

app.get('/',(req,res)=>{
//  res.send('<h6>gello</h6>')
   res.render('index_ejs',{name:'komera'})
})


 
app.get('/profile/:username',(req,res)=>{
  console.log(req.params)
  res.send(`hello ${req.params.username}`)
  
})


app.listen(3000,()=>{
  console.log('running')
})
