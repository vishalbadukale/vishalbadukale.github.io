const formSubmit = document.getElementById('submitForm');
const input = document.querySelector('.checkInput');
const error = document.querySelector('.emailVal');
const errorPan = document.querySelector('.pan');

var num1 = document.querySelector('.num1 span');
var num2 = document.querySelector('.num2 span');
var oper = document.querySelector('.oper span');
const userData = [];
const userHere = {};
// console.log(userData)
let captchaAns = null;

loanForm.addEventListener('submit', function (e) {
	e.preventDefault();

	let name = fName();
	let email = isEmailValid();
	let pan = panNumber();
	let amt = amountCheck();
	let captch = captchaOutput();

	if (name && email && pan && captch && amt) {
		let myObj = JSON.stringify(userHere);
		localStorage.setItem('userData', myObj);
		loader();
	}
});


document.querySelector('#amount').addEventListener('blur', amountCheck);

const clearInputs = () => {
	document.getElementById('fname').value = '';
	document.getElementById('email').value = '';
	document.getElementById('pan').value = '';
	document.querySelector('#intword').innerText = '';
	createCaptch();
};

const onlyChar = (txt) => {
	{
		var letters = /^[A-Za-z]+$/;
		if (txt.match(letters)) {
			return true;
		} else {
			return false;
		}
	}
};

function fName() {
	const fname = document.getElementById('fname').value;
	userHere.Name = fname.split(' ')[0];

	input.classList.remove('active');

	if (fname != '') {
		let trimmed = fname.trim();
		let fnameWords = trimmed.split(' ');

		if (fnameWords.length == 2) {
			if (
				fnameWords[0].length >= 4 &&
				fnameWords[1].length >= 4 &&
				onlyChar(fnameWords[0]) &&
				onlyChar(fnameWords[1])
			) {
				return true;
			}
		}
	}

	input.classList.add('active');

	return false;
}
document.getElementById('fname').addEventListener('blur', fName);
//==================================

// Email validation here to check

function isEmailValid() {
	let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
	let s = document.getElementById('email').value;
	userHere.email = s;
	// console.log(s)

	if (s.match(regex)) {
		error.classList.remove('active');
		return true;
	}
	error.classList.add('active');
	return false;
}
document.getElementById('email').addEventListener('blur', isEmailValid);
//==================================

// PAN Validation depending on a conditions

function panNumber() {
	const panNum = document.getElementById('pan').value.toUpperCase();

	const regPan = /^([A-Z]{5})([0-9]{4})([A-Z]{1})$/;

	// console.log(panNum)

	if (panNum === '') errorPan.classList.add('active');
	else if (regPan.test(panNum.toString())) {
		errorPan.classList.remove('active');
		return true;
	}
	errorPan.classList.add('active');
	return false;
}
document.getElementById('pan').addEventListener('blur', panNumber);

// amount check empty

//Code start to Integre to word conversion
const Ones = [
		'',
		'One',
		'Two',
		'Three',
		'Four',
		'Five',
		'Six',
		'Seven',
		'Eight',
		'Nine',
		'Ten',
		'Eleven',
		'Twelve',
		'Thirteen',
		'Fourteen',
		'Fifteen',
		'Sixteen',
		'Seventeen',
		'Eighteen',
		'Nineteen',
	],
	Tens = [
		'',
		'',
		'Twenty',
		'Thirty',
		'Forty',
		'Fifty',
		'Sixty',
		'Seventy',
		'Eighty',
		'Ninety',
		'Hundred',
	],
	Scale = ['', 'Thousand', 'Million', 'Billion'];
const onlyNumber = (n) => {
	{
		var nn = /^[0-9]+$/;
		if (n.match(nn)) {
			return true;
		} else {
			return false;
		}
	}
};

const integerToWords = (n = 0) => {
	if (n == 0) return 'Zero'; // check for zero
	n = ('0'.repeat((2 * (n += '').length) % 3) + n).match(/.{3}/g); // create triplets array
	if (n.length > Scale.length) return 'Too Large'; // check if larger than scale array
	let out = '';
	return (
		n.forEach((Triplet, pos) => {
			// loop into array for each triplet
			if (+Triplet) {
				out +=
					' ' +
					(+Triplet[0] ? Ones[+Triplet[0]] + ' ' + Tens[10] : '') +
					' ' +
					(+Triplet.substr(1) < 20
						? Ones[+Triplet.substr(1)]
						: Tens[+Triplet[1]] +
						  (+Triplet[2] ? '-' : '') +
						  Ones[+Triplet[2]]) +
					' ' +
					Scale[n.length - pos - 1];
			}
		}),
		out.replace(/\s+/g, ' ').trim()
	);
};
//Code ENd for Integre to word conversion
//==================================

document.querySelector('#amount').addEventListener('keyup', function (e) {
	let value = this.value;
	userHere.amount = value;
	let w = integerToWords(value);
	const error = document.querySelector('.amtError');

	error.classList.remove('active');

	if (onlyNumber(value)) {
		document.querySelector('#intword').innerText = w + ' Rs';
	}

	error.classList.add('active');
});

//==================================

//amount empty
function amountCheck() {
	const amt = document.querySelector('#amount').value;
	const error = document.querySelector('.amtError');
	error.classList.remove('active');
	if (amt == '') {
		error.classList.add('active');
		createCaptch();
		return false;
	}

	return true;
}



// random Number creater

function getRandomNum(min, max) {
	let step1 = max - min + 1;
	let step2 = Math.random() * step1;
	let res = Math.floor(step2) + min;

	return res;
}

const createCaptch = () => {

	let op = ['+', '*', '-'];

	let rNum1 = getRandomNum(0,11);
	let rNum2 = getRandomNum(0,10);

	let rOpr = getRandomNum(0, op.length - 1);
	num1.innerHTML = rNum1;
	oper.innerHTML = op[rOpr];
	num2.innerHTML = rNum2;

	captchaAns = validateCaptcha([rNum1, op[rOpr], rNum2]);
};

// Captcha reload
document.querySelector('.reloadCapcha').addEventListener('click', createCaptch);

// Validate Captcha for user input
const validateCaptcha = (captchVars) => {

	
	let [n1, op, n2] = captchVars;

	switch (op) {
		case '+':
			return n1 + n2;
		case '-':
			return n1 - n2;
		case '*':
			return n1 * n2;
	}
};

function captchaOutput() {
	const errorCaptchW = document.querySelector('.error .wrong');
	const errorCaptchR = document.querySelector('.error .right');
	let anserByUser = document.querySelector('#validate').value;

	errorCaptchR.classList.remove('active');
	errorCaptchW.classList.remove('active');

	if (anserByUser == captchaAns) {
		return true;
	}
	errorCaptchW.classList.add('active');
	// if the captcha ans is wrong the still calling a create captcha function
	createCaptch();
	return false;
}
document.getElementById('validate').addEventListener('blur', captchaOutput);

//==================================

// reloader

function loader() {
	const ss = setInterval(() => {
		document.querySelector('.thankYouPage').classList.add('active');
		document.querySelector('.msgPage').classList.add('active');
	}, 500);
	setTimeout(() => {
		clearInterval(ss);
		window.location.href = 'thankyou.html';
	}, 3000);
}

// document.querySelector('.closeButton i').addEventListener('click', closePopup);
// function closePopup() {
// 	const popup = document.querySelector('.msgPage');
// 	const blur = document.querySelector('.thankYouPage');

// 	popup.classList.remove('active');
// 	blur.classList.remove('active');
// }

// //
// it call on when u reload a page
createCaptch();
