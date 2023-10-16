const exp=require('./exp2.js')

const sum1=exp.add(4,5)
const sub1=exp.sub(6,6)
console.log(sum1)
console.log(sub1)

const {add,sub}=exp
console.log(add(5,5))
console.log(sub(7,8))
