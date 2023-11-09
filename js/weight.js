let weightBtn = document.getElementById("sub-weight");
    let weight;
    let bmi;
    let valid = document.getElementById("valid-weight");
    let heightunit = localStorage.getItem("heightunit");
   
    weightBtn.addEventListener("click", ()=>{
        weight = document.getElementById("weight").value;
        let weightUnit = document.getElementById("w-unit").value;
        console.log(weightUnit)
        if(weight !=""){
            if(heightunit === "feet"){
                if(weightUnit === "pounds"){
                    if(weight>=22 && weight<=800){
                        localStorage.setItem("weight",weight);
                        localStorage.setItem("weightunits",weightUnit);
                        bmiCalUs(weight)
                        window.location.href = "../main/bmi.html";
                    }
                   else{
                    valid.textContent ="Enter weight between 22 to 800 pounds"
                   }
                }
                else{
                    valid.textContent ="Enter your weight in pounds"
                }
            }
            else{
                if(weightUnit === "kg"){
                    if(weight>=20 && weight<=400){
                        localStorage.setItem("weight",weight);
                        localStorage.setItem("weightunits",weightUnit);
                        bmiCal(weight);
                        window.location.href = "../main/bmi.html";
                    }
                   else{
                    valid.textContent ="Enter weight between 20 to 300 Kg"
                   }
                }
                else{
                    valid.textContent ="Enter your weight in KiloGrams"
                }
            }
           
      
        }
        else{
            valid.textContent ="Weight can't be Empty"
        }
    });

    function bmiCal(w){
        let heights = localStorage.getItem("height");
        let meters = heights/100;
        bmi=w/(meters*meters);
        localStorage.setItem("bmi",bmi);
    }

    function bmiCalUs(w){
        let heights = localStorage.getItem("height");
        let inch= heights*12;
        bmi=(w/Math.pow(inch,2))*703;
        localStorage.setItem("bmi",bmi);
    }