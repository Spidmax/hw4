createCanvas(400, 200);
background(255);
rectMode(CENTER);
fill(0);
noStroke();
rect(width/2, height/2, height-40, height-40);

noFill();
stroke(255);
strokeWeight(2);
for (r = 2; r < 300; r = r + 40) {
		ellipse(width/2, height/2, r, r);
}
