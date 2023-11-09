let bmi = localStorage.getItem("bmi");
        let bmiScore = Number(bmi).toFixed(2);
        let report;
        let user = document.getElementById("user");
        let result = document.getElementById("report");
        let score =  document.getElementById("bmi");
        let tryagain = document.getElementById("tryagain");

        if(bmi<18.5){
            report= "Under Weight";
            score.style.color = "orangered";
            result.style.color = "orangered";
            user.style.color="orangered";
        }
        else if(bmi>=18.5 && bmi<=24.9){
            report= "Normal";
            score.style.color = "green";
            result.style.color = "green";
            user.style.color="green";
        }
        else if(bmi>=25 && bmi<=29.9){
            report= "Over Weight";
            score.style.color = "lightcoral";
            result.style.color = "lightcoral";
            user.style.color="lightcoral";}
        else{
            report= "Obese";
            score.style.color = "crimson";
            result.style.color = "crimson";
            user.style.color="crimson";
        }
         tryagain.addEventListener("click",()=>{
            window.location.href="../main/gender.html"
         })

        document.getElementById("user").textContent = localStorage.getItem("username");
        document.getElementById("height-show").textContent = localStorage.getItem("height");
        document.getElementById("height-units").textContent = localStorage.getItem("heightunit");

        document.getElementById("weight-show").textContent = localStorage.getItem("weight");
        document.getElementById("weight-units").textContent = localStorage.getItem("weightunits");

        document.getElementById("gender-show").textContent = localStorage.getItem("gender");
        document.getElementById("age-show").textContent = localStorage.getItem("age");

        document.getElementById("bmi").textContent = bmiScore;
        document.getElementById("report").textContent = report;