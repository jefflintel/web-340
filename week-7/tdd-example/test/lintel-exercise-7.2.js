/*
============================================
; Title:  lintel-exercise-7.2.js
; Author: Professor Krasso
; Date:   1 April 2020
; Modified by: Jeff Lintel
; Description: TDD Testing
;===========================================
*/

//header
const header = require("../../../lintel-header.js");

console.log(header.display("Jeff", "Lintel", "Exercise 7.2"));

var assert = require("assert");

describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});

function getFruits(str) {
  return str.split(',');
}

module.exports = getFruits;
