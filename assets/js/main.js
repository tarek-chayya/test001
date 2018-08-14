// JavaScript Document

var wwidth, dwidth, itsnow;
var dt = new Date();
var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
$(function() {
	wwidth=$("#wwidth");
	dwidth=$("#dwidth");
	itsnow=$("#itsnow");
	DisplayScreenWidth();
	$( window ).resize(function() {
		DisplayScreenWidth();
	});
	itsnow.html(time);
	function DisplayScreenWidth(){
		console.log("Set Screen");
		varsw=$( window ).width();
		wwidth.html(varsw+"px");
		varsw=$( document ).width();
		dwidth.append(varsw+"px ");
	}
});