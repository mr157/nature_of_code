var movers;

function setup(){
   createCanvas(600,600);
       
   movers = new Mover(200,200,2,10,0,0,10);
   }

function draw(){
    background(60);
   
        
    movers.update();
    movers.checkEdges();
    movers.display();
    }