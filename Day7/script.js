/*Print all even number from 0 to 100*/

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(`Even number is ${i}`);
//   }
// }

/*calculate how many vowels and consonents are in a given string using for of loop*/

// let str = prompt("Enter a your name ");
// let vowelCount = 0;
// let consonentCount = 0; //aeiou
// for (let letter of str) {
//   if (letter === 'a' || letter === "A" || letter === "e" || letter === "E" || letter === "i" || letter === 'I' || letter === "o" || letter === "O" || letter === "u" || letter === "U") {
//     vowelCount++;
//   } else {
//     consonentCount++;
//   }
// }
// console.log("vowels Count is " + vowelCount);
// console.log("consonent count is " + consonentCount);

/*Calculate the sum of first "n" numbers.*/
// let userInput = parseInt(prompt("Enter The Number to get sum of that number."))
// let sum = 0;
// for (let i = 1; i <= userInput; i++) {
//   console.log(sum, "+",
//     i);
//   sum += i;
// }
// console.log(sum);