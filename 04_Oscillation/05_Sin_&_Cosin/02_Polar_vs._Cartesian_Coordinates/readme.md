# Polar vs. Cartesian Coordinates
In this example we want to show how we use an angle to determine a position. So we convert the polar coordinates to cartesian coordinates to get an X|Y position.

We can do this by changing the sine and cosine so that we can determine the values for X and Y with the angle and the radius (which represense the hypotenuse).

```js 
    var x = r * cos(theta);
    var y = r * sin(theta);
```
This does not look like much, but it is a new way to determine the position of an object.

So that the objects run on a spiral path, we now change the radius and the angle with each eteration, so that in this case the spiral becomes smaller and smaller until it only circles within itself. 

```js
    theta += 0.02;
    r = r - 0.1;
```