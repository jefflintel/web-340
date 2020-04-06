/*
============================================
; Title:  employees.js
; Author: Professor Krasso
; Modified by: Jeff Lintel
; Date:   4 April 2020
; Modified by: Jeff Lintel
; Description: EMS project employee db model
;===========================================
*/

//required

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

//define employee schema
var EmployeeSchema = new Schema({

  firstName: {type: String, required: true},
  lastName: {type: String, required: true}

});

//export model
//module.exports = Employee;
module.exports = mongoose.model("Employee", EmployeeSchema);
