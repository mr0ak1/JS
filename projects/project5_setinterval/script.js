let intervalId;

let start = document.querySelector("#start")
let stop = document.querySelector("#stop")

start.addEventListener('click',()=>{
  intervalId = setInterval(()=>{
    let header =document.querySelector("#heading")
    header.innerHTML = `This is abhishek ${new Date()}`
  },1000)
})


stop.addEventListener('click',()=>{
  clearInterval(intervalId)
})

