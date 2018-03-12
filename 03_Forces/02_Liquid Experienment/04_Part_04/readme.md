# Part 4

In the last part of our liquid experiment we want to create not only one mover object and one liquid, but several.

To do this, we initialize arrays for the movers and liquids at the beginning.

```js
var movers =[];
var liquids =[];
```
Then they are filled with objects and liquids according to several movers. Specific properties are assigned to each of them.

```js
    liquids[0] = new Liquid (200,100,200,100,100,0.1,255,0,0,0,200);
    liquids[1] = new Liquid (200,205,200,100,0.3,0,0,255,200);
    liquids[2] = new Liquid (200,310,200,100,0.01,0,255,0,200);
    liquids[3] = new Liquid (200,420,200,100,0.5,0,0,0,0,200);
    
    movers[0]= new Mover (width/2,50,0,2,0,0,0,10);
    movers[1]= new Mover ((width/2)-50,50,0,2,0,0,0,7);

```

To display each liquid, we call its `disply ()` function with a For loop.

```js 
  for (var i = 0; i < liquids. length; i++){)
    liquids[i]. display ();
  }
```
We do the same for the movers and all functions that affect them.

```js
  for (var i = 0; i < movers. length; i++){)

    var gravity = createVector (0,0.1 * movers[i]. mass);

    movers[i]. applyForce (gravity);
    movers[i]. display ();
    movers[i]. checkEdges ();
    movers[i]. update ();
  }
```
But the really exciting part is when we check if a mover is in a liquid. This is also done for each mover, but also for each liquid. Therefore we need two For loops. 
If there is a mover in one of the liquids, the drag force will be defined and applied to the mover, depending on both of them.

```js
  for (var i = 0; i < movers. length; i++){)
    for (var m = 0; m < liquids. length; m++){)
      if (liquids[m]. contains (movers[i]){)
        movers[i]. applyForce (liquids[m]. calculateDrag (movers[i]);
      }
    }
  }
```
