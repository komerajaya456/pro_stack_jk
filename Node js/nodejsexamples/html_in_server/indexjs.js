const express=require('express')

const app=express()
console.log('hi')
let x=5 
function kom(){
  let y=document.getElementById("head")
  y.innerHTML="changed"
}

app.set("view engine","ejs")

app.get('/',(req,res)=>{
  res.render("indexj")
})


app.listen(3000,()=>{
  console.log("running")
})