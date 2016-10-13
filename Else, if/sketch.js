var bgColor = 'white'

function setup() {
  createCanvas(windowWidth, windowHeight)
}

function draw() {
  //background(bgColor)
    fill(bgColor);
     ellipse(250,250,mouseX,mouseY)
  if (mouseX < 1 * windowWidth / 5) {
    bgColor = '#24FFFE';
  } else if (mouseX < 2 * windowWidth / 5) {
    bgColor = '#A690E8';
  } else if (mouseX < 3 * windowWidth / 5) {
    bgColor = '#630A14';
  } else if (mouseX < windowWidth / 5) {
    bgColor = '#295B63';
  } else {
    bgColor = '#E12874';
  }
}