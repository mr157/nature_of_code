# Random Walkder with 4 Outcomes

In this file a Walker class, the Walker objects, is created. When the step function is called on this object, it selects a random number each time and generates a result from it. We also limit the x and y value using the built-in constrain () function.

The two main functions are called up right at the beginning. The setup () function initializes the background and sets the frame. The draw () function calls the object's built-in function.
```javascript
var walker;

function setup() {
    createCanvas(320,640);
    background(127);
    walker = new Walker();    
}

function draw() {
    walker.render();
    walker.step();
}
```

Within the Walker class 2 variables are initialized (x and y) and assigned to values. Two functions are then added to each object. The render function draws a point at the specified x- and y-coordinate.

```javascript
function Walker() {
    this.x = width/2;
    this.y = height/2;
    
    this.render = function() {
        stroke(0);
        point(this.x,this.y);
    }
```

The step function generates a random number between 0 and 4 and reduces this number to the pre-decimal number (floor). Based on this result, a selection is made by using the if then else statement, which changes the x or y coordinate. The next time you draw, the render function updates its position.
The `contrain` function prevent the walker form going out of the canvans.

```javascript
    this.step = function() {
        var choice = floor(random(4));
        if (choice === 0) {
            this.x++;
        } else if (choice === 1) {
            this.x--;
        } else if (choice === 2) {
            this.y++;
        } else {
            this.y--;
        }
        
        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }
    
}
```
[see code in action](index.html)