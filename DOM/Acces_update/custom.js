
function getTextFromLi() {
  var liText = document.querySelector(".some-class").textContent;
  alert(liText);
}

function someText(param) {
  var ul = document.querySelectorAll("ul");
  var lastLiChild = ul[0].lastElementChild;
  lastLiChild.textContent = param;
}
var string = "Some text as argument";

getTextFromLi();
someText(string);