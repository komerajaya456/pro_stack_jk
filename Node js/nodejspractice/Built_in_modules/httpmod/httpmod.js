const http=require("http")
const fs=require("node:fs")


const server=http.createServer((req,res)=>{
  const obj={"name":"jk","age":21}
  const htmlgow=fs.readFileSync("./index.html") //instead of [readFile],bcoz show content all at once && and if html contain large data in temperory buffer uncessary memory we studied in streams ,we can se streams
  
  //res.writeHead(300,{"content-Type":"text/plain"})
  //res.writeHead(300,{"content-Type":"application/json"})
  res.writeHead(300,{'content-Type':'text/html'})
  
  //res.end(`hello ${obj.name}`)
  //res.end(JSON.stringify(obj))
  
  //res.end('<h1 style="color:pink">headings h1</h1><h6>hello<h6>')//so much lengthy string 
  //Instead we use .html file 
  res.end(htmlgow)
})

server.listen(7067,()=>{
  console.log("server running")
})