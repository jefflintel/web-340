/*
============================================
; Title:  lintel-exercise-4.4.js
; Author: Professor Krasso
; Modified by: Jeff Lintel
; Date:   14 March 2020
; Description: Demonstrates CRUD operations in a
;              Node.js API.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/", function(request, response) {
  response.send("API invoked as an HTTP GET request. In terms of CRUD this is Read.");
});

app.put("/", function(request, response) {
  response.send("API invoked as an HTTP PUT request. In terms of CRUD this is Update.");
});

app.post("/", function(request, response) {
  response.send("API invoked as an HTTP POST request. In terms of CRUD this is Create.");
});

app.delete("/", function(request, response) {
  response.send("API invoked as an HTTP DELETE request in terms of CRUD this is Delete.");
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
