/*
============================================
; Title:  lintel-exercise-7.3.js
; Author: Professor Krasso
; Date:   1 April 2020
; Modified by: Jeff Lintel
; Description: Chai testing
;===========================================
*/

var fruits = require('../lintel-fruits');

var chai = require('chai');

var assert = chai.assert;

describe('fruits', function() {

  it('should return an array of fruits', function() {

  var f = fruits('Apple,Orange,Mango');

  assert(Array.isArray(f));

  });

});
