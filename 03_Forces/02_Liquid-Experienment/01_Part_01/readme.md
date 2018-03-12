# Part 1

The prerequisite is to be created in this file.

### Sketch. js 
This is a very simple setup without many additional functions. It is only interesting that the Movers objects have a set of parameters for: x-position, y-position, x-speed, y-speed, x-acceleration, y-acceleration and mass.

```js
movers = new mover (200,200,2,10,0,0,10);
```
### Mover. js

The Mover Script now takes these parameters and converts them to local variables. The addition `this. ` in front of the variables identifies a local variable that is only valid in the function. So that we don't have to assign variables individually for each value, we create a vector for the position (`location`), the velocity (`velocity`) and the acceleration (`acceleration`). 

```js
var Mover = function (_x, _y, _vx, _vy, _ax, _ay, _m){)
    this. location = createVector (_x, _y);
    this. velocity = createVector (_vx, _vy);
    this. acceleration = createVector (_ax, _ay);
    this. mass = _m;
    
```
The determination of the new position of the mover object is done again according to the `VALV` method

