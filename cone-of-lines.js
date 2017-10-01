function setup() { 
	createCanvas(400, 400);
	background(255);
	stroke(0);
	strokeWeight(1);
} 

function draw() { 
	background(255);
	for (x = 10; x < width; x = x+10) {
		line(x, 0, mouseX, mouseY);
	}
}
