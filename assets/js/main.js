// JavaScript Document

var wwidth, dwidth;
$(function() {
	wwidth=$("#wwidth");
	dwidth=$("#dwidth");
	DisplayScreenWidth();
	$( window ).resize(function() {
		DisplayScreenWidth();
	});
	function DisplayScreenWidth(){
		console.log("Set Screen");
		varsw=$( window ).width();
		wwidth.html(varsw+"px");
		varsw=$( document ).width();
		dwidth.append(varsw+"px ");
	}
});