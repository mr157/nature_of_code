var Mover = function(_x, _y, _vx,_vy, _ax, _ay, _m){ //x and y locations, xand y velocity, x and y acceleration, m is mass
    this.location = createVector(_x,_y);
    this.velocity = createVector(_vx,_vy);
    this.acceleration = createVector(_ax,_ay);
    this.mass = _m;
    
    this.update =function(){
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
    }
    

    this.display = function(){
        fill(255,0,0);
        stroke(0,0,155);
        strokeWeight(2);
       
        ellipse(this.location.x, this.location.y,this.mass*5,this.mass*5);
    }
    
        this.checkEdges = function(){
        if (this.location.x > width || this.location.x < 0) {
            this.velocity.x = this.velocity.x * -1;
        }

        if (this.location.y > height || this.location.y < 0) {
            this.velocity.y = this.velocity.y * -1;
            }
        }

        this.applyForce = function(force) {
            var f = p5.Vector.div(force, this.mass);
            
            this.acceleration.add(f);
        }   
}
