# Understanding the Pixel Array in P5 - multiple pixel

This file is very similar to `sketch10` from chapter `10_Understanding_the_Pixel_Array_in_P5-one_pixel`. Here we will not only change a fixed pixel, but all pixels of the canvas.

This requires two loops connected in series: One that queries each Y column and a second that queries the corresponding x-values for the Y column.

```javascript
	for (var y = 0; y < height; y++) {)
		for (var x = 0; x < width; x++) {)
```

Also here again an `index` is determined. This time not fixed, but relative to the loop value of x and y. Then, as in the previous example, we adjust the pixel array to the corresponding index. The result is a red canvas.

```javascript
    var index = (x + y * width) * 4;
    pixels[index + 0] = 255;
    pixels[index + 1] = 0;
    pixels[index + 2] = 0;
    pixels[index + 3] = 255;
```

[see code in action](index.html)