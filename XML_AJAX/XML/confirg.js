var countryBtn = document.querySelector("#countryBtn");
var inputCountry = document.querySelector("#country");
var countryText = document.querySelector("#countryText");


function getCountryByIp(country) {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "http://www.geoplugin.net/xml.gp?ip=" + country);
    xmlhttp.send();
    xmlhttp.onload = function() {

    if(xmlhttp.status === 200) {
      var xmlDoc = xmlhttp.responseXML;
      var country = xmlDoc.querySelector("geoplugin_countryName");
      countryText.textContent =  country.textContent;
    }
    
  };
};


countryBtn.addEventListener("click", function() {
  getCountryByIp(inputCountry.value);
});


