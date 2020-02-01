var colors = generateColor(6);
var square = document.querySelectorAll(".square")
var pickedColor = pickColor()
var colorDisplay = document.querySelector("#colorDisplay")
var messege = document.querySelector("#messege")
var heading = document.querySelector("#heading")
var easyButton = document.querySelector("#easy")
var hardButton = document.querySelector("#hard")
var reset = document.querySelector("#reset")
var numSquare = 6;

reset.style.background = "white";

reset.addEventListener("click", function () {
	this.textContent = "Reset";
	reseT(numSquare);
})

easyButton.addEventListener("click", function () {
	numSquare = 3;
	reseT(numSquare);
	easyButton.style.background = "steelblue";
	easyButton.style.color = "white";
	hardButton.style.background = "white";
	hardButton.style.color = "steelblue";
	for(var i = 3; i < 6; i++) {
		square[i].style.background = "#232323";
	}
	return colors;
})

hardButton.addEventListener("click", function () {
	numSquare = 6;
	reseT(numSquare);
	easyButton.style.background = "white";
	easyButton.style.color = "steelblue";
	hardButton.style.background = "steelblue";
	hardButton.style.color = "white";
	return colors;
})
colorDisplay.textContent = pickedColor;
for(var i = 0; i < colors.length; i++){
	square[i].style.background = colors[i];


	square[i].addEventListener("click", function () {
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor) {
			messege.textContent = "Correct"
			changeColor(pickedColor);
			reset.textContent = "Play Again?"
		}
		else{
			this.style.background = "#232323";
			messege.textContent = "Try Again"
		}
	})
}
function changeColor(color) {
	for (var i = 0; i < square.length; i++) {
		square[i].style.background = color;
	}
	heading.style.background = color;
}

function pickColor() {
	var randomIndex = Math.floor(Math.random() * colors.length)
	return colors[randomIndex];
}
function generateColor(num) {
	var arr = []
	for (var i = 0; i < num; i++) {
		for(var j = 0; j < 3; j++) {
			var a = Math.floor(Math.random() * 255)
			var b = Math.floor(Math.random() * 255)
			var c = Math.floor(Math.random() * 255)
		}
		arr[i] = "rgb(" + a +", " + b +", " + c + ")";
	}
	return arr;
}

function reseT(num) {
	messege.textContent = "";
	heading.style.background = "steelbule";
	colors = generateColor(num)
	for(var i = 0; i < num; i++){
		square[i].style.background = colors[i];
	}
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	return square;
}