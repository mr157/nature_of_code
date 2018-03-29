# Sin Wave
In this example we want to use the angle to generate a sine curve.
The sine curve has predetermined values, which can be called up by means of the angle. The built-in `sin()` function returns the values if you give it an angle.

First, we determine the start angle and the angular velocity:
```js
var startAngle=0;
var angleVel = 0.2;
```
The angular velocity determines the value by which the angle on the sine curve is later increased. If the angle value of a sine curve is changed, which corresponds to the x value in the coordinate system, the predefined sine curve returns another y value.

Since we want to create a ripple effect, we increase the start angle by 0.015 for each call, so the first object is always drawn at a slightly different position. This value is used to determine the sine value.

```js
    startAngle += 0.015;
    var angle = startAngle;
```
To create multiple objects, a For loop is used. This generates as many objects in steps of 10 as the width of the Canvars. Since the circles are 8 wide, this creates a column effect. This count value of the loop is also the x value of the objects.
The y value is the sine value of the angle. To get this and to use the full height of the canvas, we use again the `map()` function