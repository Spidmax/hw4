createCanvas(400, 200);
background(255);
noFill();
stroke(100);
strokeWeight(1);


for (x = -width/2; x < width; x = x + 10) {
		line(x, 0, x+width/2, height);
    line(x, 0, x, height);
}

for (y = 0; y < width*0.6; y = y + 10) {
    line(0, y, width*0.4, y)
    line(width*0.4, y, width*0.4+y, 0);
}
