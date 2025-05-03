function addTwoNumber(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumber(3, 99);

const result = addTwoNumber(3, 99);
console.log(result);

function addNumber(number1, number2) {
    let newResult = number1 + number2;
    return newResult;
}

const newValue = addNumber(8, 9);
console.log(newValue);

function loginUserMessage(userName = "A User") {
    return `${userName} just logged in.`;
}

loginUserMessage("Abhishek"); // This will not print anything because we returned the value but didn't print it.

console.log(loginUserMessage("Abhi"));

function calculateCartPrice(...num1) { // here ...num1 means it will be used for an unfixed number of parameters 
    return num1;
}

console.log(calculateCartPrice(300, 456, 789));

const user = {
    userName: "hitesh",
    price: 199,
};

function handleObject(anyObject) {
    console.log(`User name is ${anyObject.userName} and price is ${anyObject.price}`);
}

handleObject(user);
