
let loginBtn = document.getElementById("login");
let male = document.getElementById("male");
let female = document.getElementById("female");


function logedin(){
    let userName = document.getElementById("userName").value;
    let password = document.getElementById("password").value;
  if(userName != "" && password !=""){
    window.location.href = "./main/gender.html";
    localStorage.setItem("username",userName);
  }
  else{
    document.getElementById("valid").textContent="Enter valid login"
  }

}





