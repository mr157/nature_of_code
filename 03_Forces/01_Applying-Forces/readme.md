# Apllying Forces

This subchapter will show a whole range of things: A wind and gravitational force is to act on the objects (movers) as well as a frictional force ("friction loss"). Each object shall receive a mass that influences the effects of both forces. 

Without going too far into physical prerequisites, it should be noted, each force is equal to mass times acceleration: ** F = m * a ** Exactly this formula applies to all objects. 

Let's have a look at our `Mover` script again. 

### Mover. js
First, vectors for the position, velocity and acceleration are created again. The position is determined randomly, the other two vectors are provided with fixed values. Especially this time, however, the mover function gets a parameter `m`. This value describes the mass of the object. In our case, dealing with the mover circles. 
To be able to use this value in the further course of this script, it is assigned to the local variable `this. mass`.

```js
var Mover = function (m){
    this. location = createVector (Math. floor (random (width)), Math. floor (random (height)));
    this. velocity = createVector (2,2);
    this. acceleration = createVector (0,0);
    this. mass = m;
```

The next step is to add the Velocity + Acceleration after **VALV** and then Location + Velocity. This is done in the non static addition.

```Js
    this. update =function (){.
        this. velocity. add (this. acceleration);
        this. velocity. limit (10);
        this. location. add (this. velocity);
        this. acceleration. mult (0);
    }
```

As I said at the beginning, the mass is nothing more than the circumference of the circle. Therefore, this is now considered in the `Display ()` function when drawing the circle:

```js
        ellipse (this. location. x, this. location. y, this. mass, this. mass);
    }
```

Newly added is the `applyForces ()` function, which will apply all forces we want to let affect the objects later on. 
A force vector is transferred to this function and this is divided by the mass. The newly created vector (Stitic Addtion Method) is then added to the current acceleration.

```js
        this. applyForce = function (force) {
            var f = p5. Vector. div (force, this. mass);
            
            this. acceleration. add (f);
        }   
}
```

### Sketch. js

This is where all the values come into play. 
First the initial empty mover array is created, as well as the maximum number of mover objects.

```js
var movers=[];
var numberOfMover = 20;
```

The `setup ()` function is as we know it, except for one exception: Now we give each mover object a random number between 10 and 50 - our mass.

```js 
    movers[i]= new Mover (Math. floor (random (10,50));
    }
```

Here comes magic now **.... the actual forces that affect the mover objects are nothing but vectors. Vectors with a specific direction and strength. This also makes sense, since we have already seen in the `applyForces ()` function, that these vectors of acceleration are added together and thus change its direction and speed - as in the real nature.

```js
        var wind = createVector (0,0);
        var gravity = createVector (0,0*movers[i]. mass);
```
It is certainly noticeable that gravity is still influenced by the mass of the object. The higher the mass, the higher the effective force.

In order to calculate the frictional force, one must understand that it always works against the direction of the current movement. With this knowledge in mind, we create a new vector with the alignment, like the current speed of the mover object and turn it around (multiply it by -1)
```js
var friction = p5. Vector. mult (movers[i]. velocity, -1);
```
If we were to use this vector in this way, the mover would immediately come to a standstill, as the friction would completely cancel out the current movement. That this does not happen, we use a coefficient of friction multiplied by the normalized vector. 

```js
        var c =0.5;
        var normal = 1;
        var frictionMag = c * normal;
        var friction = p5. Vector. mult (movers[i]. velocity, -1);
        friction. normalize ();
        friction. mult (frictionMag);
```

The individual forces, or rather its vectors, are now passed to the `applyForces ()` function to influence the mover objects as described above.

```JS
        movers[i]. applyForce (friction);
        movers[i]. applyForce (wind);
        movers[i]. applyForce (gravity);
```


[see code in action](index.html)