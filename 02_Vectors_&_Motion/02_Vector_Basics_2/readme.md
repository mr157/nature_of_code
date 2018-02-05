# Vector Basic 2


As in the previous example, we want to move a ball on the screen with this script. This time not only in the x direction, but also in the y direction.

The setup for this is the same, except that now not only a "velocity" is defined for the `x` value, i. e. a static displacement of the point x, but also a "velocity" for the y coordinate - `xspeed` and `yspeed`. 

```js
var x = 100;
var y = 100;
var xspeed = 2.5;
var yspeed = 2;
```

Afterwards, the x and y values are increased by the static "speed" with each call, which always causes the ball to appear at a different position, shifted by this value. This causes the ball to move in X and Y direction.

```js
    x = x = x + xspeed;
    y = y + yspeed;
```

To ensure that the ball does not extend beyond the edges of the canvas, an IF loop for x and y checks whether the coordinates are still within the width or height of the canvas.

```js
    if ((x> width) || (x<0)) {
        xspeed = xspeed * -1;
    }
     if ((y> height) || (y<0)) {
        yspeed = yspeed * -1;
     }
```



[see code in action](index.html)