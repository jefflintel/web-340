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
const helmet = require("helmet");
//csurf, body parser, cookie parser
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const csurf = require("csurf");

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

//set csurf
var csurfProtection =csurf({cookie: true});

//set ejs views
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));

//static paths
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

//use helmet
app.use(helmet.xssFilter());

//use csurf, body parser, cookie parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(csurfProtection);
app.use(function(request, response, next) {
  var token = request.csrfToken();
  response.cookie('XSRF-TOKEN', token);
  response.locals.csrfToken = token;
  next();
})


app.get("/", function(request, response) {
  response.render("index", {
    title: "Home page",
    message: "XSS Prevention Example"
  });
});

app.get("/new", function(request, response) {
  response.render("new", {
    title: "EMS || New"
  });
})

app.post("/process", function(request, response) {
  //console.log(request.body.txtFirstName);
  if(!request.body.txtFirstName) {
    response.status(400).send("Entries must have a first name!");
    return;
  }

  //get request's form data
  var employeeFirstName = request.body.txtFirstName;
  var employeeLastName = request.body.txtLastName;
  console.log(employeeFirstName + employeeLastName);

  //create new employee model
  var employee = new Employee({
    firstName: employeeFirstName,
    lastName: employeeLastName
  });

  //save
  employee.save(function(err) {
    if(err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeFirstName + " " + employeeLastName + " saved successfully!");
    }
    response.redirect("/");
  });

});

//find all
app.get("/list", function(request, response) {
  Employee.find({}, function(error, employees) {
     if (error) throw error;
     response.render("list", {
         title: "EMS || List",
         employees: employees
     });
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
