
var colors = [];
let status = true ;  //true = hard
var squares, squaresHard, colorPicked;

var squares = document.querySelectorAll(".square");
var squaresHard = document.querySelectorAll(".hard");
var colorDisplay = document.getElementById("color-display");

var message = document.getElementById("message");
var newColorBtn = document.getElementById("new-color-btn");
var topic = document.getElementById("topic");
var easyBtn = document.getElementById("easy-btn");
var hardBtn = document.getElementById("hard-btn");

createNewColors();

function createNewColors() {
  colors = [];
  if (!status) {
    for (var i = 0; i < 3; i++) {
      colors[i] = getAColor();
    }
    colorPicked = colors[Math.ceil(Math.random() * 2)];
  } else {
    for (var i = 0; i < 6; i++) {
      colors[i] = getAColor();
    }
    colorPicked = colors[Math.ceil(Math.random() * 5)];
  }
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", checkColors);
  }
  colorDisplay.textContent = colorPicked;
  message.textContent = "";
}

function getAColor() {
  var r, g, b;
  r = Math.ceil(Math.random() * 255);
  g = Math.ceil(Math.random() * 255);
  b = Math.ceil(Math.random() * 255);
  return "RGB(" + r + ", " + g + ", " + b + ")";
}

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

newColorBtn.addEventListener("click", function () {
  this.textContent = "New Colors";
  topic.style.backgroundColor = "#5183B4";
  createNewColors();
})

hardBtn.addEventListener("click", function () {
  status = true;
  createNewColors();
  for (var i = 0; i < squaresHard.length; i++) {
    squaresHard[i].style.display = "unset";
  }
})

easyBtn.addEventListener("click",function () {
  status = false;
  createNewColors();
  for (var i = 0; i < squaresHard.length; i++) {
    squaresHard[i].style.display = "none";
  }
})
