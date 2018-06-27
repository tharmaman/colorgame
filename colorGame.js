
var nSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode")

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

// mode button event listeners
function setUpModeButtons(){
	for (var i = 0; i <modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? nSquares = 3 : nSquares = 6;
			reset();
		});
	}
}

// square event listeners
function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		// add click listeners to squares
		squares[i].addEventListener("click", function()
		{
			// grab color of clicked square
			var clickedColor = this.style.backgroundColor
			// compare color to picked color
			if (clickedColor === pickedColor)
			{
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}
			else
			{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	// generate all new colors
	colors = generateRandomColors(nSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors"
	messageDisplay.textContent = "";
	// change colors of squares
	for (var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
	// resetting background color
	h1.style.backgroundColor = "steelblue";
}

// initializing reset button
resetButton.addEventListener("click", function(){
	reset();
})

// changing the header span to print out the picked color
colorDisplay.textContent = pickedColor;

function changeColors(color){
	// loop through all squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(n){
	// make an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < n; i++){
		// get random color and push into array
		arr.push(randomColor());
	}
	// return that array
	return arr;
}

function randomColor(){
	// pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256);

	// pick a "green" from 0 to 255
	var g = Math.floor(Math.random() * 256);

	// pick a "blue" from 0 to 255
	var b = Math.floor(Math.random() * 256);

	// formatting into RGB string
	return "rgb(" + r + ", " + g + ", " + b + ")";

}