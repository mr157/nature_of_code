# Vector Magnitude

To find out the length of a vector we use the function `.mag ()`, which is appended to the vector to be calculated. 
In our example, we will get the length of our resulting vector of subtraction out and show the length in the form of a rectangle at the upper canvas border.

The `.mag ()` function is appended to the `vectorLine` Vector and the resulting value is used as the width of the rectangle.

```js
    var m = vectorLine. mag ();
    fill (255);
    stroke (0);
    rect (0.0, m, 10);

```


[see code in action](index.html)