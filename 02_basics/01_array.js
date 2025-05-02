const myArr = new Array(1,2,3,4)
console.log(myArr[1]);

myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop()
myArr.unshift(9)
console.log(myArr);

console.log(myArr.includes(42));
console.log(myArr.indexOf(4));

const newArr = myArr.join()//saves copy of old array into new array as string
console.log(newArr);
console.log(typeof(newArr));

console.log("-------------------------------------------")

console.log('A',myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log('B',myArr);

const myn2 = myArr.splice(1,3)
console.log('c',myArr);
console.log(myn2);







