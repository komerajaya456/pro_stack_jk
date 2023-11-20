
const myarr=[1,2,3,4]
//array.map(function(currentValue, index,arr), thisValue)
const list=myarr.map((v,i,a)=>{return([[v],[i],a])})
console.log(list)
// Restarting 'index.js'                
//[ 
//  [ [ 1 ], [ 0 ], [ 1, 2, 3, 4 ] ],
//  [ [ 2 ], [ 1 ], [ 1, 2, 3, 4 ] ],
//  [ [ 3 ], [ 2 ], [ 1, 2, 3, 4 ] ],
//  [ [ 4 ], [ 3 ], [ 1, 2, 3, 4 ] ]
// ]

const list2=myarr.map((v,i,a)=>{return([v,i,a])})
console.log(list2)

//[
//  [ 1, 0, [ 1, 2, 3, 4 ] ],
//  [ 2, 1, [ 1, 2, 3, 4 ] ],
//  [ 3, 2, [ 1, 2, 3, 4 ] ],
//  [ 4, 3, [ 1, 2, 3, 4 ] ],
//]



const myarr2= [
  {name:"gow",id:1},
  {name:"hvn",id:2},
  {name:"jk",id:1}
  ]

const obj_lis=myarr2.map((val,i,arr)=>{return([val.name,val.id])})
console.log(obj_lis)


//Map object
//Syntax

//new Map([[key1,value1],[key2,value2],...]) 
//key,value both can be any datatype
const mymapobj=new Map([
  [1,{name:"gow",id:1}],
  [2,{name:"hvn",id:2}],
  [3,{name:"jk",id:3}]
  ])
console.log(mymapobj)





//we can also use in forEach as for loop 
const arr4=[{name:"gow",id:1},{name:"gow",id:1}]
const jk= arr4.forEach((value)=>{return("hi")})

console.clear()
console.log(jk)
mymapobj.set("hi",{name:"ha"})
console.log(mymapobj)


const myarr5= [
  {name:"gow",id:1},
  {name:"hvn",id:20},
  {name:"jk",id:1}
  ]
  
const mymapobj2=new Map(myarr5.map((val,i)=>{return([i,val])}))
console.log(mymapobj2)

const hp=mymapobj2.forEach((val,key)=>{return(val)})
console.log(hp)

//conclude both arr.map((val,i,array)=>{}) 
//                   && 
//      const obj=new Map([[key,val],[key,val]])

//                  &&
//we cant assign to variables in mapped_2darray.forEach & arr.forEach ,but we can in array.map((v,i,arr)=>{return()})


//ARE SAME we can use 10 methods

//new Map()	Creates a new Map object
//set()	Sets the value for a key in a Map
//get()	Gets the value for a key in a Map
//clear()	Removes all the elements from a Map
//delete()	Removes a Map element specified by a key
//has()	Returns true if a key exists in a Map
//forEach()	Invokes a callback for each key/value pair in a Map
//entries()	Returns an iterator object with the [key, value] pairs in a Map
//keys()	Returns an iterator object with the keys in a Map
//values()	Returns an iterator object of the values in a Map
//Property	Description
//size	Returns the number of Map elements