// JavaScript Document

var swidth;
$(function() {
  // Handler for .ready() called.
  swidth=$("#swidth");
  DisplayScreenWidth();
  $( window ).resize(function() {
	  DisplayScreenWidth();
  });
  function DisplayScreenWidth(){
	  varsw=$( window ).width();
	  swidth.html(varsw+"px / ");
	  varsw=$( document ).width();
	  swidth.append(varsw+"px ");
  }
});