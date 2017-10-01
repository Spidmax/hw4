createCanvas(400, 200);
background(255);
noFill();
stroke(100);
strokeWeight(1);


for (d = 0; d < width; d = d + 10) {
  	line(width/2-d, 0, width/2, d);
  	line(width/2, d, width/2+d, 0);
  	line(0, d, width/2, d);
  	line(width/2+d, 0, width/2+d, height);
}
