const inputRef = document.querySelector('#name-input');
const nameInputRef = document.querySelector('#name-output');
const emptyInputRef = 'незнакомец';

inputRef.addEventListener('input', event => {
	nameInputRef.textContent = event.target.value;
	if (inputRef.value.length === 0) {
		nameInputRef.textContent = 'незнакомец';
	}
});