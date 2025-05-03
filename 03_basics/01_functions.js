function addTwoNumber(number1,number2){
    console.log(number1+number2);
    
}

addTwoNumber(3,99)

const result = addTwoNumber(3,99)

console.log(result);

function addNumber(number1,number2){
    let newResult = number1+number2
    return newResult;
}

const newValue = addNumber(8,9)


console.log(newValue);

function loginUserMessage(userName = "A User"){
    return `${userName} just logged in.`
}

loginUserMessage("Abhishek")// This will not print anything cause we returned the value but not printed

console.log(loginUserMessage("Abhi"));


