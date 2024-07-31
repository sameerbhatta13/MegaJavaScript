function loadScript(src,callback){
    let script=document.createElement("script")
    script.src=src
    script.onload=function(){
        console.log("srcipt loaded "+src)
        callback(null,src)
    }
    script.onerror=function(){
        console.log("Error loading script with SRC:" +src)
        callback(new Error("src got some error"))
    }
    document.body.appendChild(script)

}
function hello(error,src){
    if(error){
        console.log(error)
    return
    }
    alert("hello"+src)
}
function goodmorning(error,src){
    if(error){
        console.log(error)
    }
    alert("goodmorning" +src)
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)