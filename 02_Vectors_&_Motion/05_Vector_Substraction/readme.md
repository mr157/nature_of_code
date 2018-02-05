# Vector Subtraction

This file should now show how to subtract two vectors from each other. To do this, we will draw a line between the center point and the current mouse position.

Basically, the subtraction works similarly to the addition of vectors: the x or y value of the first vector is subtracted from the respective x or y value of the second vector. The result is a new vector with the resulting values for x and y.

In the following lines we can see that the position of the mouse is stored aswell as the center of the canvas - both as vectors.

```js
  var mouse = createVector (mouseX, mouseY);
  var center = createVector (width/2, height/2);
```

The subtraction is done by means of the built-in function `. sub()`, which is attached to the first vector. The vector to be subtracted is in parentheses.  

```JS
   var vectorLine = mouse. sub (center);
```

The center coordinates are subtracted from the mouse coordinates to give a lines endpoint coordinates. The starting point of the new vector is always (0 | 0). In order to be able to draw the resulting vector between the mouse position and the center of the Cava, the resulting vector is shifted by half of the width or height of the canvas. 

```js
translate (width /2, height/2);
```


[see code in action](index.html)