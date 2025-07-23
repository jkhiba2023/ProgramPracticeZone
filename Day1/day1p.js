/*JavaScript Program to Add Two Numbers*/

//method 1 using normal function

function adding(n1, n2) {
  return n1 + n2;
}

let n1 = 23; n2 = 47;
const result1 = adding(n1, n2);
console.log(result1);

//method2 using arrow functions

const add = (x, y) => (x + y);
let x = 1, y = 2;
const result2 = add(x, y);
console.log(result2);

/*JavaScript Program to Find the Square Root*/

function sqrRoot(x) {
  return x * x;
}

let a = prompt("Enter Number for Square");
result3 = sqrRoot(a);
console.log(result3);


