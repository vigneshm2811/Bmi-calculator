let name=localStorage.getItem("username");
male.addEventListener("click", () => {
    window.location.href = "../main/age.html";
    localStorage.setItem("gender","Male");
})

female.addEventListener("click", () => {
    window.location.href = "../main/age.html";
    localStorage.setItem("gender","Female");
})