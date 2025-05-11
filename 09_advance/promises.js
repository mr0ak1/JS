const promiseOne = new Promise(function(resolve, reject){
  //Do async task
  //DB calls,cryptography

  setTimeout(function(){
    console.log("Async task is completed");

    resolve()
    
  },1000)

});

promiseOne.then(function(){
  console.log("Promise Consumed");
  
})


new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('Async task 2');
    resolve()
  },1000)
  
}).then(function(){
  console.log("async resolved 2");
  
})

const promiseThree = new Promise(function(resolve,reject){
  setTimeout(function(){
    resolve({username:"Chai", email: "chai@example.com"})
  },1000)
})

promiseThree.then(function(user){
  console.log(user);
  
})


const promiseFour = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false;
    // let error = true;
    if(!error){
      resolve({username: "hitesh", password: 123})
    }else{
      reject("Error: Someething went wrong.")
    }
  },1000)
})


promiseFour.then((user)=>{
  console.log(user);
  return user.username
}).then((username)=>{
  console.log(username);
}).catch((error)=>{
  console.log(error);
  
}).finally(()=>console.log("the promise is finally resolved or rejected"))



const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
      let error = true;
      if(!error){
        resolve({username: "Javascript", password: 123})
      }else{
        reject('ERROR: JS went wrong.')
      }
    },1100)
})

async function consumePromiseFive(params) {

 

  try{
    const response =await promiseFive
    console.log(response);
    
  }catch(error){
    console.log(error);
    
  }

  
}

async function getUserData(params) {
  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await (response).json()
    console.log(data);
    
  }catch(error){
    console.log("e",error); 
    
  }
  
}

consumePromiseFive()
getUserData()

console.log("Handle same api using catch and then");

fetch('https://api.github.com/users/mr0ak1')
.then((response)=>{
  return response.json()
})
.then((response)=>{
  console.log(response);
  
})
.catch((error)=> console.log(error)
)





