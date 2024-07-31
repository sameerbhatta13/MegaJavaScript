// try{
//     let age=prompt("enter age")
//     age = Number.parseInt(age)
//     if(age>120){
//         throw new ReferenceError("this is not possible")
//     }
//     else{

//         console.log("the script is still running")
//     }
// }catch(error){
//     console.log(error.name)
//     console.log(error.messege)
//     console.log(error.stack)
// }


//example of finally block:- it will run either error occured or not
try {
    let a=0
    console.log(program) //this is an error
    console.log("runnign successfully")
} catch (error) {
    console.log("this is an error")
    console.log(p) //this is an error but finally again excuted 
}
finally{
    console.log("program closed")
    //they are used for
    //exit the loop
    //close the file
}