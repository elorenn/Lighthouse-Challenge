/* Different lighthouse operators are given different 
size grids based on their skills. Every lighthouse operator 
likes to be able to boast about how large their grid is. 
Grids always start at A on the X-axis and never go above Z. 
They can have any number of rows. Let's figure out how large yours is!
Up above you have access to the printed-out grid, and the JS code for 
the grid. This is your grid, for your lighthouse. Write a function 
called gridSize() that will tell you the size of your grid in the 
format width x height. Your function should return a string, and in 
this example, your function should return the string "10 x 10". 
But you have to make sure that you figure that string out by actually 
measuring your grid! */


function gridSize() {
  let y = GRID.length;
  let firstColumn = GRID[0];
  let x = firstColumn.length;
  let size = `${x} x ${y}`;
  return size;
}

gridSize();

