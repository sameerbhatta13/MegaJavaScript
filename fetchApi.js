// let p= fetch("https://randomuser.me/api/")
// p.then((Response)=>{
//     console.log(Response.status)
//     console.log(Response.ok)
//     return Response.text()
// }).then((value2)=>{
//     console.log(value2)
// })
const createTodo=async (todo)=>{


let options={
    method:"POST",
    headers: {
        "content-type":"application/json"
    },
    body:JSON.stringify(todo),
    // body:JSON.stringify({
    // //     title: 'sameer',
    // //     body: 'bhatta',
    // //     userId: 11,
    // //   }),
    //   }
}
   let p= await fetch('https://jsonplaceholder.typicode.com/posts',options )
    let response=await p.json()
    return response
}
const getTodo=async(id)=>{
    let response= await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
     let r=await response.json()
    return r
 }

const mainFunc=async()=>{
    let todo={
        title: 'sameer',
        body: 'bhatta',
        userId: 11,
      }
    
    let todor=await createTodo(todo)
    console.log(todor)
    console.log(await getTodo(101))
}

mainFunc()
   
    