strokeWeight(1);
stroke(0);
noFill();

rectMode(CENTER);

for (x = width/6; x < width; x = x + width/6) {
    for (length = 20; length < width/6; length = length + 10) {
         rect(x, height/2, length, length);
    }
} 
