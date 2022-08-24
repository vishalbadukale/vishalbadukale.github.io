// function getRandomNum(min, max) {
// 	let step1 = max - min + 1;
//     // console.log(step1 +" step1")
// 	let step2 = Math.random() * step1;
//     // console.log(Math.random() + ' random');
//     // console.log(step2 + ' step2');
// 	let res = Math.floor(step2) + min;
//     // console.log(res + ' res');

// 	return res;
// }
// const  evenRandom = (min, max) => {
// 	if (min % 2 != 0) ++min;
// 	return min + 2 * getRandomNum(0, (max - min) / 2);
// }
// const oddRandom = (min, max) => {
// 	if (min % 2 == 0) ++min;
// 	return min + 2 * randomIntFromInterval(0, (max - min) / 2);
// }
// // console.log(Math.floor(2.33))

// const regx =  /^[A-Za-z]+$/; // here regex start with a /^  and end with $/
// // if u have a conditions in strings like (3)
// // then make ()()() three  and need conditon in array ([a-zA-Z])([0-9])([/-/.])
// // and limitations ([a-zA-Z]{5})([0-9]{4})([/-/.]{1})

// setTimeout(() => {
// 	// clearInterval(ss);
// }, 1000);
// const ss = setInterval(() => {
// 	document.querySelector('.optValidate i:last-child').classList.add('active');
// }, 500);

function getRandomNum(min, max) {
	let step1 = max - min + 1;
	let step2 = Math.random() * step1;
	let res = Math.floor(step2) + min;

	return res;
}
// const otp = () => {
// 	const randomOpt =
// 		getRandomNum(1, 9).toString() +
// 		getRandomNum(2, 9).toString() +
// 		getRandomNum(0, 6).toString() +
// 		getRandomNum(1, 8).toString();
// 	return randomOpt;
// };

const otp = () => {
	const randomOpt =
		getRandomNum(2, 9).toString() +
		getRandomNum(0, 7).toString() +
		getRandomNum(0, 6).toString() +
		getRandomNum(1, 8).toString();
	return randomOpt;
};

for (let i = 0; i < 50; i++) {
	console.log(otp());
	// console.log(getRandomNum(0, 8) +""+ getRandomNum(0, 8));
}
