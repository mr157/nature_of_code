# Vector Motion -  Accelration towards Mouse

Now we want to make the whole thing even more dynamic and let the movers circle around the mouse position. 
To do this, we first create an empty acceleration vector and a mouse vector that consists of the x and y positions of the mouse. To get the resulting vector we have to subtract the location vector. Not the way we used to do it ("mouse. sub (location)"), because this would change the mouse vector. We do not want that.
Therefore we use the function built into P5. P5. Vector. sub "which returns a new vector without affecting one of the original vectors. The resulting vector is our movement acceleration.

```js
this. acceleration = createVector ();
```
resp.

```js
        var mouse = createVector (mouseX, mouseY);
        
        this. acceleration = p5. Vector. sub (mouse, this. location);
```

**Important**
```
Non Static – velocity.add(location)This changes the velocity vector and it as impact on the original vector.

If we want a new vector returned to us we use a static method as follows - newVelocity = p5.Vector.add(velocity,location)
```

**Addion order of vectors**
```
VALV: Velocity + Acceleration  --> Location + Velocity
```
[see code in action](index.html)