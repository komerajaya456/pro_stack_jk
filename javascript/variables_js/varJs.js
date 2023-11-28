console.log("hi")
var x=8
let y=10


const func =()=>{
  var xy=2
  let yx=3
  console.log(x)
  console.log(y)
}
xy=6
yx=5
zc=5
func()
console.log(yx)

// const para=document.querySelector('#para');
// para.innerText="para"


console.log(eval('45+35'))


console.log(5=='5') //true
console.log(5==='5') // false



function customLog(message) {
  // Set your condition here, e.g., only log messages containing the word "important"
  if (message.includes('important')) {
    console.log(message);
  }
}

// Example usage:
customLog("This message will not be logged");
customLog(`This message is important and will ${2}x${3} be logged`);
