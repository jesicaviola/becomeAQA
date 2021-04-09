
var errors = []

var forms = document.getElementsByTagName("form");
if (forms.length !== 1) {
  errors.push('<li>there is no form, or more than 1</li>')
}

var inputs = document.getElementsByTagName("input");
if (inputs.length !== 2) {
  errors.push ('<li>the document should have 2 inputs</li>')
}

for (var i = 0; i < inputs.length; i++) {
  if(inputs[i].required === false) {
    errors.push ('<li>inputs must be required</li>')
  }
}

var labels = document.getElementsByTagName('label');

var emailLabel = labels[0].getAttribute('for');
if (emailLabel !== "email") {
  errors.push ('<li>this label must get the email atribute</li>')
}

var emailLabel = labels[1].getAttribute('for');
if (emailLabel !== "password") {
  errors.push ('<li>this label must get the password atribute</li>')
}

var errorListHTML = document.getElementById('error-list');
errorListHTML.innerHTML = errors.join(' ')