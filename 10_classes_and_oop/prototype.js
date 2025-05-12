let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hamer",
    spiderman: "sling",
    getSpiderPower : function(){
        console.log(`Spidey power is ${this.spiderman}`);
        
    }

}

console.log(heroPower.getSpiderPower());

Object.prototype.hitesh = function(){
    console.log(`Hitesh is present`);
    
}

heroPower.hitesh()
myHeros.hitesh()

Array.prototype.heyHitesh = function(){
    console.log('Welcome hitesh');
    
}

myHeros.heyHitesh()

// heroPower.heyHitesh()



//----------------------- INHERITANCE ----------------------------//



const User = {
    name: "chai",
    email: "chai@google.com",
}
const Teacher = {
    makevideo : true,

}

const TeachingSupport = {
    isAvailable : false,
}

const TAsupport ={
        makeAssignment : 'JS Assignmnet',
        fullTime : true,
        __proto__: TeachingSupport
}

Teacher.__proto__ = User//old syntax


//Modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher) //Teacher ka property ts me


let chai = "ABHI       "
console.log(chai.length);


String.prototype.trueLength = function(){
    console.log(`${this}`);
    
    console.log(`True length ${this.trim().length} `);

    
}

chai.trueLength()