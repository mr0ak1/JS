let intervalId;

let start = document.querySelector("#start")
let stop = document.querySelector("#stop")

start.addEventListener('click',()=>{

  if(!intervalId){
    intervalId = setInterval(()=>{
    
      let r= Math.round(Math.random())*256
      let g= Math.round(Math.random())*256
      let b= Math.round(Math.random())*256
        let body =document.querySelector("body")
        body.style.backgroundColor = `rgb(${r}, ${g} ,${b})`
    },2000)
  }
}
)


stop.addEventListener('click',()=>{
  clearInterval(intervalId)
})

