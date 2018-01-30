# Probability & Non Uniform Distributions

This file refers to chapter `01_Intruduction/01_random_walker_with_4_outcomes` and the file `sketch01. js`. Only lines 23-35 have been adjusted.

In order to influence the probability of the directions, an array named probArray with possibilities was introduced. The variable index determines min a random number from the number of entries in the array (in this case 1-5). This random number is reduced to the pre-decimal number so that it corresponds to the format of an index in the array. Since two entries each contain 1 or 3, the probability for these numbers is 40% (with 5 possible results) and for the two only 20%.

```javascript
    this.step = function() {
        var probArray = [];
        probArray[1] = 1;
        probArray[2] = 1;
        probArray[3] = 2;
        probArray[4] = 3;
        probArray[5] = 3;
        
        var index = floor(random(probArray.length));
        var r = probArray[index];
```
[see code in action](index.html)