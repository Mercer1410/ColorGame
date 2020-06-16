var numSquare = 6;
var colors = [];
var pickedcolor;
var h1 = document.querySelector("h1");
var square = document.querySelectorAll(".square");
var colordisplay = document.querySelector("#colordisplay");
var msgdisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setModeBtn();

	setSquares();

	reset();
}

function setModeBtn(){
	for(var i = 0; i<modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquare = 3: numSquare = 6;

			reset();
		});
	}
}

function setSquares(){
	for (var i = 0; i < square.length; i++ ) {
		square[i].addEventListener("click", function(){
			var clickedcolor = this.style.backgroundColor;

			if (clickedcolor === pickedcolor) {
				changecolor(clickedcolor);
				msgdisplay.textContent = "Correct";
				h1.style.backgroundColor = pickedcolor;
				resetButton.textContent = "Play Again";
			}else{
				msgdisplay.textContent = "Try Again";
				this.style.backgroundColor = "#232323"
			}
		});
		
	}
}




function reset(){
	//message display reset
	msgdisplay.textContent = "";
	//generate all new colors
	colors = generateRandomColors(numSquare);
	//pick a new random color
	pickedcolor = pickcolor();
	//change color display
	colordisplay.textContent = pickedcolor;
	//change colors of squares
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = colors[i];
		
	}
	//display 3 or 6 squares
	for(var i = 0; i<square.length; i++){
		if (colors[i]) {
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		}else{
			square[i].style.display = "none";
		}
	}
	//Play Again to New Colors
	resetButton.textContent = "New Colors";
	//h1 color reset
	h1.style.backgroundColor = "steelblue";

}

resetButton.addEventListener("click", function(){
	reset();
});


function changecolor(color){
	for (var i = 0; i < square.length; i++) {
		square[i].style.backgroundColor = color;
	}
}

function pickcolor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = []
	//add random colors to array
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	//return that array
	return arr;

}

function randomColor(){
	//red value 0-255
	var r = Math.floor(Math.random()*256);
	//green value 0-255
	var g = Math.floor(Math.random()*256);
	//blue value 0-255
	var b = Math.floor(Math.random()*256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}