const rangeControlRef = document.querySelector("#font-size-control");
const textRef = document.querySelector('#text');

rangeControlRef.addEventListener('input', fontSizeControl);

function fontSizeControl(event) {
	textRef.style.fontSize = event.currentTarget.value + 'px';
}