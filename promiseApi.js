let p = new Promise((resolve, reject) => {
    // alert("hey i am not resolved")
    setTimeout(() => {
        // resolve(1)
        reject(new Error("error"))
    }, 2000);
})
let p1 = new Promise((resolve, reject) => {
    // alert("hey i am not resolved")
    setTimeout(() => {
        resolve(2)
    }, 3000);
})
let p2 = new Promise((resolve, reject) => {
    // alert("hey i am not resolved")
    setTimeout(() => {
        resolve(3)
    }, 4000);
})
// 1. promise.all(promises)
// let promise_all = Promise.all([p, p1, p1])
// promise_all.then((value) => {
//     console.log(value)
// })

// //2. promise.allSettled(promise)
// let promise_allSettled = Promise.allSettled([p, p1, p2])
// promise_allSettled.then((value) => {
//     console.log(value)
// })

// //3.promise.race():- it will throw error if the first promises resolved throw error
// let promise_race = Promise.race([p, p1, p2])
// promise_race.then((value) => {
//     console.log(value)
// })

// //4.promise.any():- it will ignore error and show the next promises which is first resolve 
// let promise_any = Promise.any([p, p1, p2])
// promise_any.then((value) => {
//     console.log(value)
// })

// //5. promise.resolve():- make a resolved promise
// let promise_resovle= Promise.resolve(7)
// promise_resovle.then((value)=>{
//     console.log(value)
// })

//6. promise.reject():- makes an rejected promise with the given error
let promise_reject=Promise.reject(new Error("hery"))
promise_reject.then((value)=>{
    console.log(value)
})
