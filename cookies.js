//cookies are small string of data stored directly in the browser, in JS document.cookie provides access to cookies
//alert(document.cookie)
// console.log(document.cookie)
// document.cookie="name:harry"
// console.log(document.cookie)

let key=prompt("enter your key")
let value=prompt("enter your value")
//for giving speacial character to cookie key we use encode and to get actual key we use decodeURIcomponent
document.cookie=`${encodeURIComponent(key)}:${encodeURIComponent(value)}`
console.log(document.cookie)
console.log(decodeURIComponent(`${key}`))

