
class user{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`usernme:${this.username}`);
        
    }
     createId(){
        return`123`
    }
}

const hitesh = new user("abhi")
console.log(hitesh);
// console.log(hitesh.createId());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@mail.com")
console.log(iphone);


iphone.logMe()

