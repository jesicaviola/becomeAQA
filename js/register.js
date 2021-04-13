var completeName = document.getElementById('complete-name');
var errorName = document.getElementById('name-error');

completeName.onblur = function (evt) {
  if (completeName.value.indexOf(' ') < 1) {
    errorName.innerHTML = 'Please insert a valid name';
  }
}

completeName.onfocus = function (evt) {
  errorName.innerHTML = ' ';
}

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

var repeatPassword = document.getElementById('repeat-password');
var errorRepeatPassword = document.getElementById('repeat-psw-error');

repeatPassword.onblur = function (evt) {
  console.log(repeatPassword.value, password.value);
  if (repeatPassword.value !== password.value) {
    errorRepeatPassword.innerHTML = 'Please repeat the password';
  }
}

repeatPassword.onfocus = function (evt) {
  errorRepeatPassword.innerHTML = ' ';
}


var registerButton = document.getElementsByClassName("signUpBtn");
registerButton[0].onclick = function (evt) {
  evt.preventDefault();
  console.log(email.value, password.value);
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response){
      return response.json();  
    })
    .then(data => console.log(data));
}

/*
var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var number = document.getElementById("number");
var length = document.getElementById("length");

myInput.onfocus = function() {
  document.getElementById("message").style.display = "none";
}

myInput.onblur = function() {
  document.getElementById("message").style.display = "block";
}


var errors = []

var forms = document.getElementsByTagName("form");
if (forms.length !== 1) {
  errors.push('<li>there is no form, or more than 1</li>');
}

var inputs = document.getElementsByTagName("input");
console.log(inputs, inputs.length);
if (inputs.length !== 4) {
  errors.push ('<li>the document should have 4 inputs</li>');
}

for (var i = 0; i < inputs.length; i++) {
  if(inputs[i].required === false) {
    errors.push ('<li>inputs must be required</li>');
  }
}

var labels = document.getElementsByTagName('label');

var nameLabel = labels[0].getAttribute('for');
if (nameLabel !== "name") {
  errors.push ('<li>this label must get the name atribute</li>');
}

var emailLabel = labels[1].getAttribute('for');
if (emailLabel !== "email") {
  errors.push ('<li>this label must get the email atribute</li>');
}

var passwordLabel = labels[2].getAttribute('for');
if (passwordLabel !== "password") {
  errors.push ('<li>this label must get the password atribute</li>');
}

var rptPasswordLabel = labels[3].getAttribute('for');
if (rptPasswordLabel !== "rptpassword") {
  errors.push ('<li>this label must get the repeated password atribute</li>');
}

var buttons = document.getElementsByTagName('button');

var cancelButton = buttons[0].getAttribute('type');
console.log(cancelButton);

if (cancelButton !== "reset") {
  errors.push ('<li>Incorrect button</li>');
}

var signUpButton = buttons[1].getAttribute('type');
console.log(signUpButton);

if (signUpButton !== "submit") {
  errors.push ('<li>Incorrect button</li>');
}

var link = document.getElementsByTagName('a');

var anchorHref = link[0].getAttribute('href');
console.log(anchorHref);
if (anchorHref !== "login.html") {
    errors.push ('<li>Incorrect link</li>');
}

var errorListHTML = document.getElementById('error-list');
if (errors.length === 0) {
  errorListHTML.innerHTML = 'There is no errors found';
} else {
  errorListHTML.innerHTML = errors.join(' ');
}
*/
