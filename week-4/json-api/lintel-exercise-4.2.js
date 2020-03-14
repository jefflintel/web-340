/*
============================================
; Title:  lintel-exercise-4.2.js
; Author: Professor Krasso
; Date:   13 March 2020
; Modified by: Jeff Lintel
; Description: JSON API demonstration
;===========================================
*/

//header
const header = require("../../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 4.2"));

var express = require('express');

var http= require('http');

var app = express();

app.get('/customer/:id', function(request, response) {
  var id = parseInt(request.params.id, 10);

  response.json({
    firstName: 'Randy',
    lastName: 'Randallman',
    customer: true,
    customerID: id
  });
});

http.createServer(app).listen(8080, function() {
  console.log('Application started on port 8080!')
})
