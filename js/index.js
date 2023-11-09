
let loginBtn = document.getElementById("login");
let male = document.getElementById("male");
let female = document.getElementById("female");


function logedin(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  if(email != "" && password !=""){
    window.location.href = "./main/gender.html";
    localStorage.setItem("username",email);
  }
  else{
    document.getElementById("valid").textContent="Enter valid login"
  }

}
// loginBtn.addEventListener("click", () => {
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;
//   if(email != "" && password !=""){
//     window.location.href = "../main/gender.html";
//   }
//   else{
//     document.getElementById("valid").textContent="Enter valid login"
//   }
// });




