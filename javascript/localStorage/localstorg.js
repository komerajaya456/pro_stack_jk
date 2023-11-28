const obj={
  "name":"komera",
  "age" : 23,
  "gender":"male"
  
}



console.log(obj)
//localStorage.setItem("name","komera")
//localStorage.setItem("lastname", "Smith");


//localStorage only stores strings ,
//so convert object to String by[JSON.stringify(obj)]
//localStorage.setItem("user",JSON.stringify(obj))

//now convert String to object by[JSON.parse()]
// const myuser=localStorage.getItem("user")
// const cov_str_obj=JSON.parse(myuser)




// function kom(){
//   const hed=document.querySelector("#head")
//   hed.innerHTML=JSON.stringify(cov_str_obj.age)
// }


//Additional methods

//localStorage.clear() //clears all data

//localStorage.length //find no of key then we can access by ,,var key=localStorage.key[0]

console.clear()
var arr={"name":[1,2,3]}
console.log(typeof(arr.name))
