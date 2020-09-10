var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var but1 = document.querySelector("#but1");
var but2 = document.querySelector("#but2");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function load1() {
	alert('load');
	console.log('body.style', body.style);
	css.textContent = "linear-gradient(to right, rgb(255,0,0) , rgb(255,255,0); "
}

function conv(val1) {
	var dd = parseInt((val1 / 16).toString()).toString(16)  + parseInt((val1 % 16).toString()).toString(16);
//	alert(val1 + '____  ' + dd);

	return dd;
}

function ran(event) {
	var val1 = Math.random() * 255;
	var val2 = Math.random() * 255;
	var val3 = Math.random() * 255;
	var val = '#'
		+ conv(val1) + conv(val2) + conv(val3);
//	alert(val );
	var id = event.target.getAttribute("id");
	if (id === "but1") {
		color1.setAttribute("value", val);
	} else {
		color2.setAttribute("value", val);
	}
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

but1.addEventListener("click", ran);
but2.addEventListener("click", ran);

//body.addEventListener("load", load1);