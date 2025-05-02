// object literals

const mySym = Symbol("key1")

const JsUser = {

    name: "Hitesh",
    "full Name": "Hitesh Chaudhary",// this cANT be acess by dot notatiomn
    age : 18,
    [mySym]: "mykey1",
    location : "Jaipur",
    email: "hitesh@google.com",
    isLoggedIN : false,
    lastLoginDays: ["Monday", "Saturday"],
    
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full Name"]);//only be acessed by using bracket notation
// console.log(JsUser[mySym])

// JsUser.email = "ak@google.com"
//Object.freeze(JsUser)//after using this we will not be able to update the values.

//JsUser.email = "ak@gmail.com"
// console.log(JsUser);

JsUser.greetings = function(){
    console.log("Hello JS user");
    
}

JsUser.greetings2 = function(){
    console.log(`Hello JS user, ${this["full Name"]}`);
    
}

console.log(JsUser.greetings);
console.log(JsUser.greetings());

console.log(JsUser.greetings2());