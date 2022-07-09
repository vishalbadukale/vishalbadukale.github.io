function getRandomNum(min, max) {
	let step1 = max - min + 1;
	let step2 = Math.random() * step1;
	let res = Math.floor(step2) + min;

	return res;
}
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
	error.classList.remove('active');

	if (count > 0) {
		if (ab == userInput) {
            // otpLoader()
			checkOtp.classList.add('active');
			error.classList.remove('active');
            loader()
			setTimeout(() => {
               
				window.location.href = ' http://pixel6.co/';
			}, 2000);
		} else {
			// console.log('wrong otp');

			error.classList.add('active');
			checkOtp.classList.remove('active');
         
			document.querySelector('.attemptCount p span').innerText = count;
			count--;
			re();
		}
	} else if (count == 0) {
        loader()
		setTimeout(() => {
            
			window.location.href = ' http://pixel6.co/404';
		}, 1000);
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
	}, 3000);
}


// function otpLoader() {
// 	const ss = setInterval(() => {
		
// 		document.querySelector('.optValidate i:last-child').classList.add('active');
// 	}, 500);
// 	setTimeout(() => {
// 		clearInterval(ss);
// 	}, 1000);
// }
