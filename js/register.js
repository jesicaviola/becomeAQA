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
