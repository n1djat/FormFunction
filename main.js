const user  = document.getElementById("username");
const password = document.getElementById("password");
const button = document.getElementById("btn");
const form = document.getElementById("myForm");

function mya(event){
    event.preventDefault();
    if(user.value == "a" &&  password.value == "a"){
            window.location.href = "./home.html";
        
    }else{
        alert("Username ve ya sifre sehvdir")
        
    }
}

form.addEventListener("submit", mya)