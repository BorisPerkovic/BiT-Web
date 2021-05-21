
function greetingMessage() {
  alert("Greeting User!");
  var message = prompt("What is your name?");
  !confirm("We will submit this answer now! " + message) ? false : alert("Succes message"); 
}

greetingMessage();