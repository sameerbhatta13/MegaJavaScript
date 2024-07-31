// let a =async()=> {
//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("89")
//     }, 1000);
// })}

// //using iife methods to call a function 
// (async ()=> {
//     let b= await a()
//     console.log(b)
//     let c= await a()
//     console.log(c)
//     let d= await a()
//     console.log(d)
    
// })()


//Another example of IIFE

let b=(text,n)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(text)
        }, 1000*n);
    })
}
function sum(v1,v2,v3){
    return v1+v2+v3
}
let x=[1,2,4]
console.log(sum(...x)); // sometime it is necessary to give a semicolon to run the next process 

(async()=>{
    console.log(await b("hello",3))
    console.log(await b("world",5))
    // console.log(c)

})()