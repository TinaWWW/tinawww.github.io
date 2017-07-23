
var number = 6;
var colors = generateRandom(number);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var reset = document.querySelector("#reset");
var h1 = document.getElementById("head");
var msg = document.getElementById("msg");	
var easy = document.querySelector("#easy")
var hard = document.querySelector("#hard")

easy.addEventListener("click",function(){
	hard.classList.remove("selected");
	easy.classList.toggle("selected");
	number = 3;
	resetAll();
	squares[3].style.display = "none";
	squares[4].style.display = "none";
	squares[5].style.display = "none";
})

hard.addEventListener("click",function(){
	easy.classList.remove("selected");
	hard.classList.toggle("selected");
	number = 6;
	resetAll();
	squares[3].style.display = "block";
	squares[4].style.display = "block";
	squares[5].style.display = "block";
})


reset.addEventListener("click", function(){
	resetAll();
})

for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];

	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if( clickedColor === pickedColor){
			msg.textContent = "Correct!";
			changeColor(clickedColor);
			h1.style.backgroundColor = pickedColor;
			reset.textContent = "Try Again?";
		}else{
			this.style.backgroundColor = "#232323";
			msg.textContent="Try again!"
			reset.textContent = "New Colors";
		};

	});
}


function changeColor(color){
	for(var i = 0; i<squares.length; i++){
	squares[i].style.backgroundColor = color;
	};
};

function pickColor(){
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
};

function generateRandom(x){
	tempArray = [];
	for (var i = 0; i < x; i++){
	tempArray.push(randomColor());
	};
	return tempArray;
};

function randomColor(){
	var num1 = Math.floor(Math.random()*256);
	var num2 = Math.floor(Math.random()*256);
	var num3 = Math.floor(Math.random()*256);
	return "rgb(" + num1 + ", " + num2 + ", " + num3 + ")";
};

function resetAll(){
	colors = generateRandom(number);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;

	for(var i=0; i<squares.length; i++){
	squares[i].style.backgroundColor = colors[i];
	}

	h1.style.backgroundColor = "steelblue";
	reset.textContent = "New Colors";
	msg.textContent = "";
};
