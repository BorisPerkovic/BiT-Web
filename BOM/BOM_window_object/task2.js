/*========================= 
WINDOW NAVIGATOR
========================= */

/* browser platform */
function getPlatform() {
  console.log("Platfrom: ", window.navigator.platform);
}

/* browser version */
function browserInformation() {
  console.log("Browser Information: ", window.navigator.userAgent);
}

/* browser company */
function broswerCompany() {
  console.log("Browser Company: ", window.navigator.vendor);
}

/* browser online or offline */
function isOnline() {
  window.navigator.onLine ? console.log("Browser Is OnLine") : console.log("Browser Is OffLine");
}

/*========================= 
WINDOW SCREEN
========================= */

/* browser width and height */
function browserWidthHeight() {
  console.log("Browser Width: ", window.screen.width);
  console.log("Browser Height: ", window.screen.height);
}

/* browser max possible height */
function browserMaxHeight() {
  console.log("Browser Max Possible Height: ", window.screen.availHeight);
}

/*========================= 
WINDOW LOCATION
========================= */

/* full URL address, domain name, used protocol, parameters of URL */
function fullUrl() {
  console.log("Full URL Address: ", window.location.href);
  console.log("Domain Name: ", window.location.hostname);
  console.log("Used Protocol: ", window.location.protocol);
  console.log("Parameters of URL: ", window.location.pathname);
}

/* redirection */
function browserMaxHeight() {
  console.log("Browser Max Possible Height: ", window.screen.availHeight);
}

/*============================== 
WINDOW LOCAL AND SESSION STORAGE
============================== */

/* browser local storage */
window.localStorage.setItem("firstname", "Boris");
//window.localStorage.removeItem("firstname");
var string = localStorage.getItem("firstname");

function printDataLocalStorage(data) {
  data !== "" && data !== null ? console.log("First name: ", data) : console.log("Local Storage is empty");
}

/* browser session storage */
window.sessionStorage.setItem("lastname", "Perkovic");
//window.sessionStorage.removeItem("lastname");
var string1 = sessionStorage.getItem("lastname");

function printDataSessionStorage(data) {
  data !== "" && data !== null ? console.log("Lastname name: ", data) : console.log("Session Storage is empty");
}

/*============================== 
WINDOW HISTORY
============================== */

window.history.back();


console.log("window.navigator:");
getPlatform();
browserInformation();
broswerCompany();
isOnline();
console.log("-----------------");

console.log("window.screen:");
browserWidthHeight();
browserMaxHeight();
console.log("-----------------");

console.log("window.location:");
fullUrl();
//window.location.reload();
//window.location.replace("https://borisperkovic.rs/");
console.log("-----------------");

console.log("window.localStorage and window.sessionStorage:");
printDataLocalStorage(string);
printDataSessionStorage(string1);
console.log("-----------------");