const express=require('express')
const app=express()
app.use(express.json());



app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index10.html')  
}) 



app.post('/submit', async (req, res) => {
    const userInputValue = req.body.userInput;
  
      res.send(`Input value saved to MongoDB: ${userInputValue}`);
  
  });
  





app.listen(3000,()=>{console.log(`running ${3000}`)})