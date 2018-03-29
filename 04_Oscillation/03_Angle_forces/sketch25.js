var mover;


function setup(){
    createCanvas(600,600);
     mover= new Mover(Math.floor(random(10,50)));
  
}

function draw(){
    background(220);
    
    
    
        
        var wind = createVector(0,0.01);
        var gravity = createVector(0,0*mover.mass);

        var c =0.5;
        var normal = 1;
        var frictionMag = c * normal;
        var friction = p5.Vector.mult(mover.velocity, -1);
        friction.normalize();

        mover.applyForce(wind);
        mover.applyForce(gravity);

        mover.update();
        mover.checkEdges();
        mover.display();
        
    }