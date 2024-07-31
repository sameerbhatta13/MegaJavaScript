async function weather() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i am the first")
        }, 1000);
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("i am the second")
        }, 6000);
    })
    console.log("p1 data fetching,please wait")
    let first = await p1
    console.log("data is fethched:" + first)

    console.log("p2 data is fetching ,please wait......")
    let second = await p2
    console.log("p2 data fetched:" +second)
    return [first, second]
}
const cherry = async () => {
    // console.log("i am the fastest here and do not follow the rule")
    console.log("i also follow the rule of await")
}
const main1 =async()=>{
console.log("who are you?")
let a = await weather()
let b= await cherry()

}
main1()
