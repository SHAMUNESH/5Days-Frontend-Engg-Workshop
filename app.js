



function greetFunc(){
    document.getElementById("greet").innerHTML = "Thank you!";
    document.getElementById("greet").style.color = "green";
}

// document.getElementById("myBtn").addEventListener("click", function() {
//     alert("Hello World!");
// });
//Form Validation

function validateEmail(){
    let data = document.forms["loginForm"]["emailData"];
    if(data = " "){
        alert("Please enter your email!");
        return false;
    }
}


//Geolocation API

const data = document.getElementById("test");

// User prompt - permission
function getLocation(){
  try{
    navigator.geolocation.getCurrentPosition(getPosition);
  }
  catch{
    data.innerHTML = err;
  }
}

function getPosition(position){
   data.innerHTML = "Lattitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function changeTheme(){
  document.getElementById("main").style.backgroundColor = " #2e4053 ";
  document.getElementById("theme").innerHTML = "Light Theme";
}