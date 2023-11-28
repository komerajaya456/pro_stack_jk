var arr=[1,2,3]
console.log(typeof(arr))//object, This is because arrays are a type of object in JavaScript.
arr.push(4);console.log(arr)//[1,2,3,4]
arr.pop();console.log(arr)//[1,2,3]
arr.pop(arr[0]);console.log(arr)//[1,2]
arr=[1,2,3,4,5]
console.log(arr)
//if u want to remove middel element we use splice 
//SYNTAX:-
//array.splice(startIndex, deleteCount, item1, item2, ...);
//startIndex: The index at which to start changing the array.
//deleteCount: The number of elements to remove.
//item1, item2, ...: Elements to add to the array, if any.

arr.splice(2,2,6,7,8)//2 items rm after index 2 && 6,7,8 added in that places
console.log(arr)//[1,2,6,7,8,5]
console.log(Array.isArray(arr))//true