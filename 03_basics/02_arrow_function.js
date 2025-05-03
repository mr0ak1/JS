const user ={
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log("Welcome to the course " + this.username);
        console.log(this)
    }
}

user.welcomeMessage() // This will print the message
user.username = "Abhi"
user.welcomeMessage() // This will print the message


const chair = ()=>{
    let username = "Hitesh"
    console.log(this);
    
}

chair()

const sum = (num1,num2) =>  num1 + num2;

console.log(sum(3,4)); // This will print the sum of 3 and 4

// for imediate return of or execution of function

(function chai(){
    console.log("Hello");
    
})();// here we have used the IIFE function that is (function) ()() which will execute the function immediately. here must use ;