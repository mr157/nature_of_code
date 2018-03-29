var angle = 0;
var aVelocity= 0;
var aAccelearation = 0.002;

function setup(){
    createCanvas(640,440);
}

function draw(){
    background(220);
    
    translate(width/2, height/2);
    rotate(angle);
    stroke(0);
    fill(127);

    push();
    line(-60,0,60,0);
    ellipse(60,0,16,16);
    ellipse(-60,0,16,16);
    pop();
    
    aVelocity = aVelocity + aAccelearation;
    aVelocity = constrain(aVelocity,0,0.1);
    angle = angle + aVelocity;
}