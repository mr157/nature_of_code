# Vector Basic 3


In order to introduce the vectors into our script with this section, the variables `position` and `velositiy` are introduced at the beginning of the script. These are initiated in the function `setup()`. This is done by the built-in function `createVector`. Thus we have an x and y starting value for the position (in this case 100 in each case) - formerly the x and y variable - and an output value for the speed (in this case 2 in each case) - formerly xspeed and yspeed.

```js
var position;
var velocity;

function setup () {
    createCanvas (640,360);
    position = createVector (100,100);
    velocity = createVector (2,2);
```

Instead of increasing the single variables x and y by the respective speed, now the values created in the vectors are addressed. This is done by appending the placeholder variables with a dot: ` position.y` or `js velocity.x`

Also the query that the balls do not go beyond the borders is identical to the previous script. However, the exception here is that the individual values of the vectors are also used.

```js 
    position. x = position. x + velocity.x;
    position. y = position. y + velocity.y;

    if ((position. x > width) || (position. x < 0)) {
        velocity. x = velocity. x * -1;
    }
    
    if ((position. y > height) || (position. y < 0)) {
        velocity. y = velocity. y * -1;
    }
```


Translated with www.DeepL.com/Translator

[see code in action](index.html)