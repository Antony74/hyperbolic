
function setup() {
  // Create the canvas
  var canvas = createCanvas(720, 400);
  canvas.parent('canvasParent');
  colorMode(HSB);
}

function draw() {

  background(200);

  // Set colors

  fill(frameCount % 255, 255, 255);

  // A rectangle
  rect(40, 120, 120, 40);
  // An ellipse
  ellipse(240, 240, 80, 80);
  // A triangle
  triangle(300, 100, 320, 100, 310, 80);
}