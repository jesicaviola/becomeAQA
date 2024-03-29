var email = document.getElementById('email');
var errorEmail = document.getElementById('email-error');

email.onblur = function (evt) {
  if (email.value.indexOf('@') < 1) {
    errorEmail.innerHTML = 'Please insert a valid email';
  }
}

email.onfocus = function (evt) {
    errorEmail.innerHTML = ' ';
    console.log(email);
}

var password = document.getElementById('password');
var errorPassword = document.getElementById('psw-error');

password.onblur = function (evt) {
  if (password.value.length < 8) {
    errorPassword.innerHTML = 'Please insert a valid password';
  }
}

password.onfocus = function (evt) {
  errorPassword.innerHTML = ' ';
}

var loginButton = document.getElementsByClassName("signInBtn");
loginButton[0].onclick = function (evt) {
  evt.preventDefault();
  console.log(email.value, password.value);
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
      return response.json();  
    })
    .then(data => console.log(data));
}



/*
var errors = []

var forms = document.getElementsByTagName("form");
if (forms.length !== 1) {
  errors.push('<li>there is no form, or more than 1</li>');
}

var inputs = document.getElementsByTagName("input");
if (inputs.length !== 2) {
  errors.push ('<li>the document should have 2 inputs</li>');
}

for (var i = 0; i < inputs.length; i++) {
  if(inputs[i].required === false) {
    errors.push ('<li>inputs must be required</li>');
  }
}

var labels = document.getElementsByTagName('label');

var emailLabel = labels[0].getAttribute('for');
if (emailLabel !== "email") {
  errors.push ('<li>this label must get the email atribute</li>');
}

var passwordLabel = labels[1].getAttribute('for');
if (passwordLabel !== "password") {
  errors.push ('<li>this label must get the password atribute</li>');
}

var button = document.getElementsByTagName('button');

var loginButton = button[0].getAttribute('type');
console.log(loginButton);

if (loginButton !== "submit") {
  errors.push ('<li>Incorrect button</li>');
}

var errorListHTML = document.getElementById('error-list');
if (errors.length === 0) {
  errorListHTML.innerHTML = 'There is no errors found';
} else {
  errorListHTML.innerHTML = errors.join(' ');
}
*/