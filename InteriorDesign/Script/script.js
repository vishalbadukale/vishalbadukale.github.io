// see burgur menu script
const burgerMenu = document.querySelector(".burgerMenu");
const navList = document.querySelector(".navList ul");
burgerMenu.addEventListener("click", () => {
	document.querySelector(".navList ul").classList.toggle("active");
});

//showing login form data here

var blur = document.getElementById("blur");
var loginButton = document.querySelector(".logg");
var logInForm = document.querySelector(".login");

loginButton.addEventListener("click", loginToggle);
function loginToggle() {
	blur.classList.toggle("active");
	logInForm.classList.toggle("active");
}

document.querySelector(".closeFormBtn").addEventListener("click", loginRemove);
function loginRemove() {
	blur.classList.remove("active");
	logInForm.classList.remove("active");
}

//see register now work
document.querySelector(".registerNow").addEventListener("click", registerNow);
function registerNow() {
	register();
	loginRemove();
}
// here register form

const registerButton = document.querySelector(".registerButton");
registerButton.addEventListener("click", register);
function register() {
	blur.classList.toggle("active");
	document.querySelector(".register").classList.toggle("active");
}
const closeRegBtn = document.querySelector(".closeRegBtn");
closeRegBtn.addEventListener("click", closeReg);
function closeReg() {
	blur.classList.remove("active");
	document.querySelector(".register").classList.remove("active");
}
