let heightBtn = document.getElementById("sub-height");
let height;
let heightUnits;
let valid=  document.getElementById("valid-height");

heightBtn.addEventListener("click", ()=>{
    height=document.getElementById("height").value;
    heightUnits = document.getElementById("w-unit").value;
    if(height !=""){
       if(heightUnits === "feet"){
            if(height>=3 && height<=9)
            {
                localStorage.setItem("height",height);
                localStorage.setItem("heightunit",heightUnits);
                window.location.href = "../main/weight.html";   
            }
            else
            {
                valid.textContent ="Human Height should be 3-9 feet";
            }
        }
        else{
            if(height >=70 && height<=275){
                localStorage.setItem("heightunit",heightUnits);
                localStorage.setItem("height",height);
                window.location.href = "../main/weight.html";
            }
            else{
                valid.textContent ="Human Height should be 70-275 cm";
            }
        }  
    }
    else{
      valid.textContent ="Height Can't be Empty";
    }
  
});