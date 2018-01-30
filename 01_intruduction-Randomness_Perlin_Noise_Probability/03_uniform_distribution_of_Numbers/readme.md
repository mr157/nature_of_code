# Uniform Distribution of Numbers

In this file it should be shown that a random function ultimately leads to an equal distribution.


First the empty randomCount array is defined. The variable `total` is also defined for the number of elements in the array.
```javascript
var randomCounts = [];
var total = 20;
```

The Setup () function creates the canvas. The loop fills the ranodmCounts array with a louder "0".
```javascript
function setup() {
    createCanvas(640,360);
    for (var i = 0; i < total; i++) {
        randomCounts[i] = 0;
    }
}
```

The draw () function creates a new background every time the function is called. A random number between 0-19 is then generated (according to the maximum value of the total variables). This number is reduced to the pre-comma digit (floor) and the value increases the indexes of this number by one. 
```javascript
function draw() {
    background(127);
    var index = floor(random(total));
    randomCounts[index]++;
```

Here the width of each bar is calculated, depending on the canvas width, so that the bars are evenly distributed later on.
```javascript
var w = width/randomCounts.length;
```

The following For loop repeats itself as often as the number of bars and creates a bar with a height based on the value in the array at that time

```javascript
    for (var x=0; x < randomCounts.length; x++) {
        rect(x*w, height - randomCounts[x], w - 1, randomCounts[x]);
    }
}
```
[see code in action](index.html)