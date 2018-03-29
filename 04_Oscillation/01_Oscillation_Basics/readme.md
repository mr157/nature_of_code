# Oscillations Basics

In this section we want to clarify some rotation basics. This will be based on the principle of acceleration on a rotational path and not on a straight line as before.

First, the variables for the angle, speed and acceleration are initiated and the canvas is created.  
```js
var angle = 0;
var aVelocity= 0;
var aAccelearation = 0.002;

function setup(){
    createCanvas(640,440);
}
```
The `draw` function creates a new object or a number of new objects for each frame.

`translate principle`: this moves the created object including its complete reference grid. This allows the created object to be in the center of the canvas, but in the coordinate system of your own grid at another location (0|0).
If you look at the circles and lines, they appear in the middle of the canvas (width/2|height/2), but they are created at the coordinate point (0|0).

```js
translate(width/2, height/2);
rotate(angle);
stroke(0);
fill(127);

push();
line(-60.0.60.0);
ellipse(60,0,16,16);
ellipse(-60,0,16,16);
pop();
```

Also new is the concept of `Push()` and `Pop()` which allows code to be inserted without affecting the code before or after it.

```js
push();
	[…]
	[…]
	[…]

pop();
``` 

