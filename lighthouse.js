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

/* Write a new function called totalCells() which will return the 
total number of cells in your grid. For this grid, it should return 100, 
but again make sure that is a calculated value and not just a number 
you type in for your function to return. We want to make all the other 
lighthouse operators jealous. */

function totalCells() {
  let y = GRID.length;
  let firstColumn = GRID[0];
  let x = firstColumn.length;
  let total = x * y;
  return total;
}

totalCells();

/* Okay, let's get our lighthouse actually doing some work! 
As the lighthouse keeper, sometimes you'll need to shine the light 
directly on a particular cell in the grid, to alert passing ships to 
a danger there. Your job is to write a function called lightCell() 
that takes in the coordinates in the form of 'A3' or 'J9' and returns 
the contents of that specific cell. (Ex: lightCell('B4'); would return "") */

function lightCell(coordinates) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let cordX = coordinates.split("")[0].toLowerCase(); 
  let cordY = coordinates.split("")[1] - 1; 
  let y = GRID[cordY];
  let x = alphabet.indexOf(cordX);
  let answer = y[x];
  return answer;
}

lightCell('B4');

/* In the area where the lighthouse is watching, the grid, there are many 
rocks which ships would need to avoid. Rocks are indicated with the ^ symbol 
on the grid. Write a function called isRock() which will take in a coordinate 
in the form of 'C7' and return a true or a false boolean value depending on 
whether there is a rock in that cell or not. (Example: isRock('D1'); would return true) */

function isRock(coordinate) {
  // return lightCell(coordinate) == '^' ? true : false;
  return Boolean(lightCell(coordinate) == '^');
}


