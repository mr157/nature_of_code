# Part 3
In the third part, we now want to give the fluid influencing properties. We don't need to touch the Mover script, because the Movers themselves don't change or the blueprint for our Movers doesn't change anymore.

### sketch. js
We have now extended this script so that the `dragFroce` of the liquid is calculated and applied to the mover using the `applyForce ()` function. However, this only happens if a mover is also in the liquid. The query happens again with If loop and the function `contains ()`. 

```js
    if (liquids. contains (movers)){
        console. log ("Is inside liquid");
        var dragForce = liquids. calculateDrag (movers);
        movers. applyForce (dragForce);
    }
```
### liquid. js

In the Liquid script we added the calculation of the drag force.
In order to determine the speed of the mover, we determine the length of the velocity vector (magnitude of the vector). We multiply them once with itself and with the specific fluid coefficient and obtain the drag magnitude.
Since the Drag Foce always works in opposition to the current propelling force, the speed, we multiply it by -1 to reverse it. Afterwards it will normalize immediately.
Finally, multiply the resulting normal vector by the drag magnitude to determine the final force acting on the object.


```js
    this. calculateDrag = function (m){
        var speed = m. velocity. mag ();
        var dragMagnitude = this. coef * speed *speed;
        
        var dragForce = p5. Vector. mult (m. velocity, -1);
        dragForce. normalize ();
        dragForce. mult (dragMagnitude);
        return dragForce;
```