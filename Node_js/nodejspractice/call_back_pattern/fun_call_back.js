// function student(name){
//   console.log(`hello ${name}`)
// }
// //student('gow')
// function leader(name,anyfunction){
//   const x=anyfunction(name)
//   console.log(`kk ${x}`)
// }
// leader(`gow`,student)
/*
function add(x,y){
  return x+y
}

function sub(x,y){
  return x-y
}

function calci(x,y,operator){
  return operator(x,y)
}
console.log(calci(2,3,add))*/

let add=(x,y)=>{
  return x+y
}

let sub=(x,y)=>{
  return x-y
}

let calci=(x,y,operator)=>{
  return operator(x,y)
}
console.log(calci(2,3,add))