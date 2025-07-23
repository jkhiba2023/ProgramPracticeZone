/*Get user to input two number using prompt and print their possible arithmetic result*/

// let a = Number(prompt("Enter Number From 1 to 300"));
// let b = Number(prompt("Enter Number from 1 to 300"));
// console.log("a+b=", a + b);
// console.log("a-b=", a - b);
// console.log("a/b=", a / b);
// console.log("a*b=", a * b);
// console.log("a%b=", a % b);

/*Get user to input a number using prompt and check whether even or odd using ternary operator*/

// let num = Number(prompt("Enter Number to check even or odd"));
// let result = (num % 2 === 0) ? ("Even number") : ("Odd number");
// console.log(result);

/*let x=5;
     x+=3;
     x-=2;
     x*=4;
     x/=6;
     x%=3 = 1 */


// let x = 5;
// x += 3;
// x -= 2;
// x *= 4;
// x /= 6;
// x %= 3;
// console.log(x);

/*check if a number is within a range between 10 and 20

let range = Number(prompt("Enter number from 10 to 20"));
let result = (range >= 10 && range <= 20) ? ("number lies between 10 to 20") : ("Number is either less than 10 or more than 20");
console.log(result);*/

/*WAP to find the largest number between 3 numbers using ternary operator.*/

let a = 44;
let b = 15;
let c = 77;
let result = (a > b) ? (a > c ? a : c) : (b > c ? b : c);
console.log(result);
