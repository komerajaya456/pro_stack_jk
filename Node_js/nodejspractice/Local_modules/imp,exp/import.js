//just require will exucute index.js 
require('./export.js')  
require('../Return val without function/index.js')
//but whenwe want particulqr function of index.js to use in this code we assign function to variable & we should use export.modules to that file
const add = require('./export.js')
const sum=add(5,6)
console.log(sum)
