# Random Walkder with 9 Outcomes

This file refers to chapter `01_Intruduction/01_random_walker_with_4_outcomes` and the file `sketch01. js`. Only lines 23-33 have been adjusted.

In the new code section we divide the steps in x and y direction. A random number between -1 and 2 is determined for both directions, and this is then reduced to the pre-decimal number (floor). This allows 9 different solutions to be created, including not moving (0/0)

```javascript
 this.step = function() {
        var stepx = floor(random(-1,2));
        var stepy = floor(random(-1,2));
        
        this.x = this.x +stepx;
        this.y = this.y +stepy;
    
        this.x = constrain(this.x,0,width);
        this.y = constrain(this.y,0,height);
    }
```
[see code in action](index.html)