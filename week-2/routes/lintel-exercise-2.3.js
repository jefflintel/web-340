/*
============================================
; Title:  lintel-exercise-2.3.js
; Author: Jeff Lintel
; Date:   24 February 2020
; Description: Use Express for routing
;===========================================
*/

//header
const header = require('../../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 2.3"));

var express = require("express");

var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.end("Welcome to the homepage!");
});

app.get("/about", function(request, response) {
  response.end("Welcome to the about page!");
});

app.get("/contact", function(request, response) {
  response.end("Welcome to the contact page!");
});

app.use(function(request, response) {
  response.statusCode = 404;

  response.end("404!");
});

http.createServer(app).listen(8080);
