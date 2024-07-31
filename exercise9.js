//Problem 1
// const loadScript=async(src)=>{
//     return new Promise((resolve,reject)=>{
//         let script=document.createElement("script")
//         script.src=src
//         script.onload=()=>{
//             resolve(src+ "\ndone success")
//         }
//         document.head.append(script)
//     })
// }
//     let a= loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     a.then((value)=>{
//     console.log(value)
//     })

// const main1=async()=>{
//     console.log(new Date().getMilliseconds())
//     let a=await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
//     console.log(new Date().getMilliseconds())

// }
// main1()

//problem2
// let p = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject(new Error("this is not acceptable"))
//         }, 1000);
//     })
// }

// let a = async () => {
//     try {
//         let c = await p()
//         console.log(c)
//     } catch (error) {
//         console.log("this error has been handled")
//     }
// }
// a()

//problem 3
let p1=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(5)
        }, 1000);
    })
}
let p2=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(8)
        }, 2000);
    })
}
let p3=async ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(9)
        }, 3000);
    })
}
const run=async () =>{
    console.time("run")
    let a1= await p1() // this will take more amount of time
    let a2= await p2()
    let a3 = await p3()
    console.log(a1,a2,a3)
    console.timeEnd("run")

// //another way of effective doing above code
// console.time("run")
//     let a1=p1()
//     let a2=p2()
//     let a3=p3()
//     let a1a2a3=await Promise.all([a1,a2,a3])
//     console.log(a1a2a3)
//     console.timeEnd("run")

}
run()