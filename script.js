// let id1=document.getElementById("first")[0].firstElementChild.style.background="blue"
// console.log(id1)
// array.from(document.getElementsByTagName("li")).forEach((element )=> {
//     element.style.background="red"
// });

// document.getElementById("google").addEventListener('click',function(e){
//     window.location="https://google.com"
//     win.focus()
// })
// document.getElementById("fb").addEventListener('click',function(e){
//     window.location="https://facebook.com"
//     win.focus()
// })
// document.getElementById("twitter").addEventListener('click',function(e){
//     window.location="https://twitter.com"
//     win.focus()
// })

// setInterval(async function() {
//     let url="https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetch(url))
    
// }, 3000);

setInterval(async function() {
   document.querySelector("#bulb").classList.toggle("bulb")
    console.log(await fetch(url))
    
}, 200);