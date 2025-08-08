/*Immediately Invoked Function Expression
setTimeout(function () {
  console.log("Hello Jabir!!!!")
}, 10000);
*/

/*Write a regular function that takes a string and returns it with the first letter capitalized*/

// function capitalizedFirstLetter(str) {
//   return upperCase(str);
// }

// capitalizedFirstLetter("jabir");


/*Show an alert message that says "Please login* after 5 seconds on your website.
*/
// setTimeout(function () {
//   alert("Please Login!!!");
// }, 5000);

/*Make an arrow function that takes a price and a discount and returns the price after discount.*/

const finalPrice = (originalPrice, discountPercentage) => {
  let discountAmount = (originalPrice * discountPercentage) / 100;
  let finalPrice = originalPrice - discountAmount;
  return finalPrice;
}

console.log(finalPrice(200, 10));
