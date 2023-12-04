const express=require("express")
const path=require("path")
const app= express()

app.use(express.json())//this will print json.sringify
app.get('/',(req,res)=>{
  console.log("hello")
  req.body="komera"
  res.send("camed")
  console.log((req))
  console.log(typeof(res.body))

  
})

app.post('/fetch/',(req,res)=>{
  console.log("posted")
  
  res.send("hello there")
  console.log(res.body) 
})



app.listen(3000,()=>{
  console.log("running")
  // console.log(__dirname)
  // console.log(path.parse(__dirname))
  // console.log(__filename)
  // console.log(path.parse(__filename))
  // console.log(path.format(path.parse(__filename)))
  // console.log("hi")
  // console.log(path.format({dir: '/pat/to',base: 'yourfile.js',}))
})






// const express = require('express');
// const app = express();
// const port = 3000;


// app.use(express.json());

// // Handle POST request to /api/data
// app.post('/api/data', (req, res) => {
//     const receivedData = req.body;
//     console.log('Received data from client:', receivedData);

//     // Process data or perform other tasks here

//     res.json({ message: 'Data received successfully!' });
// });

// // Serve HTML file
// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html');
// });

// // Start server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
// });