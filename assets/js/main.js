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
	DisplayTime();
	function DisplayScreenWidth(){
		console.log("Set Screen");
		varsw=$( window ).width();
		wwidth.html(varsw+"px");
		varsw=$( document ).width();
		dwidth.append(varsw+"px ");
	}
	function DisplayTime(){
		dt = new Date();
		time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
		itsnow.html(time);
		setTimeout(function(){ DisplayTime() }, 1000);
	}
});