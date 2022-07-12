function getRandomNum(min, max) {
	let step1 = max - min + 1;
	let step2 = Math.random() * step1;
	let res = Math.floor(step2) + min;

	return res;
}
const otp = () => {
	const randomOpt =
		getRandomNum(2, 9).toString() +
		getRandomNum(0, 7).toString() +
		getRandomNum(0, 6).toString() +
		getRandomNum(1, 8).toString();
	return randomOpt;
};
var ab;
function re() {
	ab = otp();
	console.log('Generated OTP :- ' + ab);
	return ab;
}
re();

const userInfo = () => {
	let userData = JSON.parse(localStorage.getItem('userData'));
	// console.log(userData);
	document.querySelector('#userName em').innerText = userData.Name;
	document.querySelector('#userEmail strong').innerText = userData.email;
};
userInfo();
// re();

//OTP generation

//==================================

var count = 3;
// otp vaidations
const validateOTP = () => {
	const userInput = document.querySelector('.optValidate input').value;
	const error = document.querySelector('.attemptCount');
	const checkOtp = document.querySelector('.optValidate i');
	const load = document.querySelector('.optValidate i:last-child');
	error.classList.remove('active');
	if (userInput != '') {
		if (count > 0) {
			if (ab == userInput) {
				checkOtp.classList.add('active');
				error.classList.remove('active');

				setTimeout(() => {
					window.location.href = ' http://pixel6.co/';
				}, 2000);
			} else {
				error.classList.add('active');
				checkOtp.classList.remove('active');

				document.querySelector('.attemptCount p span').innerText = count;
				count--;
				re();
			}
		} else if (count == 0) {
			setTimeout(() => {
				window.location.href = ' http://pixel6.co/404';
			}, 1000);
		}
	} else {
		error.classList.add('active');
	}
};

document
	.querySelector('.optValidate button')
	.addEventListener('click', validateOTP);

function loader() {
	const ss = setInterval(() => {
		document.querySelector('.thankYouPage').classList.add('active');
		document.querySelector('.msgPage').classList.add('active');
	}, 500);
	setTimeout(() => {
		clearInterval(ss);
		window.location.href = 'thankyou.html';
	}, 2000);
}
