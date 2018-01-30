# 10_Understanding_the_Pixel_Array_in_P5-one_pixel

This file is used to show how the color of each pixel should be changed. 

First, the background is created with the `setup ()` function. `pixelDensity (1)` specifies the pixel density for the output. A density of 1 means that one pixel in the program corresponds to one pixel on the screen.

```javascript
function setup () {
	createCanvas (400,400);
	pixelDensity (0.5);
}
```

The `draw ()` function displays the output of the pixel on the screen. In the draw () function, the pixels of the canvas are read using the `loadPixel ()` function. `udatePixel ()` closes the function and updates the pixels of the canvas with the values changed between the two calls.

```javascript
loadPixels ();
       […]
updatePixels ();
```
In this example, only a specific pixel is to be changed. To do this, the index of this pixel within the pixel array is first calculated. This is done with the formal ` (X+Y * Widht) * 4`. Four, because the pixel array is always based on the 3RGB values, plus the opasity (RGBA). This index is now used to get to the "first position", i. e. the value for red, of the color value of a pixel in the pixel array. The index value is increased by 1,2 or 3 in order to change the values for G, B and A as well.

```javascript
    var index = (2+2*5)*4;
    pixels[index+0] = 255;
    pixels[index+1] = 0;
    pixels[index+2] = 0;
    pixels[index+3] = 255;
```
