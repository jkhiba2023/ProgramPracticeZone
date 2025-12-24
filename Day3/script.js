/*Write a regular function that takes a string and returns it with the first letter
capitalized*/


let str = "kabir"

function firstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(firstLetter(str));