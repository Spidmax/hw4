function setup() { 
	createCanvas(400, 400);
	background(255);
		noStroke();
} 

var h = 0;

function draw() { 
  	fill(h, 100, 100);
  	ellipse(width/2, height/2, 100, 100);
  	h = h + 5;
  
  	if (h >= 360) {
    	h = 0;
  	}
}
