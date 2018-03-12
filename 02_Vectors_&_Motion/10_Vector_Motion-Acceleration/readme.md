# Vector Motion - Acceleration

Now we add an acceleration to the script created in `09_Vector_Motion-Velocity` or its mover objects.
To do this, we simply adjust the functions of the mover file and add an acceleration vector:
```js
this. acceleration = createVector (0.09,0.04);
```

Now, in the `update ()` function, not only the velocity is added but also the acceleration. To prevent things from getting out of hand, we add a speed limiter for the speed:

```JS
    this. update = function (){
        this. velocity. add (this. acceleration);
        this. velocity. limit (15);
        this. location. add (this. velocity);
```




[see code in action](index.html)