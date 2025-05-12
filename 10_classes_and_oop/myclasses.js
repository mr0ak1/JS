class user{
    constructor(username, email,password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return  `${this.password}abc`
    }

    changeUserName (){
        return `${(this.username).toUpperCase()}`
    }
}

const chai = new user("abhi","abhi@email.com",123)
console.log(chai.encryptPassword());
console.log(chai.changeUserName());
