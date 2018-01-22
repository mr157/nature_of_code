# Probability & Non Uniform Distributions

This file refers to chapter `01_Intruduction/01_random_walker_with_4_outcomes` and the file `sketch01. js`. Only lines 23-35 have been adjusted.

In order to influence the directional probabilities, an if loop has been built in, which outputs 4 possible results depending on the fulfillment of the conditions. The results can be the increase or decrease of x or y by one. The query condition is the value of r. r is a random number between 0-1, which means that with a query value of 0.4, there is a 40% probability that this will occur

```javascript
 this.step = function() {
        var choice = floor(random(4))
        var r = random(1);
        // A 40% of moving to the right
        if (r< 0.4) {this.x++;}
        else if (r < 0.6) {this.x--}
        else if (r < 0.8) {this.y++}
        else {this.y--;}
        
```
