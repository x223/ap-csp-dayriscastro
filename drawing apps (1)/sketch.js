var strokeColor = 'black';
var weight = 0;
function setup() { 
  createCanvas(windowWidth, windowHeight);
} 

function draw() { 
	if (mouseIsPressed) {
		stroke(strokeColor);
		line(pmouseX, pmouseY, mouseX, mouseY);
	
	}
}

function keyTyped() {
	if (key === 'b') {
    strokeColor = 'blue';
  } else if (key === 'p') {
    strokeColor = 'purple';
  } else if (key === 'e') {
		weight = 25;
		strokeColor = 'white';
	}
}