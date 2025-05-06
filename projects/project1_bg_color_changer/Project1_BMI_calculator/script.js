const button = document.querySelectorAll(".button");
const body = document.querySelector("body")

console.log(button);




button.forEach((button)=>{
    button.addEventListener(("click"),(button)=>{
        body.style.backgroundColor = button.target.id
    })
    
})