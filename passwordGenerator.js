class password{
    constructor(){
        console.log("this is a password generator")
        this.pass=""
    }
    generatePassword(len){
        let chars="asqwetdhgodyxmcnvz"
        let num="123456789"
        let special="$%#@^&*!"
        if(len<3){
            console.log("password must be atleast 3 length")
        }
        else{
            let i=0
            while(i<len){
                this.pass += chars[Math.floor(Math.random()*chars.length)]
                this.pass += num[Math.floor(Math.random()*num.length)]
                this.pass += special[Math.floor(Math.random()*special.length)]
                i +=3
            }
            this.pass=this.pass.substring(0,len)
            return this.pass
        }
    }
}

let p= new password()
console.log(p.generatePassword(6))