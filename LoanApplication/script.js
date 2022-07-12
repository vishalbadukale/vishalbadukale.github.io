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
		window.location.href = 'thankyou.html';
		// loader();
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

const a = [
	'',
	'one ',
	'two ',
	'three ',
	'four ',
	'five ',
	'six ',
	'seven ',
	'eight ',
	'nine ',
	'ten ',
	'eleven ',
	'twelve ',
	'thirteen ',
	'fourteen ',
	'fifteen ',
	'sixteen ',
	'seventeen ',
	'eighteen ',
	'nineteen ',
];
const b = [
	'',
	'',
	'twenty',
	'thirty',
	'forty',
	'fifty',
	'sixty',
	'seventy',
	'eighty',
	'ninety',
];

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

function inWords(num) {
	if ((num = num.toString()).length > 9) return 'overflow';
	n = ('000000000' + num)
		.substr(-9)
		.match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
	console.log(n);
	if (!n) return;
	var str = '';
	str +=
		n[1] != 0
			? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore '
			: '';
	str +=
		n[2] != 0
			? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh '
			: '';
	str +=
		n[3] != 0
			? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand '
			: '';
	str +=
		n[4] != 0
			? (str != '' ? 'and ' : '') +
			  (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) +
			  'hundred '
			: '';
	str +=
		n[5] != 0
			? (str != '' ? 'and ' : '') +
			  (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) +
			  'RS '
			: '';
	return str;
}
//Code ENd for Integre to word conversion
//==================================

document.querySelector('#amount').addEventListener('keyup', function (e) {
	let value = this.value;
	userHere.amount = value;
	let w = inWords(value);
	const error = document.querySelector('.amtError');

	error.classList.remove('active');

	if (onlyNumber(value)) {
		document.querySelector('.amountShow span').innerText = w;
	}
	if (value == '') document.querySelector('.amountShow span').innerText = '';
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

	let rNum1 = getRandomNum(0, 11);
	let rNum2 = getRandomNum(0, 10);

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
