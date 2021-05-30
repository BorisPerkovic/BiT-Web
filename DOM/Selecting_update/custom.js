
function getSecondUl() {
  var ul = document.querySelector("#bg-color");
  ul.className = "ul-bg-color";
}

function getAllLi() {
  var li = document.querySelectorAll("li");
  li.forEach(function (element) {
    element.className = "li-bg-color";
  });
} 

function getLastLiElement() {
  var transform = document.querySelectorAll("ul");
  var lastUl = transform[transform.length - 1];
  lastUl = lastUl.children;
  for(var i = 0; i < lastUl.length; i++) {
    lastUl[i].className = "transform-bg-color";
  }
}

getSecondUl();
getAllLi();
getLastLiElement();