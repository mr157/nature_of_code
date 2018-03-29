# Windchime

In this example we have a mover, a windchime and a sketch file. 

### mover.js
Our mover file remains largely the same, as in previous examples. We create movers objects by passing the values for the position, speed, acceleration and mass of the movers when we call them up in the sketch file.

### windchime.js
In the file Windchime we create the wind chimes. The values Position, windMag (Wind Magnitude), startAngle (start angle of the windchime arrow) and endAngle (end angle of the windchime) are passed in the sketch file when called.  These values are transferred to local variables.

```js
function WindChime(_xpos,_ypos,_windMag,_startAngle,_endAngle){
    this.xpos = _xpos;
    this.ypos = _ypos;
    this.windMag = _windMag;
    this.startAngle = _startAngle;
    this.endAngle = _endAngle;
    this.windVec = createVector();
    this.time =1000;
```

The `update` function calculates the position and orientation of the windchime or its arrows.
First the wind direction (windDir) is calculated. For this we map the values of the noise function, which depends on the time, to the values of the start and end angle. So that it is not always the same value, we increase the time value that determines the value of the noise function by the factor `0.01`.
```js
this.windDir = map(noise(this.time),0,1,this.startAngle, this.endAngle);
	[…]
	[…]
	[…]
this.time += 0.01;
```
To display the actual windchime, we need another `display` function. This draws all elements of the Windchime: The circle, a line with a triangle at the top, which results in a arrow and the caption text. 
Theoretically, each of the wind chimes is placed in the top corner, at position 0|0. But we move this with the `translate` command to the position passed from the sketch file.
```js
translate(this.xpos,this.ypos);
```
It is also important to know that we use the built-in `heading` function. This function aligns vectors to each other so that they point to the other vector. We use this to align the arrows to the `rotate` function to the wind vector.
```js
  rotate(this.windVec.heading());
            line(-65.0.65.0);

            fill(0);
            triangle(40,-15,65,0,40,15);
```



