const wrap_runner = {
	input: document.getElementById('font-size-control'),
	span: document.getElementById('text'),
};

wrap_runner.input.addEventListener('input', handleInputRange);
function handleInputRange(event) {
	wrap_runner.span.style.fontSize = event.currentTarget.value + 'px';
}