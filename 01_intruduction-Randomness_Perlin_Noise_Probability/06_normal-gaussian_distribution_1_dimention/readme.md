# Normal/Gaussian Distribution

In this file, the Gaussian or normal distribution is to be displayed based on the distribution of circles. 
To do this, use the setup () function to create the background first.

```javascript
function setup() {
    createCanvas(320,640);
    background(127);     
}       
```

The draw () function draws the actual circles. To get a random Gaussian number with the mean value 0 and a deviation of 1, we use the built-in randomGaussian () function and assign its value to the variable `xloc`.

```javascript
function draw() {
 var xloc = randomGaussian();
    console-log(xloc);        
```

The variable `sd` corresponds to the standard deviation for our example. So how far the values in our example deviate from the normal Gaussian random number. In this example, the value is 60. 
The mean variable calculates the horizontal center of our canvas.

```javascript
   var sd = 60;        
```

In order to determine the random x position of the circles in our example and to distribute them from the middle, the Gaussian number `xloc` is multiplied by the standard deviation `sd` and increased by the `mean` value. 

```javascript
    var mean = width /2;
    xloc = (xloc * sd) + mean;        
```

`xloc` is now taken as x position in the ellipse () function, so that every time a circle is drawn, a new position of the center is used.

```javascript
     ellipse(xloc, height / 2, 16, 16);       
```
[see code in action](index.html)