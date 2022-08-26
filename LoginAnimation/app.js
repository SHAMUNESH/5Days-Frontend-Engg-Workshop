const signInButton = document.getElementById("signIn");
const signUpButton = document.getElementById("signUp");
const container = document.getElementById("container");

// AddEventListener Logic
// Arrow functions ()
signUpButton.addEventListener('click',() => {
	container.classList.add("right-panel-active");
});

// Default
signInButton.addEventListener('click',() => {
	container.classList.remove("right-panel-active");
})