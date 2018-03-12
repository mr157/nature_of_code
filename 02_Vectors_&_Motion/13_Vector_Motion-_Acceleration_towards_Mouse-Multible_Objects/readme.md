# Vector Motion -  Accelration towards Mouse - Multiple Objects

In the file we want to create not only one mover object, but several (in the example there are 20). To do this, we use a For loop to create any number of mover objects at once. Now for each of these mover objects, the functions are called by a second For loop.

```js
var movers = [];

function setup(){
    createCanvas(640,360);
    for (var i=0; i < 20; i++){
        movers[i] = new Mover();
    }
}

function draw(){
    background(51);
    
    for (var i=0 ; i< movers.length; i++){
    movers[i].update();
    movers[i].checkEdges();
    movers[i].display();
    }
}
``` 



[see code in action](index.html)