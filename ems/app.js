/*
============================================
; Title:  app.js
; Author: Professor Krasso
; Modified by: Jeff Lintel
; Date:   29 March 2020
; Description: EMS Project - EJS layouts
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 6.4"));

var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page"
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
