# Normal/Gaussian Distribution with 2 Dimensions

 Similarly in chapter `Normal/Gaussian Distribution`, the normal distribution should be shown here. In this case, however, with two random values, for x and for y.
First the background is created with the setup () function.

```javascript
function setup () {
    createCanvas (320,640);
    background (127);     
}       
```

The draw () function draws the actual circles. The variables `xloc` (x location) and `yloc` (y location) are assigned a random Gaussian number with an average value of 0 and a deviation of 1.

```javascript
function draw() {
 var xloc = randomGaussian();
 var yloc = randomGaussian();
```

`xsd` and `ysd` are the variables representing the standard deviations in x and y direction in our example.
`xMean` and `yMean` respectively calculate the horizontal and vertical center of the canvas.
```javascript
    var xsd = 100;
    var ysd = 40;
    

    var xmean = width /2;
    var ymean = height /2;
``` 
In order to determine the random x position of the circles in our example and to distribute them from the middle, the Gaussian number `xloc` is multiplied by the standard deviation `sd` and increased by the `xmean` value. 
Same is applied in y direction.

```javascript
    xloc = (xloc * xsd) + xmean;
    yloc = (yloc * ysd) + ymean;
```

`xloc` and `yloc` are now taken as x and y position in the 
ellipse () function, so that every time a circle is drawn, a new position of the circle center is used.

```javascript
  ellipse(xloc, yloc, 16, 16);
```
[see code in action](index.html)