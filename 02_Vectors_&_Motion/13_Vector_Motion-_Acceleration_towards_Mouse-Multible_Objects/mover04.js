var Mover = function(){
    this.location = createVector(Math.floor(random(width)),Math.floor(random(height)));
    
    this.velocity = createVector(3,2);
    this.acceleration = createVector();
       
    this.update = function(){
        var mouse = createVector(mouseX, mouseY);
        
        this.acceleration = p5.Vector.sub(mouse, this.location);
        this.acceleration.setMag(0.5);
        
        
        this.velocity.add(this.acceleration);
        this.velocity.limit(8);
        this.location.add(this.velocity);
    }

this.display = function(){
    
    stroke(150);
    strokeWeight(1);
    fill(255,0,0);
    
    ellipse(this.location.x, this.location.y,20,20);
    }

this.checkEdges = function(){
    if (this.location.x > width || this.location.x < 0) {
        this.velocity.x = this.velocity.x * -1;
    }
    
    if (this.location.y > height || this.location.y < 0) {
        this.velocity.y = this.velocity.y * -1;
    }
    }
}