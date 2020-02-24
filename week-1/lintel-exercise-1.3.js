/*
============================================
; Title:  lintel-exercise-1.3.js
; Author: Jeff Lintel
; Date:   18 February 2020
; Description: Demonstrate node.js modules
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 1.3"));

var url = require("url");

var parsedURL = url.parse('https://forecast.weather.gov/MapClick.php?lat=41.2607&lon=-95.9403');

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);
