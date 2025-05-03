// Falsy values

// Falsy values are values that evaluate to false in a boolean context
// In JavaScript, the following values are considered falsy:
// false
// 0
// "" (empty string)
// null
// undefined
// NaN (Not a Number)
// All other values are considered truthy
// Truthy values are values that evaluate to true in a boolean context



//nullish coalescing operator

let val1;
val1 = null ??10;
console.log(val1); // This will print 10
val1 = 7 ??10;
console.log(val1); // This will print 7     

// The nullish coalescing operator (??) is a logical operator that returns the right-hand operand when the left-hand operand is null or undefined   
// and returns the left-hand operand otherwise
// It is useful for providing default values for variables that may be null or undefined

//ternary operator
// condition ? true value : false value

const iceTeaPrice = 100;
iceTeaPrice > 80? console.log("It is expensive"): console.log("It is cheap");

// The ternary operator is a shorthand way of writing an if-else statement
// It takes three operands: a condition, an expression to evaluate if the condition is true, and an expression to evaluate if the condition is false