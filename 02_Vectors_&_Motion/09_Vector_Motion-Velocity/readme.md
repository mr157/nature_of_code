# Vector Motion - Velocity

These files contain only little new logic. We will again add a speed to the current position of the mover ball. This time, however, we want to combine or outsource the individual logics into classes.

The sketch file creates the individual movers as such and the mover file provides the functions that each mover object describes and is called via the sketch file. 

e. g. the dragging of the mover over the edge of the canvas is now integrated in the `checkEdges` function. The actual drawing and permanent updating of the position of the mover is done via the `display` or the `Update` function. The functions are called up anew for each mover:

```JS
var mover;

function setup()
    createCanvas (640,360);
    mover = new Mover();
}

function draw(){
    background (51);
    
    mover. update();
    mover. checkEdges();
    mover. display();
}
```

Especially at the Locarion vector is also that in this example we let a random center of the mover ball to be selected at the beginning. This is done using the `random?()` which result is then reduced to the pre-decimal number by means of `floor()`.

```js
createVector (Math. floor (random (width)), Math. floor (random (height)));
```


[see code in action](index.html)