fetch("http://localhost:3000/")
//compulsary we have two thens or values
.then((response)=>{
  console.log(response.status) //200
  console.log(response.ok)  //if(200<status<299 ) return true;
  
  //headers={type:string,value:html/text}
  //these are from response
  console.log(response.headers)
  return  response})
.then((value)=>{console.log((value))})

// let value="komew"
// const kom = (value => console.log(value))// same as (value)=>{console.log(value);} 
