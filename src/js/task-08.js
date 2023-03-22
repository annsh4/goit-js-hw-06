const formRef = document.querySelector(".login-form");

formRef.addEventListener('submit', submitForm);
const profile = {};

function submitForm(event) {
  event.preventDefault();

  const email = event.currentTarget.elements.email;
  const password = event.currentTarget.elements.password;

  if (email.value === "" || password.value === "") {
    alert("You must fill in every field");
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }

  event.currentTarget.reset();
}
