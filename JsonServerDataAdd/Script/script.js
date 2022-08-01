
regForm.addEventListener('submit', function (e) {
	
	e.preventDefault();
	const fName = fname();
	const lName = lname();
	const emailId = isEmailValid();
	const phNo = phNumber();
	const birth = dob();
	const country = con();
	const pass = password();
	const confirmpass = confirmPass();
	
	if (
		fName &&
		lName &&
		emailId &&
		phNo &&
		birth &&
		country &&
		pass &&
		confirmpass
	) {
		document.querySelector('.showRegister').style.right = '0px';
		$(document).ready(function(){
			send();
			clearInput()
		})
	}
	progressBar()
});
//=============================================


var c = 1
async function send(){
     
	const formData = {
		fname : $('#fname').val(),
		lname : $("#lname").val(),
		email : $("#email").val(),
		phone : $("#phNo").val(),
		dob :  $('#dob').val(),
		city : $('#inputCity').val(),
		pass : $("#pass").val()
    }
			
	const rawResponse = await fetch('http://localhost:3000/user', {
		
		method: 'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
  });
  	const content = await rawResponse.json();

  	console.log(content);
			
}
//=============================================


// clear inputs in register form
function clearInput(){
	$('#fname').val() = ""
               $("#lname").val() = ""
                 $("#email").val() = ""
                $("#phNo").val() = ""
                 $("#pass").val() = ""
				 $('#dob').val() = ""
				 $('#inputCity').val() = ""
}
//=============================================


// only character check
const onlyChar = (txt) => {
	let regx = /^[a-zA-Z]+$/;
	if (txt.match(regx)) return true;
	else false;
};
//=============================================



// only number check
const onlyNumber = (num) => {
	let regx = /^[0-9]+$/;
	
	if (num.match(regx)) return true;
	else false;
};
//=============================================



// first name
const fname = () => {
	
	const errorfn = document.querySelector('.errorfn');
	const fname = document.getElementById('fname').value;

	if (fname != '') {
		if (onlyChar(fname)) {
			errorfn.classList.remove('active');
			return true;
		}
	} else {
		errorfn.classList.add('active');
		return false;
	}
};
document.getElementById('fname').addEventListener('keyup', fname);
//=============================================


// last name
const lname = () => {
	
	const lname = document.getElementById('lname').value;
	const errorln = document.querySelector('.errorln');

	if (lname != '') {
		if (onlyChar(lname)) {
			errorln.classList.remove('active');
			return true;
		}
	} else {
		errorln.classList.add('active');
		return false;
	}
};
document.getElementById('lname').addEventListener('keyup', lname);
//=============================================


// email validate

const isEmailValid = () => {
	
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	const errorem = document.querySelector('.errorem');
	const email = document.getElementById('email').value;

	if (email != '') {
		if (email.match(regex)) {
			errorem.classList.remove('active');
			return true;
		}
	} else {
		errorem.classList.add('active');
		return false;
	}
};
document.getElementById('email').addEventListener('keyup', isEmailValid);
//=============================================


// number validation

const phNumber = () => {
	
	const phNo = document.getElementById('phNo').value;
	const errorno = document.querySelector('.errorno');

	if (phNo != '') {
		if (onlyNumber(phNo)) {
			if (phNo.length > 0 && phNo.length == 10) {
				errorno.classList.remove('active');
				return true;
			}
		}
	} else {
		errorno.classList.add('active');
		return false;
	}
};
document.getElementById('phNo').addEventListener('keyup', phNumber);
//=============================================



// date of birth
const dob = () => {
	
	const date = document.getElementById('dob').value;
	const errordate = document.querySelector('.errordate');
	if (date != '') {
		errordate.classList.remove('active');
		return true;
	} else {
		errordate.classList.add('active');
		return false;
	}
};

//=============================================


const con = () => {
	
	const inputCity = document.getElementById('inputCity').value;
	const errorcity = document.querySelector('.errorcity');

	if (inputCity != '') {
		errorcity.classList.remove('active');
		return true;
	} else {
		errorcity.classList.add('active');
		return false;
	}
};
//=============================================



const password = () => {
	
	const pass = document.getElementById('pass').value;
	const capError = document.querySelector('.errorpass span:nth-child(2)');
	const splError = document.querySelector('.errorpass span:nth-child(3)');
	const numError = document.querySelector('.errorpass span:nth-child(4)');
	const charError = document.querySelector('.errorpass span:nth-child(5)');

	let capitalLettr = /[A-Z]+$/;
	let spclChar = /[!\@\$\#\%\^\&\*\(\)\-\_\+\=\?\<\>\.\,] $/;
	let num = /[0-9]/;
	capError.classList.remove('active');
	splError.classList.remove('active');
	numError.classList.remove('active');
	charError.classList.remove('active');

	if (pass != '') {
		charError.classList.remove('active');
		return true
	} else {
		charError.classList.add('active');
		return false
	}

	// if (pass.match(capitalLettr)) {
	// 		capError.classList.remove('active');
	// 	}else capError.classList.add('active');
	// 	if (pass.match(spclChar)) {
	// 		splError.classList.remove('active');
	// 	}else splError.classList.add('active');
	// 	if (pass.match(num)) {
	// 		numError.classList.remove('active');
	// 	}else numError.classList.add('active');
	// 	if (pass.length < 6) {
	// 		charError.classList.remove('active');
	// 	}else charError.classList.add('active');
};
document.getElementById('pass').addEventListener('keyup', password);
// a.split('').filter((c) => {
// 	return capitalLettr.test(c);
// });
const confirmPass = () => {
	
	const pass = document.getElementById('pass').value;
	const rpass = document.getElementById('rpass').value;
	const errorrpass = document.querySelector('.errorrpass');

	console.log(pass);
	console.log(rpass);

	errorrpass.classList.remove('active');
	if (rpass != '') {
		if (pass === rpass) {
			errorrpass.classList.remove('active');
			return true;
		} else {
			errorrpass.classList.add('active');
			return false;
		}
	} else {
		errorrpass.classList.add('active');
		return false;
	}
};
document.getElementById('rpass').addEventListener('blur', confirmPass);
//=============================================


// progress bar of register end
const progressBar = () =>{

	let w = 100

	const a = setInterval(() => {

	document.querySelector('.pBar').style.width = w +'%'

	if(w == 0){

		clearInterval(a)

		document.querySelector('.pBar').style.width = 0+'%'
		document.querySelector('.pBar').style.visibility = "hidden"
		document.querySelector('.showRegister').style.right = '-275px';

// document.querySelector('.modal.fade').classList.remove('show', 'modal-backdrop')
// document.querySelector('#registerForm').style.display = "none"

}
	w--

},50)
}
//=============================================



// like share and comment count

 document.querySelectorAll('.like').forEach((l)=>{

	l.addEventListener('click',function(e){

	e.target.nextElementSibling.innerText = parseInt(e.target.nextElementSibling.innerText)+1 +"K"

	document.querySelectorAll('.like .fa').forEach((r) => {

			r.classList.toggle('fa-thumbs-up')
		})
	
})

})

 document.querySelectorAll('.disLike').forEach((l)=>{
		
	l.addEventListener('click',function(e){

	e.target.nextElementSibling.innerText = parseInt(e.target.nextElementSibling.innerText)+1 +"K"

	document.querySelectorAll('.disLike .fa').forEach((r) => {

			r.classList.toggle('fa-thumbs-down')
		})
	})

})

//=============================================


document.querySelectorAll('.paras').forEach((ll)=>{

  ll.addEventListener('click',function(e){

	let cl = e.target.classList[0]

	if(e.target.matches("p")){
		e.target.style.color = "red"
		e.target.innerText= parseInt(e.target.innerText)+1
  }

})
})

// ===============================================


const isEmValid = (id,error) => {

	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

	if (id != '') {
		if (regex.test(id)) {
			error.classList.remove('active');
			return true;
		}
	}
		error.classList.add('active');
		return false;
	
};

//=============================================


const loginEmail = (email) => {

	const lemail = document.getElementById("lemail").value
	const errorer = document.querySelector('.errore')
	
	if(isEmValid(lemail,errorer)){
		if(email.includes(lemail)){
			errorer.classList.remove('active')
			return true
		}
	}
	errorer.classList.add('active')

	console.log(lemail+' '+email)
	return false
	
}

//=============================================


const loginPass = (pass) =>{

const lpass = document.getElementById("lpass").value
const errorpas = document.querySelector('.errorpas')
 
if(pass.includes(lpass)){
	errorpas.classList.remove('active')
	return true
}
errorpas.classList.remove('active')
console.log(lpass+' '+pass)
return false

}

//=============================================


// login user form data

loginForm.addEventListener('submit',async function(e){

	e.preventDefault()

	const lpass = document.querySelector("#lpass").value
	const errorpas = document.querySelector('.errorpass')

	const response = await fetch("http://localhost:3000/user")
	const res = await response.json()
	
	const email = res.map((dd) => { return dd.email})
	const pass = res.map((dd) => { return dd.pass})
	console.log(email)
	console.log(pass)

	
	if(loginEmail(email) && loginPass(pass)){
		
		window.location.href = "profile.html"
	}
	else{
		alert("wrong pass or email")
	}

})

//=============================================









