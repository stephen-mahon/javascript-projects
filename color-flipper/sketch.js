function setup() {
  createCanvas(400, 400);
  var button = createButton("CLICK ME");
  let a = button.mousePressed(colorFlipper);
}

function colorFlipper() {
  let r = floor(random(0, 255));
  let g = floor(random(0, 255));
  let b = floor(random(0, 255));
  background(r, g, b);
}