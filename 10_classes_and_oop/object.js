

function multiplyBy5(num){
    return num*5
}
multiplyBy5.power =2
console.log(multiplyBy5(6));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username,score){
    this.username = username;
    this.score = score;
}

createUser.prototype.increment = function(){
    this.score++;
    console.log(this.score);
    
}

createUser.prototype.printMe = function(){
    console.log(`${this.username},score is ${this.score}`);
    
}

let chai =new createUser('ak',78)
chai.printMe()
chai.increment()
