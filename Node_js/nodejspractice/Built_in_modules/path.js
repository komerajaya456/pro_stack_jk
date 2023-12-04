const path = require("node:path")
const jk=require('./obj.js')
console.log(jk)
/*console.log(__filename)//it is file path with filename
console.log(__dirname)//it is file folder path

console.log(path.parse(__filename))
console.log(path.parse(__dirname))//parse used to all details

console.log(path.extname(__filename))//.js
console.log(path.basename(__filename))//last name in file directory

console.log("Done")
console.log(path.format(path.parse(__filename)))
console.log(path.isAbsolute('./data.json'))//check wether file exists or not
console.log(path.isAbsolute(__filename))*/
//path.relative('/path/from', '/path/to/file.txt'); // Returns: '../to/file.txt'

console.log(path.join("data.json"))