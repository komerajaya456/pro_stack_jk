const Even=require("events")//bcoz,events is class

//we should creat obj of Even class
const eventobj=new Even();

eventobj.on('my',()=>{//my is for calling
  console.log("komera")
})

eventobj.emit('my')

eventobj.on('otp',(bank,num)=>{
  console.log(`otp from ${bank} is ${num+3}`)
})
eventobj.emit("otp",'HDFC',341672)
