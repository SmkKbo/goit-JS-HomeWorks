const inputForm = document.getElementById('validation-input');
const validationLimit = Number(inputForm.getAttribute('data-length'));

const validationCheckup = () => {
	if (inputForm.value.length !== validationLimit) {
		inputForm.classList.add('invalid');
		inputForm.classList.remove('valid');
	} else {
		inputForm.classList.add('valid');
		inputForm.classList.remove('invalid');
	}
};
inputForm.addEventListener('blur', validationCheckup);