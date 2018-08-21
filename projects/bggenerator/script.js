// ~~~~~~~~~~~~~~~~~ SUPPLIES ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ // 

// Selecting the elements of interest, caching queries

// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");
// var body = document.getElementById("gradient");
// var randomize = document.getElementById("random");


// ~~~~~~~~~~~~~~~ TOOLBOX ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ //

//  -- Foundational Tools (methods) Used --

// method -- short description of use -- reference for tools used in document

// .value -- returns the value of the element -- 1
//

//~~~~ EVENTS ON PAGE LOAD ~~~~~~~~~~~~~~~~~//

// 1 - randomize the color inputs of the background

(function () { var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomize = document.getElementById("random");

	function randomizeButton() {
	color1.value = randomizeColor(),
    color2.value = randomizeColor();
    setGradient();
}
    randomizeButton();

    function randomizeColor() {
        return randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    }

    function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
	}


//~~~~ EVENTS AFTER INITIAL PAGE LOAD ~~~~~~~~~~~~~~~~~~~~//
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomize.addEventListener("click", randomizeButton);
})();	

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomize.addEventListener("click", randomizeButton);