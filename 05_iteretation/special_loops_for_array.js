//for of loop
const arr = [1,2,3,4,5,6]

for(const i of arr){
    console.log(i);
    
}

const greeting = "Hello World!"

for( const i of greeting){
    console.log(i);
    
}

let map = new Map;

map.set("IN",+91)
map.set("USA",+1)
console.log(map);

for(const [i,j] of map){
    console.log(`${i}:${j}`);
    
}


const myObj ={
    "game1": "nfs",
    "game2":"spiderman"
}

for(const [key,value] of myObj){
    console.log(key,value);
    
}