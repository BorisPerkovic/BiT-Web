
function getCarsBikes(cars, bikes) {

  var div = document.querySelectorAll("div");
  var carsId = 1;
  var bikesId = 1;
  var select1 = "";
  var select2 = "";

  select1 += "<select name='selectCars' id='selectCars'>";
  select1 += "<option value='0'>--Choose Your Favorite Japanese Car--</option>";
  cars.forEach(function (element) {
    select1 += "<option value='" + (carsId++) + "'>" + element + "</option>";
  });
  select1 += "</select>";

  select2 += "<select name='selectBikes' id='selectBikes'>";
  select2 += "<option value='0'>--Choose Your Favorite Japanese Bike--</option>";
  bikes.forEach(function (element) {
    select2 += "<option value='" + (bikesId++) + "'>" + element + "</option>";
  });
  select2 += "</select>";

  div[0].innerHTML = select1;
  div[div.length - 1].innerHTML = select2;
  return div;
};

var cars = ["Nissan", "Mazda", "Mitsubishi", "Honda", "Toyota"];
var bikes = ["Yamaha R1", "Honda CRB", "Suzuki GSX", "Kawasaki Ninja"];

getCarsBikes(cars, bikes);