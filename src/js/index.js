import { randomLetter } from './constans';
import { buttonPasswordElement, inputRangeElement } from './dom';
import { insertPasswordLength, printPassword } from './function-password';

const randomNumber = () => {
	return Math.floor(Math.random() * randomLetter.length);
};

inputRangeElement.addEventListener('input', insertPasswordLength);

buttonPasswordElement.addEventListener('click', printPassword);

export { randomNumber };
