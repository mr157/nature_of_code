# Part 2

Now we're starting to introduce a liquid. The liquid will still not have any influencing properties. We want to find out where a liquid is and if there is a mover in the area.

### Sketch. js
In order to assign values of a liquid, we first need an appropriate variable: `liquids`.

Similar to the mover object, the fluid variable parameters are now given. These are (in this order): the x-position and the y-position, the width and height, the specific coefficient for the liquid (which later determines the density and thus the flow characteristic of the liquid), the color as RGB values and the transparency.

```js
var liquids;

[….]
liquids = new Liquid (200, height/2,200,200,200,0.2,0,0,255,100);
```

To check whether an object is currently in the fluid, a Console. log entry is written when the mover is in the fluid. If the function `Contains` returns a positive value, the console displays "Is iside liquid". What exactly the function `Contains ()` does is described below.

```js
    if (liquids. contains (movers)){
        console. log ("Is inside liquid");
```

### mover. js
In this script we have not adjusted.

### liquid. js
In order to define the exact properties of the liquids, we add a new script. 
Here the passed parameters (see sketch. js) are converted into local variables.

```js
var Liquid = function (_x, _y, _w, _h, _c, _r, _g, _b, _o){)
    this. location = createVector (_x, _y);
    this. width = _w;
    this. height = _h;
    this. coef = _c;
```
The `Disply ()` function defines the shape, color and position of the liquid.

```js 
    this. display = function (){.
        
        fill (_r, _g, _b, _o);
        rect (this. location. x, this. location. y, this. width, this. height);
    }
```

The `contains ()` function now determines whether a given mover is ` (m)` in the fluid. This is done by checking whether the y-position of the mover is larger than the y-position of the liquid, but is also smaller than the y-position + the height of the liquid area. The same is done for the x-position, but not the height but the width. 

```js
    this. contains = function (m){
        return m. location. y > this. location. y && m. location. y < this. location. y + this. height && m. location. x > this. location. x && m. location. x < this. location. x + this. width. x
    }
 ```
