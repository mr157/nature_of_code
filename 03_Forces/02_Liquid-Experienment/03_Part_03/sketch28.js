var movers;
var liquids;

function setup(){
    createCanvas(600,600);
       
    liquids = new Liquid(200,height/2,200,200,0.2,0,0,255,100);
    movers = new Mover(200,200,2,10,0,0,10);
   }

function draw(){
    background(60);
    
    liquids.display();
    
    if (liquids.contains(movers)){
        console.log("Is inside liquid");
        var dragForce = liquids.calculateDrag(movers);
        movers.applyForce(dragForce);
    }
    
    
    movers.update();
    movers.checkEdges();
    movers.display();
    }