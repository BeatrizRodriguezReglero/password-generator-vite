import { randomNumber } from '.';
import { randomLetter } from './constans';
import { inputPasswordElement, lengthRangePasswordElement } from './dom';
let passwordLength = lengthRangePasswordElement.value;

const generatePassword = () => {
	let password = '';
	for (let index = 0; index < passwordLength; index++) {
		const generatedRandomNumber = randomNumber();
		password += randomLetter[generatedRandomNumber];
	}
	return password;
};

const printPassword = () => {
	inputPasswordElement.value = generatePassword();
};

const insertPasswordLength = event => {
	passwordLength = event.target.value;
	lengthRangePasswordElement.textContent = passwordLength;
};

export { generatePassword, printPassword, insertPasswordLength };
