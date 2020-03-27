/*
============================================
; Title:  lintel-exercise-6.2.js
; Author: Professor Krasso
; Date:   23 March 2020
; Modified by: Jeff Lintel
; Description: Connecting to MongoDB
;===========================================
*/

//header
const header = require("../../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 6.2"));

var express = require("express");

var http = require("http");

var logger = require("morgan");

var mongoose = require("mongoose");

var MongoDB = "mongodb+srv://admin:1BUDweiser@buwebdev-cluster-1-09j90.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(MongoDB, {
  //useMongoClient: true,
  //updated to reflect new MongoDB connection parameters. Thanks, warning messages!
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.Promise = global.Promise;

var db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connected error:"));

db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

var app = express();

app.use(logger("short"));

http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080!");
});

