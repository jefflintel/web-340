/*
============================================
; Title:  lintel-exercise-1.5.js
; Author: Jeff Lintel
; Date:   18 February 2020
; Description: Demonstrate a node server
;===========================================
*/

//header
const header = require('../lintel-header.js');

console.log(header.display("Jeff", "Lintel", "Exercise 1.5"));

var http = require("http");

function processRequest(req, res) {

var body = "Test Test Test";

    var contentLength = body.length;

    res.writeHead(200, {

        'Content-Length': contentLength,

        'Content-Type': 'text/plain'

    });

    res.end(body);

}

var s = http.createServer(processRequest);

s.listen(8080);
