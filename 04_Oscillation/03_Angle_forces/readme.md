# Angle forces

This example consists of two files: Sketch and Mover. The sketch file is unchanged from a previous example and is therefore not considered in detail.

Also the Mover file is mostly known. We have now added here only the acceleration and speed in a straight path, as well as the acceleration and speed in the rotation. Thus the object not only moves from A to B, but also rotates within itself.

We already know this part:
```js
        this.velocity.add(this.acceleration);
        this.velocity.limit(10);
        this.location.add(this.velocity);
        this.acceleration.mult(0);
´´´
The acceleration of the rotation is now calculated from the speed of the object in X direction by a factor of 1000 in order to reduce it. The reduction is important, because in the next step the angular acceleration is now added to the current angle. The angle determines the rotation per frame of the object. To prevent the rotation from becoming infinitely fast, the speed is limited to values between -0.05 and +0.05 using the `contrain` function.

```js
        this.aAcceleration = this.velocity.x / 1000 ;
        this.aVelocity += this.aAcceleration;
        
        this.aVelocity = constrain(this.aVelocity,-0.05,0.05);
        this.angle += this.aVelocity;
```
