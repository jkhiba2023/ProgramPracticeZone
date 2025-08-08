/*Immediately Invoked Function Expression
setTimeout(function () {
  console.log("Hello Jabir!!!!")
}, 10000);
*/

/*Show an alert message that says "Please login" after 5 seconds on your website.
*/
// setTimeout(function () {
//   alert("Please Login!!!");
// }, 5000);

/*Make an arrow function that takes a price and a discount and returns the price after discount.*/

// const finalPrice = (originalPrice, discountPercentage) => {
//   let discountAmount = (originalPrice * discountPercentage) / 100;
//   let finalPrice = originalPrice - discountAmount;
//   return finalPrice;
// }

// console.log(finalPrice(200, 10));



/*Write a regular function that takes a string and returns it with the first letter capitalized*/

// function firstLetterCapitalized(str) {
//   return (str.charAt(0).toUpperCase() + str.slice(1));
// }

// console.log(firstLetterCapitalized("jabir"));
// console.log(firstLetterCapitalized("khan"));


/*Create a function that builds a username from a full name.*/

// let userName = (fullname) => {
//   return ("@" + fullname.charAt(0).toUpperCase() + fullname.slice(1) + fullname.length);
// }

// console.log(userName("Jabirkhan"));

/*Write a function that takes a traffic light color and gives the correct instruction (e.g "go" for green, "stop" for red, "caution" for
yellow, and "invalid color" for anything else.)*/

// function trafficLightColor(color) {
//   if (color === "red") {
//     console.log("stop");
//   } else if (color === "yellow") {
//     console.log("caution");
//   } else if (color === "green") {
//     console.log("go");
//   } else {
//     console.log("Invalid color");
//   }
// }

// console.log(trafficLightColor("green"));

