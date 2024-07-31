let p=new Promise((resolve,reject) => {
    console.log("promise is pending")
    setTimeout((e) => {
        console.log("i am promise and i am resolved")
        resolve(true)
    }, 3000);
    // console.log("hello")
})
let p1=new Promise((resolve,reject) => {
    console.log("promise is pending")
    setTimeout((e) => {
        // console.log("i am the promise and i am rejected")
        reject(new Error("i am  throwing error"))
    
    }, 3000);
    // console.log("hello")
})


// console.log(p,p1)
p.then((value)=>{
    console.log(value)
})
// p1.then((value)=>{
//     console.log("value")
// })
p1.catch((error)=>{
    console.log("some error occured in p2")
})