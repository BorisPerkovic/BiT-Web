var dogBtn = document.querySelector("#dogBtn");
var imagePlace = document.querySelector("#imagePlace");


function getDogImg() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://dog.ceo/api/breeds/image/random");
    xmlhttp.send();
    xmlhttp.onload = function() {

    if(xmlhttp.status === 200) {

      var jsonDoc = xmlhttp.responseText;
      var json = JSON.parse(jsonDoc);
      var imgURL = json.message;
      imagePlace.innerHTML =  "<img src='" + imgURL + "'>";
    }
    
  };
  
};


dogBtn.addEventListener("click", function() {
  getDogImg();
});