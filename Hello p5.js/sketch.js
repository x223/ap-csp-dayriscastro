var strokeColor = 'black';
var weight = 0;
function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(220);
  text('b = ' + 'blue' + " | p = " +"yellow " + " | e = " + "Orange" + " | g = " + "grey", 10, 10);
} 

function draw() { 
	if (mouseIsPressed) {
		stroke(strokeColor);
		line(pmouseX, pmouseY, mouseX, mouseY);
		strokeWeight(10);
	}
}

function keyTyped() {
	if (key === 'b') {
    strokeColor = 'blue';
  } else if (key === 'p') {
    strokeColor = 'yellow';
  } else if (key === 'e') {
    strokeColor = 'orange';
  } else if (key === 'g') {
		strokeColor = 'grey';
	}
