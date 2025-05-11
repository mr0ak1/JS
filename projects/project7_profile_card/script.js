let allProfile = document.querySelector(".allprofile")
let hiteshButton = document.querySelector("#hitesh-btn")
let abhiButton = document.querySelector("#abhi-btn")
body = document.querySelector('Body');

function onHitesh(){
  const requestURL = "https://api.github.com/users/hiteshchoudhary"

  const xhrHitesh = new XMLHttpRequest();

  xhrHitesh.open('GET', requestURL)

  xhrHitesh.onreadystatechange = function(){
    console.log();
    
    if (xhrHitesh.readyState===4){
      let data = JSON.parse(this.responseText)
      allProfile.innerHTML = `
      <h1 id="heading">Profile Card</h1>
      <div class="fullProfile-js">
        <div class="hitesh-img-js">
          <img src="${data.avatar_url}" alt="">
        </div>
        <div class="hitesh-data-js">
          <div><strong>Name:</strong></div><div>${data.name}</div>
          <div><strong>Username:</strong></div><div>${data.login}</div>
          <div><strong>Location:</strong></div><div>${data.location || 'N/A'}</div>
          <div><strong>Public Repos:</strong></div><div>${data.public_repos}</div>
          <div><strong>Followers:</strong></div><div>${data.followers}</div>
          <div><strong>Following:</strong></div><div>${data.following}</div>
        </div>
    </div>
      `

    } 
    
  }

  xhrHitesh.send();
  
}


function onAbhi(){
  const requestURL = "https://api.github.com/users/mr0ak1"
  xhrAbhi = new XMLHttpRequest()
  xhrAbhi.open('GET', requestURL)

  xhrAbhi.onreadystatechange = function(){

    if (xhrAbhi.readyState===4){
      console.log(xhrAbhi.readyState);
      
      let data = JSON.parse(this.responseText)
      allProfile.innerHTML = `
      <h1 id="heading">Profile Card</h1>
      <div class="fullProfile-js">
        <div class="hitesh-img-js">
          <img src="${data.avatar_url}" alt="">
        </div>
        <div class="hitesh-data-js">
          <div><strong>Name:</strong></div><div>${data.name}</div>
          <div><strong>Username:</strong></div><div>${data.login}</div>
          <div><strong>Location:</strong></div><div>${data.location || 'N/A'}</div>
          <div><strong>Public Repos:</strong></div><div>${data.public_repos}</div>
          <div><strong>Followers:</strong></div><div>${data.followers}</div>
          <div><strong>Following:</strong></div><div>${data.following}</div>
        </div>
    </div>
      `

    } 

    
  }
  xhrAbhi.send()
}



hiteshButton.addEventListener('click',onHitesh)
abhiButton.addEventListener('click',onAbhi)