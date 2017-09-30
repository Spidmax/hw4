strokeWeight(1);
stroke(0);
noFill();

ellipseMode(CENTER);

for (radius = 10; radius < height; radius = radius + 10) {
    ellipse(width/2, height/2, radius, radius);
}
