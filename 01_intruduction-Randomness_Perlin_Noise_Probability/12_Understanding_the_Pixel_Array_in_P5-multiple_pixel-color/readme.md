# Understanding the Pixel Array in P5 - multiple pixel - color

This file is very similar to `sketch11` from the chapter `11_Understanding_the_Pixel_Array_in_P5-multiple_pixel`. Now we want to give each pixel a different color value, depending on its position.

The only adjustment we need to do is to define the values of x and y as color values. In this case we use the x-value for "R" and the y-value for "B".

```javascript
			pixels[index + 0] = x;
			pixels[index + 1] = 0;
			pixels[index + 2] = y;
			pixels[index + 3] = 255;
```

[see code in action](index.html)