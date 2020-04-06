/*
============================================
; Title:  site.js
; Author: Jeff Lintel
; Date:   4 April 2020
; Description: Custom js for ems project
;===========================================
*/

$(document).ready(function(){

  $('.card').mouseenter(function() {
      var overlay = $(this).children('div.card-img-overlay');
      $(overlay).fadeTo(1000, 0);
      console.log('test');
  });

  $('.card').mouseleave(function() {
      var overlay = $(this).children('div.card-img-overlay');
      $(overlay).fadeTo(1000, 1).delay(500);
  });



});

