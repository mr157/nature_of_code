# Vector Basic 1

This chapter deals with the use of vectors in programming.

`Def`
```
A vector is an entity that has both intensity and direction. Typically, vectors are drawn as arrows, where the direction of the vector is indicated by the direction of the arrow, and the intensity is indicated by the length of the arrow itself. 
```

This script should show how a ball moves back and forth on the screen. This is not yet about vectors as such. First, the principle of the forces acting on the ball is explained.

First, variables `x` and `y` are assigned to start values, which serve as starting points. Also we define the variable `xspeed` which represents the static speed of the ball later on.
As in the previous examples, the function `setup()` creates the background canvas.


```javascript
var x = 320;
var y = 180;
var xspeed = 2;

function setup ()
    createCanvas (640,360);
}
```

The `draw()` function draws the actual ball. Each time the function is executed, a new ball is drawn at position x and y. 
```js
    // Display circle at x position
    stroke (0);
    strokeWeight (2);
    fill (127);
    ellipse (x, y, 48,48,48);

}
```

The movement of the ball takes place because the middle point x, around which the ball is drawn, is moved by the "speed" `xspeed`. By the prescribed center point and the constant redrawing, the impression is created that the ball moves. The previously drawn ball will be overwritten every time the `background()` function is executed. 

```JS
    background (51);
    
    //Add the current speed to the position.
    x = x = x + xspeed;
```

In order to prevent the ball from leaving the background area, an IF loop checks whether the current x value is not less than 0 or not greater than the width of the canvas, otherwise the ball would be drawn outside the canvas and you could not see it. However, if this is the case, the value for the speed is reversed and thus the direction is reversed. 

```js    
    if ((x> width) || (x<0)) {
        xspeed = xspeed * -1;
    }
```    


[see code in action](index.html)