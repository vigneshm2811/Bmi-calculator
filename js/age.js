let ageBtn = document.getElementById("sub-age");
let age;
let valid= document.getElementById("valid-age");

ageBtn.addEventListener("click", ()=>{
  age = document.getElementById("age").value;

  if(age !=""){
    if(age>=1 && age<=120)
    {
        localStorage.setItem("age",age);
        window.location.href = "../main/height.html";
    }
    else{
        valid.textContent= "Age should be 1 to 120"
    }
  
}
else{
    valid.textContent ="Age can't be empty";
}
})