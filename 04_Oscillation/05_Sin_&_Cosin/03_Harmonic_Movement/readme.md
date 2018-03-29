# Harmonic Movement
In this example we want to combine movement on a circular path with the harmonic movement of the sine curve. The objects should move in a sinusoidal circle.

In addition to the angle and the radius from the previous example, we introduce the amplitude and period:
```js
var r = 30;
var theta = 0;
var period = 20;
var amplitude = 10;
```
`Amplitude`: The distance from the center of motion to either extreme
`Period`: The amount of time it takes for one complete cycle of motion

Additionally we have to clarify in advance what the `FrameCount` is.
We know that the cosine repeats every 2*PI radius. If the period is 120, then we want to repeat the oscillating movement if the `FrameCount` is 120 frames. It starts at 0 and counts upwards piece by piece. FrameCount' divided by the time period tells us how many cycles we have completed. If we multiply this number by TWO_PI, we get the desired result, since TWO_PI is the number of arcs needed for a cosine (or sine) to complete a cycle.

```js
r = amplitude * sin(TWO_PI * frameCount / period) + 150;
```
