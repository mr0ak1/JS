const user ={
    username : "hitesh",
    loginCount: 8,
    signedIn : true
}

console.log(user.username);

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
}

const userOne = new User("abhi",8,true)
const userTwo = new User("Kunal",13,false)
console.log(userOne);
console.log(userTwo);


