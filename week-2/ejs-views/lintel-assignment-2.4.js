/*
============================================
; Title:  lintel-exercise-2.4.js
; Author: Jeff Lintel
; Date:   25 February 2020
; Description: Demonstrate EJS views
;===========================================
*/

//header
const header = require("../../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 2.4"));

var http = require("http");

var express = require("express");

var path = require("path");

var app = express();

//tell express the views are in the "views" directory
app.set("views", path.resolve(__dirname, "views"))

//tell express to use the ejs view engine
app.set("view engine", "ejs");

app.get("/", function(request, response){
  response.render("index", {
    firstName: "Jeff",

    lastName: "Lintel",

    address: "123 N. 4th Street, Omaha, NE 68123"
  });

});

http.createServer(app).listen(8080, function() {
  console.log("EJS-Views app started on port 8080");
});
