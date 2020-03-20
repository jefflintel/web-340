/*
============================================
; Title:  lintel-exercise-4.2.js
; Author: Professor Krasso
; Date:   20 March 2020
; Modified by: Jeff Lintel
; Description: Pug templating
;===========================================
*/

//header
const header = require("../../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 5.3"));

var express = require("express");

var http = require("http");

var pug = require("pug");

var path = require("path");

var app = express();

app.set("views", path.resolve(__dirname, "views"));

app.set("view engine", "pug");

app.get("/", function(request, response) {

  response.render("index", {

    message:"This was templated using Pug"

  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
