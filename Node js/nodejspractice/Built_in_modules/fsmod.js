const fs=require("node:fs")
const file=fs.readFileSync("./index.html")//this will show in binary form like as below


/*<Buffer 3c 21 44 4f 43 54 59 50 45 20 68 74 6d 6c 3e 0a 0a 3c 68 74 6d 6c 3e 0a 3c 68 65 61 64 3e 0a 20 20 3c 6d 65 74 61 20 68 74 74 70 2d 65 71 75 69 76 3d ... 166 more bytes>*/
//SO WE USE utf-8 format
const file2=fs.readFileSync("./index.html","utf-8")
console.log(file2)

fs.readFile("./index.html",(error,data)=>{
  if (error){
    console.log(error)
  }
  else{console.log(data)}
})