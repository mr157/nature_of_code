var windchimes = [];
var movers = [];

function setup() {
    createCanvas(640, 640);
    windchimes[0] = new WindChime(550,550,4.5,180,270);
    windchimes[1] = new WindChime(50,50,4.2,0,90);
    windchimes[2] = new WindChime(50,550,4.3,270,360);
    windchimes[3] = new WindChime(550,50,4.3,90,180);
    
    //(x, y, vx, vy, ax, ay, m)
    
    for (var x=0; x<1000;x++){   
        movers [x] = new Mover(random(0,640),random(0,640),0,0,0,0,random(0,5));
    }
} 

function draw() {
    background(255);
    
    for (var j=0; j<movers.length;j++){   
        for (var i=0; i<windchimes.length;i++){ 

        movers[j].applyForce(windchimes[i].windVec);
        movers[j].display();
        movers[j].update();
        movers[j].checkEdges();
        }
    }
        
    for (var x=0; x<windchimes.length;x++){    
    windchimes[x].update(); 
    windchimes[x].display();
    
        }
    
}

