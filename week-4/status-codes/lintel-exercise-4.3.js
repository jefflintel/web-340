/*
============================================
; Title:  lintel-exercise-4.3.js
; Author: Professor Krasso
; Date:   13 March 2020
; Modified by: Jeff Lintel
; Description: HTTP status codes
;===========================================
*/

//header
const header = require("../../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 4.2"));

var express = require('express');

var http= require('http');

var app = express();

app.get("/not-found", function(request, response) {
  response.status(404);

  response.json({
    error: "The resource was not found."
  })
});

app.get("/ok", function(request, response) {
  response.status(200);

  response.json({
    message: "The page loaded correctly. Yay."
  })
});

app.get("/not-implemented", function(request, response) {
  response.status(501);

  response.json({
    error: "This page has not been implemented."
  })
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
