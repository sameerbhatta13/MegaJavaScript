// let first=document.getElementsByClassName("hey")
// let a = first.getAttribute("class")
// console.log(a)

// console.log(first.hasA)



// let a=document.getElementsByTagName("span")[0]
// let div=document.createElement('div')
// div.innerHTML="<h1>hello world</h1>"
// // a.append(div)
// a.prepend(div)
// a.replaceWith(div)


//insert adjacent html,element and text
// a.insertAdjacentHTML('beforebegin','<div class="before">how are you</div>')
// a.insertAdjacentHTML('beforeend','<div class="before">beforeend</div>')
// a.insertAdjacentHTML('afterbegin','<div class="before">afterbegin</div>')
// a.insertAdjacentHTML('afterend','<div class="before">afterend</div>')

// let b=document.getElementById("second")
// a.insertAdjacentElement("afterend",b)

//SetTimeout and SetTimeinterval
// const sum = (a,b)=>{
//     console.log("sum" +(a+b))
//     a+b
// }
// setTimeout(sum,4000,2,5)


// const health=(msg)=>{
//     console.log(msg)
// }
// let timeId= setInterval(health,6000,"are u ok")
// // clearInterval(timeId)

//Eventlistner and Eventremoval
let btn=document.getElementById("btn")
let a = prompt("enter the number 1 or 2")
let x=function(e){
    alert("hello world1")
}
let y=function(e){
    alert("hello world 2")
}
btn.addEventListener('click',x)

if(a==1){
    btn.addEventListener('click',x)
}
else if(a==2){
    btn.removeEventListener('click',x)
    btn.addEventListener('click',y)
}
else{
    alert("wrong input")
}