var div = document.querySelectorAll("div");
var firstDiv = div[0];
var lastDiv = div[div.length - 1];

function addNode(product , node) {
  var produictID = 1;
  var select = "";

  select += "<select name='selectCars' id='selectCars'>";
  select+= "<option value='0'>--Choose Your Favorite Japanese vehicle--</option>";
  product.forEach(function (element) {
    select += "<option value='" + (produictID++) + "'>" + element + "</option>";
  });
  select += "</select>";

  return node.innerHTML = select;
};

var cars = ["Nissan", "Mazda", "Mitsubishi", "Honda", "Toyota"];
var bikes = ["Yamaha R1", "Honda CBR", "Suzuki GSX", "Kawasaki Ninja"];

addNode(cars, firstDiv);
addNode(bikes, lastDiv);