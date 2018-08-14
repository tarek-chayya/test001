// JavaScript Document

var wwidth, dwidth;
$(function() {
	swidth=$("#swidth");
	DisplayScreenWidth();
	$( window ).resize(function() {
		DisplayScreenWidth();
	});
});
function DisplayScreenWidth(){
	varsw=$( window ).width();
	wwidth.html(varsw+"px / ");
	varsw=$( document ).width();
	dwidth.append(varsw+"px ");
}