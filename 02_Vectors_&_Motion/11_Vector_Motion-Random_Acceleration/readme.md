# Vector Motion - Random Acceleration

While the acceleration in the previous script was still constant, we now want to make it random.

To do this, we use the built-in random function to create random vectors: ` p5. Vector. random2D ()`.

To make sure that this vector doesn't get too big and the mover objects rush over the screen, we will reduce the vector by multiplying it by 0.02

```js
    this. acceleration = p5. Vector. random2D ();
    this. acceleration. mult (0.02);
```


[see code in action](index.html)