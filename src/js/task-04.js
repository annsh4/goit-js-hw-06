let counterValue = 0;
const valueRef = document.getElementById("value");
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', function () {
	counterValue -= 1;
	valueRef.textContent = counterValue;
});

incrementBtn.addEventListener('click', function () {
	counterValue += 1;
	valueRef.textContent = counterValue;
});