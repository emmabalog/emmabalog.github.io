// JavaScript Document

// global variables
var eggs = 0;
var chicks = 0;
var cartons = 0;
var trucks = 0;
var farms = 0;
var eggtopia = 0;
var universee = 0;

function chicken_clicker() {
	eggs++;
	update_values();
}

// buy("chicks");
function buy(sel) {
	switch(sel) {
		case "chicks":
			if(eggs >= 10) {
				eggs-=10;
				chicks++;
			}
			break;
		case "cartons":
			if(eggs >= 100) {
				eggs-=100;
				cartons++;
			}
		break;
		case "trucks":
			if(eggs >= 500) {
				eggs-=500;
				trucks++;
	}
			break;
		case "farms":
			if(eggs >= 1000) {
				eggs-=1000;
				farms++;
			}
			break;
		case "eggtopia":
			if(eggs >= 100000) {
				eggs-=100000;
				eggtopia++;
			}
			break;
		case "universee":
			if(eggs >= 100000000) {
				eggs-=100000000;
				universee++;
				break;
			}
			}
	update_values();
}

function update_values() {
	document.getElementById("eggs").value= eggs;
	document.getElementById("chicks").value= chicks;
	document.getElementById("cartons").value= cartons;
	document.getElementById("trucks").value= trucks;
	document.getElementById("farms").value= farms;
	document.getElementById("eggtopia").value= eggtopia;
	document.getElementById("universee").value= universee;
}

setInterval(bonus, 1000);
function bonus() {
	eggs+=chicks*1;
	eggs+=cartons*2;
	eggs+=trucks*3;
	eggs+=farms*5;
	eggs+=eggtopia*8;
	eggs+=universee*100;
	update_values();
}

setInterval(gold, 1000000000);
function gold() {
	eggs+=500;
}

function save() {
	var exdays = 120;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = "eggs=";
}

function clear(){
	var eggs = 0;
	var chicks= 0;
	var cartons = 0;
	var truck = 0;
	var farm = 0;
	var eggtopia = 0;
	var universee = 0;
}

function loaded() {
}
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}
