// DOM Manipulations

function alertCart(){
   document.getElementById("alert-cart").innerHTML = "Item Added to cart successfully!"; 
   document.getElementById("alert-cart").style.color = "green";
//    alert("Added!")
}

// Form Validation

function validateForm(){
    let input = document.forms["login"]["Email"].value;

    if(input == ""){
        alert("Email is required!");
        return false;
    }
}

// Get UpperCase only

function upperCase(){
    const input = document.getElementById("uname");
    input.value = input.value.toUpperCase();
}

//Geolocation API

const data = document.getElementById("location");

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


