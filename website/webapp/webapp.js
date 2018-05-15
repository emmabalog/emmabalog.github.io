// JavaScript Document

//var name = prompt("Hi there! What do you want to name you egg company?");
//document.write("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "+name+" ");
	
	//var warn = alert("Chrome does not support this web browser. Please contact us for more info.")
// global variables
var eggs = 0;
var chicks = 0;
var cartons = 0;
var trucks = 0;
var farms = 0;
var eggtopia = 0;
var universee = 0;

window.onload = function() { 
	load_cookies();
	update_values();
};

function chicken_clicker() {
	eggs++;
	update_values();
	//document.getElementById("eggs")
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
	document.getElementById("eggs").value= Math.floor(eggs);
	document.getElementById("chicks").value= chicks;
	document.getElementById("cartons").value= cartons;
	document.getElementById("trucks").value= trucks;
	document.getElementById("farms").value= farms;
	document.getElementById("eggtopia").value= eggtopia;
	document.getElementById("universee").value= universee;
}

setInterval(bonus, 100);
function bonus() {
	eggs+=chicks*0.05;
	eggs+=cartons*0.1;
	eggs+=trucks*0.15;
	eggs+=farms*0.25;
	eggs+=eggtopia*0.4;
	eggs+=universee*5;
	update_values();
}

setInterval(power, 100000);
function power() {
	Math.random();
	if(0 < eggs && eggs < 10) {
		// do something
		chicks=chicks+10;
		alert("You got 10 extra chicks to start you off!");
	} 
	else if(11 < eggs && eggs < 250) {
		// do something different!
		cartons=cartons+5;
		alert("You got a gift of 5 cartons!");
	} 
	else if( 251 < eggs && eggs < 500) {
		trucks= trucks+2;
		alert("Happy Birthday! Here's two trucks just for you!");
		// do something more different!
	} 
	else if (501 < eggs && eggs < 10000){
	farms=farms+1;
	alert("Howdy Do! You have now started 1 farm!");
	}
	else if (10001 < eggs && eggs < 100000){
		eggtopia=eggtopia+1;
		alert("I knew you always wanted to be Mayor! Here's a eggtopia for you to rule!");
	} 
	else {
		universee=universee+1;
		alert("TO SPACE!!!! You discovered one chicken universe.");
		// when everything else fails...
	}
} 


	// clear cookies
function clear_game() {
    document.cookie = "eggs=0;";
    document.cookie = "chicks=0;";
    document.cookie = "trucks=0;";
    document.cookie = "farms=0;";
    document.cookie = "cartons=0;";
    document.cookie = "eggtopia=0;";
    document.cookie = "universee=0;";
	location.reload();
	// reload the page
}
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);
    var newlink = document.createElement("link");

    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
}

// COOKIES
setInterval(save_game, 100);
function save_game() {
	var exdays = 1000;
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
	console.log("saving..." + "\neggs= " + eggs + "\nchicks=" + chicks + "\ntrucks=" + trucks + "\nfarms=" + farms + "\ncartons=" + cartons + "\neggtopia=" + eggtopia + "\nuniversee=" + universee);
    document.cookie = "eggs=" + eggs + ";" + expires;
    document.cookie = "chicks=" + chicks + ";" + expires;
    document.cookie = "trucks=" + trucks + ";" + expires;
    document.cookie = "farms=" + farms + ";" + expires;
    document.cookie = "cartons=" + cartons + ";" + expires;
    document.cookie = "eggtopia=" + eggtopia + ";" + expires;
    document.cookie = "universee=" + universee + ";" + expires;
	console.log(document.cookie);
}

function get_cookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function load_cookies() {
	if( get_cookie("eggs") !== "" ) {
		eggs = Number(get_cookie("eggs"));
	}
	else {
		eggs = 0;
	}
	if( get_cookie("chicks") !== "" ) {
		chicks = Number(get_cookie("chicks"));
	}
	else {
		chicks = 0;
	}
	if( get_cookie("cartons") !== "" ) {
		cartons = Number(get_cookie("cartons"));
	}
	else {
		cartons = 0;
	}
	if( get_cookie("trucks") !== "" ) {
		trucks = Number(get_cookie("trucks"));
	}
	else {
		trucks = 0;
	}
	if( get_cookie("farms") !== "" ) {
		farms = Number(get_cookie("farms"));
	}
	else {
		farms = 0;
	}
	if( get_cookie("eggtopia") !== "" ) {
		eggtopia = Number(get_cookie("eggtopia"));
	}
	else {
		eggtopia = 0;
	}
	if( get_cookie("universee") !== "" ) {
		universee = Number(get_cookie("universee"));
	}
	else {
		universee = 0;
	}
	}
