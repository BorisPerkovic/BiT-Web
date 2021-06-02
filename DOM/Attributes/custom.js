var form = document.querySelectorAll("form input");

function validateRequired(form) {
  form.forEach(function (element) {
      if(element.hasAttribute("required") && element.value == "") {
        element.className = "red-border";
      }  
  });
}

validateRequired(form);
