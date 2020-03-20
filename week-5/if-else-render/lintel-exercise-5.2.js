/*
============================================
; Title:  lintel-exercise-4.2.js
; Author: Professor Krasso
; Date:   20 March 2020
; Modified by: Jeff Lintel
; Description: EJS if-else rendering
;===========================================
*/

//header
const header = require("../../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 5.2"));

var express = require("express");

var http = require("http");

var path = require("path");

app = express();

app.set("view engine", "ejs");

app.set("views", path.resolve(__dirname, "views"));

var n = ["Randy", "Rick", "Rachel", "Roger", "Raven"];

app.get("/", function(request, response){

  response.render("index", {

    names:n

  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
