// function kom(){
//   var x=document.getElementById("head")
//   x.innerHTML="changed" 
  
//   fetch('http://localhost:3000/fetchapi',
//   {method:'POST',
//   headers:{'content-type':'appication/json'},
//   body:JSON.stringify({name:"komera",age:22}),}
//   )
//   .then((respone=>respone.json()))
//   .then((value=>{console.log(value)}))
// }
function sendDataToServer() {
const data = { key: 'value' };
fetch('http://localhost:3000/api/data',{method:'POST',headers:{'Content-Type': 'application/json',},body: JSON.stringify(data),})
  .then(response => response.json())
  .then(result => {console.log('Server response:', result);})
  .catch(error => {console.error('Error:', error);  });
        }