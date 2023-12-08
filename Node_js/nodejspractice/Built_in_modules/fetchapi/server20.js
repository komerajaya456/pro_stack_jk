//const { response } = require("express");

fetch('http://localhost:3000/',{method:'POST',
headers: {'Content-Type': 'application/json',},
body:"hello fetch body"
})

.then((response)=>{return response.text()})
.then((value)=>{console.log(value)})