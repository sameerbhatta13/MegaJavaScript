// greet() //it will work because of hoisting of js
// function greet(){
//     console.log("hello")
// }



// console.log(a)
// var a=9; //this will show undefine output because declerated hoisted to the top but not initializatio


greet1() // it will show error ,function expression and class expression are not hoisted
let greet1=function (){
    console.log("hello")
}