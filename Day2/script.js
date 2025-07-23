/*Swapping Two Variables*/

// Method 1 - Using 3rd Variable

let a = 10;
let b = 15;
let c = 0;
console.log(`Before swapping ${a} & ${b}`);
c = a;
a = b;
b = c;
console.log(`After swapping ${a} & ${b}`);

// Method 2 - Without using 3rd Variable

let d = 9;//15
let e = 6;
console.log(`Before swapping ${d} & ${e}`);
d = d + e;
e = d - e;//9
d = d - e;//6
console.log(`After swapping ${d} & ${e}`);

// Method 3 - Using Destructuring Assignment.
let x = 15;
let y = 20;
console.log(`Before swapping ${x} & ${y}`);
[x, y] = [y, x];
console.log(`After swapping ${x} & ${y}`);

// Method 3 - using function that returns an array
function swap(i, j) {
  return [j, i];
}

let i = 5;
let j = 20;
console.log(`Before swapping ${i} & ${j}`);
[i, j] = swap(i, j);
console.log(`After swapping ${i} & ${j}`);

// Method 4 - using function that returns an object

