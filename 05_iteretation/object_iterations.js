const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObj){//this is for in used for iteretation of abj
    console.log(`Key is ${key} and value is ${myObj[key]}`);
    
}

const arr = [1,2,3,4,5,6]//checking for in on arrays

for(const val in arr){
    console.log(`index is${val} and value ois ${arr[val]}`);
    
}