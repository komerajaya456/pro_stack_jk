const express=require("express")


app.use(express.json())//this will print json.sringify

const apk=express() //we need to assign express in seperate var we cannot use 'express' directly
//express.get(route,function)
apk.get('/about',(rees,reeeq,next)=>{  //function(req,res),we can give any name,& position swap also, but 1st paramtr=request,2nd parmetr=response
  reeeq.send('hello, about page')
  next()
})


apk.get('/contact',function(req,res){
  res.send("hello,contact page")
    //res.json({name:"komera"})
  //res.sendFile(path.join(__dirname,'index.html'))
  //res.status(404).send('Not Found')
  
  //res.render(view[, locals][, callback])Renders a view template.res.render('index', { title: 'Express' });
  
  //res.redirect(301, '/new-path')
  
  //res.cookie('username', 'John Doe', { maxAge: 900000, httpOnly: true });
  
  //res.clearCookie('username');
})


apk.get('/',function(req,res){
  //console.log(req)  //user data
  //console.log(res)  //coming data
  res.send("Home page or Dashboard")
})

apk.listen(3000,()=>{ 
  //this is also function() for checking in terminal printing
  console.log('running')}