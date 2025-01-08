// var css = document.querySelector('h3');
// var color1 = document.querySelector('.color1');
// var color2 = document.querySelector('.color2');
// var body = document.getElementById('gradient');

// function setGradient() {
// 	body.style.background = 'linear-gradient(to right, ' + color1.value + ' , ' + color2.value + ')';
// 	css.textContent = body.style.background + ';'
// }

// color1.addEventListener('input', setGradient);

// color2.addEventListener('input', setGradient);

var _ = require("lodash");

var array = [1,2,3,4,5,6,7,8];
console.log('answer: ', _without(array, 3));

const css = document.querySelector('h3');
const [color1, color2] = document.querySelectorAll('.color')
const body = document.querySelector('#gradient');

setGradient = () => {
	body.style.background = _linearGradient();
	css.textContent = `${body.style.background};`;
}


_linearGradient = () => {
	return `linear-gradient(to right, ${color1.value}, ${color2.value})`;
}

color1.addEventListener('input', setGradient);

color2.addEventListener('input', setGradient);

// const flattened = [[0,1], [2,3], [4,5]].reduce(
// 	(accumulator, array) => {
// 		console.log(‘array’, array);
// 		console.log(‘accumulator’, accumulator);
// 		return accumulator.concat(array)
// }, []);