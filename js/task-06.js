const inputRef = document.querySelector("#validation-input");
const attributeRef = Number(inputRef.getAttribute("data-length"));

inputRef.addEventListener('blur', onBlurBorderColor);

function onBlurBorderColor(event) {
	if (event.currentTarget.value.length === attributeRef) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}