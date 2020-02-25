/*
============================================
; Title:  lintel-exercise-2.2.js
; Author: Jeff Lintel
; Date:   24 February 2020
; Description: Use Express to set up a server
;===========================================
*/

//header
const header = require('../../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 2.2"));

var express = require("express");

var http = require("http");

var app = express();

app.use(function(request, response){
  console.log(`In comes a request to ${request.url}`);

  response.end("Hello World");

});

http.createServer(app).listen(8080);
