
class user{
    constructor(user){
        this.username = user
    }

    logMe(){
        console.log(`User is logged in ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }

}

const chai =new Teacher("akkk","akk@321,com",567)
console.log(chai);
chai.addCourse()
chai.logMe()
