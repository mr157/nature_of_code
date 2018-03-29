# Rotation of objects to the mouse pointer

In this example we take up a previous example. This is the movement of objects to the mouse pointer. This time we don't just want to move the object to the mouse pointer, we also want to align it to the mouse pointer - so still rotate the object.

How the movement to the mouse pointer works, had already been clarified and is no longer considered here (see chapter 2 Vectors & Motions, example 12) 

The new and interesting thing is now the `Display` function. Here we determine the angle by which the object is to be rotated later right at the beginning. This angle is determined using the built-in `.heading()` function. This returns the direction value of the acceleration. In other words, the angle at which the acceleration is exerted.
```js
var angle = this.acceleration.heading();
```
This value is now used to rotate the created object:
```js
  rotate(angle);
```

The rest of the script is as usual. Also the sketch file has no special features.

Translated with www.DeepL.com/Translator
