const btnOnClickIncrement = document.querySelector("[data-action='increment']");
const btnOnClickDecrement = document.querySelector("[data-action='decrement']");
const containerButton = document.querySelector('#counter ');

const totalResult = document.getElementById('value');

let counterValue = 0;
const increment = () => {
	counterValue += 1;

	totalResult.textContent = counterValue;
};

const decrement = () => {
	counterValue -= 1;

	totalResult.textContent = counterValue;
};
btnOnClickIncrement.addEventListener('click', increment);
btnOnClickDecrement.addEventListener('click', decrement);