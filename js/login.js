
var errors = []

var forms = document.getElementsByTagName("form");
if (forms.length !== 1) {
  errors.push('<li>there is no form, or more than 1</li>')
}

var inputs = document.getElementsByTagName("input");
if (inputs.length !== 2) {
  errors.push ('<li>the document should have 2 inputs</li>')
}


