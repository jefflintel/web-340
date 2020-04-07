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
//express
const express = require("express");
const http = require("http");
const path = require("path");
//logging
const logger = require("morgan");
//database
const mongoose = require("mongoose");
const Employee = require("./models/employees");
//helmet xss
var helmet = require("helmet");

//mLab database connection
var mongoDB = "mongodb+srv://admin:1BUDweiser@buwebdev-cluster-1-09j90.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error: "));

db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance!");
})

var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

//static paths
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//use helmet
app.use(helmet.xssFilter());


app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    message: "XSS Prevention Example"
  });
});

//new employee
var employee = new Employee({
  firstName: "Randy",
  lastName: "Randallman"
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
