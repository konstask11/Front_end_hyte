"use strict";

// Retrieve element by ID
let target = document.getElementById("target");

// Get screen width and height
let screenWidth = screen.width;
let screenHeight = screen.height;

// Get browser width and height
let browserWidth = window.innerWidth;
let browserHeight = window.innerHeight;

// Array of months
const months = [
  "tammikuu",
  "helmikuu",
  "maaliskuu",
  "huhtikuu",
  "toukokuu",
  "kesäkuu",
  "heinäkuu",
  "elokuu",
  "syyskuu",
  "lokakuu",
  "marraskuu",
  "joulukuu",
];

// Get current date
const currentDate = new Date();
const currentMonth = months[currentDate.getMonth()];

// Ensure minutes are displayed with two digits
let minutes = currentDate.getMinutes().toString().padStart(2, "0");

// Display retrieved information on the page
document.getElementById("language").innerText = "Selaimen kieli: " + navigator.language;
document.getElementById("screensize").innerText = "Näytön koko: " + screenWidth + " x " + screenHeight;
document.getElementById("windowsize").innerText = "Selaimen koko: " + browserWidth + " x " + browserHeight;
document.getElementById("dateTime").innerHTML = "Päivämäärä ja aika: " + currentDate.getDate() + ". " + currentMonth + " " + currentDate.getHours() + ":" + minutes;
