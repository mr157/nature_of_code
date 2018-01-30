# One Dimensional Noise

In this file the concept of Perlin Noise should be introduced for the first time. 
First of all, a canvas is created again, which represents the background for the circles created later. This is done by the `setup ()` function.

The `draw ()` function creates a black background with an opasity of 15% for each pass. This results in a wiping effect of the drawn circles, as the previous circle only "disappears" completely when several backgrounds are combined.

```javascript
function draw () {
    fill (0,15);
    rect (0.0, width, height);
    walker. render ();
    walker. step ();
}
```

In the `Walker ()` function, the actual circles are created. This always starts in the middle of the canvas. `xOff` describes the x offset and is a random number between 0 and 1000, which describes the place, also called time, where the value for the `noise` function is taken.

```javascript
this. x = width/2;
this. xoff = random (1000);
```
The `render ()` function now draws circles with a 50% fill and without stroke. The center of the circles is the current x value.

```javascript
this. render = function () {
        noStroke ();
        fill (255,45,050);
        ellipse (this. x, 500,40,40,40);
    }
```

To make a "step" the x position has to be redefined. To do this, the noise value for xOff is used (If we call the noise function on this value it will return a value between 0 and 1.) and the `map` function assigns a new value between 0 and the width of the canvas for this noise value in oder to translate it. After that, xOff (the time) is increased.

```javascript
this. step = function () {
        this. x = map (noise (this. xoff), 0,1,0, width;
        this. xoff += 0.005;
    }
```
[see code in action](index.html)