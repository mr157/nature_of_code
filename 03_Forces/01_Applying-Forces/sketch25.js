var movers=[];
var numberOfMover = 20;

function setup(){
    createCanvas(600,600);
    for (var i=0; i < numberOfMover; i++){
    movers[i]= new Mover(Math.floor(random(10,50)));
    }
}

function draw(){
    background(60);
    
    
    for (var i=0 ; i< numberOfMover; i++){
        
        var wind = createVector(0,0);
        var gravity = createVector(0,0*movers[i].mass);

        var c =0.5;
        var normal = 1;
        var frictionMag = c * normal;
        var friction = p5.Vector.mult(movers[i].velocity, -1);
        friction.normalize();
        friction.mult(frictionMag);
    
        movers[i].applyForce(friction);
        movers[i].applyForce(wind);
        movers[i].applyForce(gravity);

        movers[i].update();
        movers[i].checkEdges();
        movers[i].display();
        }
    }