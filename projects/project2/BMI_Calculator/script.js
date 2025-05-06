const form = document.querySelector("form")


form.addEventListener('submit',(e)=>{

    e.preventDefault();
    const height = document.querySelector("#height").value
    const weight = document.querySelector("#weight").value
    const results = document.querySelector("#result")

    if(height<0 || isNaN(height) || height == ''){
        results.innerHTML = "Invalid Height";

    }else if(weight<0 || isNaN(weight) || weight == ''){
        results.innerHTML = "Invalid weight"
    }else{
        //Calculate BMI
        const bmiValue = (weight/(height*height)).toFixed(2)
        results.innerHTML = `<span>Your BMI index is: ${bmiValue}</span>`


        if(bmiValue<18.6){
            results.innerHTML += `<span>You are underweight</span>`
        }else if(bmiValue<18.6 && bmiValue>24.9){
            results.innerHTML += `<span>You are Perfect</span>`
        }else{
            results.innerHTML += `<span>You are overweight</span>`
        }
       
            
        

        
    }
})


