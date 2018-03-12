var Liquid = function(_x,_y,_w,_h,_c,_r,_g,_b,_o){
    this.location = createVector(_x,_y);
    this.width = _w;
    this.height = _h;
    this.coef = _c;
    
    this.display = function(){
        
        fill(_r,_g,_b,_o);
        rect(this.location.x,this.location.y,this.width,this.height);
    }
  
    this.contains = function (m){
        return m.location.y > this.location.y && m.location.y < this.location.y + this.height && m.location.x > this.location.x && m.location.x < this.location.x + this.width
    }
    
    this.calculateDrag = function(m){
        var speed = m.velocity.mag();
        var dragMagnitude = this.coef * speed *speed;
        
        // direction is inverse of velocity
        
        var dragForce = p5.Vector.mult(m.velocity,-1);
        
        dragForce.normalize();
        dragForce.mult(dragMagnitude);
        return dragForce;
    }
    
}