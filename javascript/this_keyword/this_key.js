console.log(typeof("hi"))//string
console.log(typeof(this))//window {object}

//this in method
const kom=()=>{
  let x=9
  console.log(this) //kom{} (object)
  this.value="priya"

}
kom()

//function object
const obj={
   talk(){
    console.log("hi")
  }
}
obj.talk()

const gow=()=>{
  console.log(this)
  
}
const hbn={name:"komera",age:8}
gow.call(hbn)


function tha(){
  console.log(this)
}
tha()
const newtha=new tha()
