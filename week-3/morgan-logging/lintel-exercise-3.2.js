/*
============================================
; Title:  lintel-exercise-3.2.js
; Author: Professor Krasso
; Modified by: Jeff Lintel
; Date:   3 March 2020
; Description: Use Morgan logging
;===========================================
*/

//header
const header = require("../../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 3.2"));

var express = require("express");

var http = require("http");

var path = require("path");

var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); //tell express the views are in the "views" directory

app.set("view engine", "ejs"); //tell express to use the ejs view engine

app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index", {
    message: "Welcome to the Morgan Logger Example!"
  });
});

app.get("/test", function(request, response) {
  response.render("index", {
    message: "Welcome to the Morgan Logger Example!"
  });
});

app.get("/test/home", function(request, response) {
  response.render("index", {
    message: "Welcome to the Morgan Logger Example!"
  });
});

app.get("/test/home/1", function(request, response) {
  response.render("index", {
    message: "Welcome to the Morgan Logger Example!"
  });
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});

