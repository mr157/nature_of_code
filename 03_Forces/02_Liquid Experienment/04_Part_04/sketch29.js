var movers = [];
var liquids = [];

function setup(){
    createCanvas(640,640);
       
    liquids[0] = new Liquid(200,100,200,100,0.1,255,0,0,200);
    liquids[1] = new Liquid(200,205,200,100,0.3,0,0,255,200);
    liquids[2] = new Liquid(200,310,200,100,0.01,0,255,0,200);
    liquids[3] = new Liquid(200,420,200,100,0.5,0,0,0,200);
    
    movers[0]= new Mover(width/2,50,0,2,0,0,10);
    movers[1]= new Mover((width/2)-50,50,0,2,0,0,7);
   }

function draw() {
  background(255);

  for(var i = 0; i < liquids.length; i++){
    liquids[i].display();
  }

  for(var i = 0; i < movers.length; i++){
    for(var m = 0; m < liquids.length; m++){
      if(liquids[m].contains(movers[i])){
        movers[i].applyForce(liquids[m].calculateDrag(movers[i]));
      }
    }
  }

  for(var i = 0; i < movers.length; i++){

    var gravity = createVector(0, 0.1 * movers[i].mass);

    movers[i].applyForce(gravity);
    movers[i].display();
    movers[i].checkEdges();
    movers[i].update();
  }
}