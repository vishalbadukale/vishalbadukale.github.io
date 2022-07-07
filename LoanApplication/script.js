const formSubmit = document.getElementById('submitForm');
const input = document.querySelector('.checkInput');
const error = document.querySelector('.emailVal');
const errorPan = document.querySelector('.pan');

var num1 = document.querySelector('.num1 span');
var num2 = document.querySelector('.num2 span');
var oper = document.querySelector('.oper span');
const userData = [];
// console.log(userData)
var userHere = {};


let captchaAns = null;

loanForm.addEventListener('submit', function (e) {
	e.preventDefault();

	// alert("submit here")
	let name = fName();
	let email = isEmailValid();
	let pan = panNumber();
	//  captchAnsw.addEventListener('change', captchaOutput);
	let captch = captchaOutput();

	if (name && email && pan && captch) {
		userData.push(userHere);
		document
			.querySelector('#submitForm')
			.addEventListener('click', submitFormMove);
		userInfo();
		re();
	}
});

function fName() {
	const fname = document.getElementById('fname').value;
	userHere.Name = fname.split(' ')[0];

	input.classList.remove('active');

	if (fname != '') {
		let trimmed = fname.trim();
		let fnameWords = trimmed.split(' ');

		if (fnameWords.length == 2) {
			if (fnameWords[0].length >= 4 && fnameWords[1].length >= 4) {
				return true;
			}
		}
	}

	input.classList.add('active');

	return false;
}
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
	Scale = [
		'',
		'Thousand',
		'Million',
		'Billion',
	];

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
	document.querySelector('#intword').innerText = w;
});

//==================================

// random Number creater

function getRandomNum(min, max) {
	let step1 = max - min + 1;
	let step2 = Math.random() * step1;
	let res = Math.floor(step2) + min;

	return res;
}

const createCaptch = () => {
	let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	let op = ['+', '*', '-'];

	let rNum1 = getRandomNum(0, num.length - 1);
	let rNum2 = getRandomNum(0, num.length - 1);

	let rOpr = getRandomNum(0, op.length - 1);
	num1.innerHTML = rNum1;
	oper.innerHTML = op[rOpr];
	num2.innerHTML = rNum2;

	captchAns = validateCaptcha([rNum1, op[rOpr], rNum2]);
};

// Captcha reload
document.querySelector('.reloadCapcha').addEventListener('click', createCaptch);

// Validate Captcha for user input
const validateCaptcha = (captchVars) => {
	// console.log(captchVars)
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

	if (anserByUser == captchAns) {
		return true;
	}
	errorCaptchW.classList.add('active');
	// if the captcha ans is wrong the still calling a create captcha function
	createCaptch();
	return false;
}
//==================================

// submit popup

function submitFormMove() {
	const popup = document.querySelector('.msgPage');
	const blur = document.querySelector('.thankYouPage');

	popup.classList.toggle('active');
	blur.classList.toggle('active');
}
document.querySelector('.closeButton i').addEventListener('click', closePopup);
function closePopup() {
	const popup = document.querySelector('.msgPage');
	const blur = document.querySelector('.thankYouPage');

	popup.classList.remove('active');
	blur.classList.remove('active');
}
const userInfo = () => {
	const name = document.getElementById('fname').value.split(' ')[0];
	const email = document.getElementById('email').value;

	document.querySelector('#userName em').innerText = name;
	document.querySelector('#userEmail strong').innerText = email;
};
//OTP generation
const otp = () => {
	const randomOpt =
		getRandomNum(0, 4).toString() +
		getRandomNum(0, 4).toString() +
		getRandomNum(0, 4).toString() +
		getRandomNum(0, 4).toString();
	return randomOpt;
};
var ab;
function re() {
	ab = otp();
	console.log('Generated OTP :- ' + ab);
	return ab;
}

var count = 2;

//==================================

// otp vaidations
const validateOTP = () => {
	const userInput = document.querySelector('.optValidate input').value;
	const error = document.querySelector('.attemptCount');
	const reload = document.querySelector('.optValidate i');
	error.classList.remove('active');

	if (count >= 0) {
		if (ab == userInput) {
			reload.classList.add('active');
			error.classList.remove('active');
			setTimeout(() => {
				window.location.href = ' http://pixel6.co/';
			}, 3000);
		} else {
			// console.log('wrong otp');

			error.classList.add('active');
			reload.classList.remove('active');
			document.querySelector('.attemptCount p span').innerText = count;
			count--;
			re();
		}
	}
	if(count == 0) window.location.href = ' http://pixel6.co/404';

};

document
	.querySelector('.optValidate button')
	.addEventListener('click', validateOTP);

// it call on when u reload a page
createCaptch();
