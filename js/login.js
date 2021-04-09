
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

