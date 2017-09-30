strokeWeight(1);
stroke(0);
noFill();


for (x = 10, y = 0; x < width/2, y < height/2; x = x + 10, y = y + 10) {
    line(x, height/2-y, width-x, height/2-y);
    line(x, height/2+y, width-x, height/2+y);
}
