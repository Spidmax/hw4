noStroke();
fill(0);

ellipseMode(CENTER);

var rate = 0.7;
var x = 0;
var y = 0;


while (true) {
    background(255);
    ellipse(x, y, 15, 15);
    var targetX = mouseX;
    var targetY = mouseY;
    x = targetX*rate + x*(1-rate);
    y = targetY*rate + y*(1-rate);
}
