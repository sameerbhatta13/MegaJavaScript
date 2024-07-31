let p=new Promise((resolve,reject)=>{
    // alert("hey i am not resolved")
    setTimeout(() => {
        resolve(1)
    }, 2000);
})

//example of multiple handler to same promises
// p.then((value)=>{
//     console.log("congratulation the promise resolved")
// })
// p.then(()=>{
//     console.log("hurray")
// })

//promises chaining
p.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("hello")
        }, 3000);
    })
}).then((value)=>{
    console.log(value)
})