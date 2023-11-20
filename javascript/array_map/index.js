// const myarr = [
//   {name:"gow",id:1}
//   {name:"hvn",id:2}
//   {name:"jk",id:1}
//   }
//   ]

const myarr2=[1,2,3,4]
//array.map(function(currentValue, index,arr), thisValue)
const list=myarr2.map((v,i,a)=>{return([[v],[i],a])})
console.log(list)
// Restarting 'index.js'                
//[ 
//  [ [ 1 ], [ 0 ], [ 1, 2, 3, 4 ] ],
//  [ [ 2 ], [ 1 ], [ 1, 2, 3, 4 ] ],
//  [ [ 3 ], [ 2 ], [ 1, 2, 3, 4 ] ],
//  [ [ 4 ], [ 3 ], [ 1, 2, 3, 4 ] ]
// ]

const list2=myarr2.map((v,i,a)=>{return([v,i,a])})
console.log(list2)

//[
//  [ 1, 0, [ 1, 2, 3, 4 ] ],
//  [ 2, 1, [ 1, 2, 3, 4 ] ],
//  [ 3, 2, [ 1, 2, 3, 4 ] ],
//  [ 4, 3, [ 1, 2, 3, 4 ] ],
//]

