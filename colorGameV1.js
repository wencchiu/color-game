
var colors = [];
for (var i = 0; i < 6; i++) {
  colors[i] = getAColor();
}

var squares = document.querySelectorAll(".square");
var squaresHard = document.querySelectorAll(".hard");

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
  squares[i].addEventListener("click", checkColors);
}

var status = true;
if (status) {
  colorPicked = colors[Math.ceil(Math.random() * 5)];
} else {
  colorPicked = colors[Math.ceil(Math.random() * 2)];
}

var colorDisplay = document.getElementById("color-display");
colorDisplay.textContent = colorPicked;

function getAColor() {
  var r, g, b;
  r = Math.ceil(Math.random() * 255);
  g = Math.ceil(Math.random() * 255);
  b = Math.ceil(Math.random() * 255);
  return "RGB(" + r + ", " + g + ", " + b + ")";
}

var message = document.getElementById("message");
var newColorBtn = document.getElementById("new-color-btn");
var topic = document.getElementById("topic");
var easyBtn = document.getElementById("easy-btn");
var hardBtn = document.getElementById("hard-btn");

function checkColors() {
  console.log(this.style.backgroundColor);
  console.log(colorPicked);
  if (this.style.backgroundColor.toUpperCase() === colorPicked) {
    message.textContent = "Correct!";
    newColorBtn.textContent = "PLAY AGAIN?";
    topic.style.backgroundColor = colorPicked;
    for (var i = 0; i < squares.length; i++) {
      squares[i].style.backgroundColor = colorPicked;
    }
  } else {
    this.style.backgroundColor = "#232323";
    message.textContent = "Try Again";
  }
}

function createNewColors() {
  message.textContent = "";
  for (var i = 0; i < 6; i++) {
    colors[i] = getAColor();
  }
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", checkColors);
  }
  var colorPickedTemp = colors[Math.ceil(Math.random() * 5)];
  colorDisplay.textContent = colorPickedTemp;
  colorPicked = colorPickedTemp;
}

newColorBtn.addEventListener("click", function () {
  this.textContent = "New Colors";
  topic.style.backgroundColor = "#5183B4";
  createNewColors();
})

hardBtn.addEventListener("click", function () {
  createNewColors();
  status = true;
  for (var i = 0; i < squaresHard.length; i++) {
    squaresHard[i].style.display = "unset";
  }
})

easyBtn.addEventListener("click",function () {
  status = false;
  var squaresEasy = [];
  message.textContent = "";
  //get 3 colors
  for (var i = 0; i < 3; i++) {
    colors[i] = getAColor();
  }
  //assign a target color
  var colorPickedTemp = colors[Math.ceil(Math.random() * 2)];
  colorPicked = colorPickedTemp;
  colorDisplay.textContent = colorPickedTemp;
  //assign 3 colors to div
  for (var i = 0; i < 3; i++) {
    squaresEasy[i] = squares[i];
  }
  console.log(squaresEasy);
  for (var i = 0; i < 3; i++) {
    squaresEasy[i].style.backgroundColor = colors[i];
    squaresEasy[i].addEventListener("click", checkColors);
  }
  //hide 3 hard div
  for (var i = 0; i < squaresHard.length; i++) {
    squaresHard[i].style.display = "none";
  }
  //

  squares = squaresEasy;
  console.log(squares);

})
