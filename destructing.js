// let arr=[1,2,34,5,6,7,87]
// let [a,,,...d]=arr
// // console.log(a,b,c,d)
// console.log(a,d)


//another example
let {a,b}={a:1,b:2}
console.log(a,b)


//spread syntax
let arr1=[3,5,4]
const obj={...arr1}
console.log(obj)

 function sum(v1,v2,v3){
    return v1+v2+v3
}
console.log(sum(...arr1))

let obj2={
    name:"sameer",
    company:"xyzcompany",
    address:"kathmadu"
}
console.log({...obj2,name:"harish"}) //this will change the name of person from the object
console.log({name:"hari",...obj2}) // this will not change the name of person as spread operator is write after the assignment of name