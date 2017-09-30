background(0);
noStroke();
fill(255);

ellipseMode(CENTER);

for (x = 10; x < width; x = x + 10) {
    for (y = 10; y < height; y = y + 10) {
        ellipse(x, y, 6, 6);
    }
} 
