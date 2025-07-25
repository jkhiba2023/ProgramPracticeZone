/*WAP to check if the stock of a product is 0. If it is, display the message "Product is out of stock".*/

// let productInStock = 0;
// if (productInStock === 0) {
//   console.log("Product is out of stock.")
// } else {
//   console.log(`Number of Product in stock is ${productInStock}`);
// }

/*If its raining, take an umbrella. Otherwise enjoy the sunshine.*/

// let wheather = "Rainy";
// if (wheather == "Rainy") {
//   console.log("Take Umbrella");
// } else {
//   console.log("Enjoy the sunshine");
// }

/*WAP to check the grade of a student as per there marks*/

// let studentMarks = 15;
// if (studentMarks >= 90) {
//   console.log("A Grade");
// } else if (studentMarks >= 75) {
//   console.log("B Grade");
// } else if (studentMarks >= 55) {
//   console.log("C Grade");
// } else if (studentMarks >= 36) {
//   console.log("D Grade")
// } else {
//   console.log("You are Fail");
// }

/*WAP to enter into a club. if your age is greater than or equal to 18 also need and ID for it.*/

// let age = 19;
// const hadID = true;
// if (age >= 18) {
//   if (hadID) {
//     console.log("Welcome to the hell");

//   } else {
//     console.log("We Need Your ID Proof");

//   }
// } else {
//   console.log("You are restricted in club");

// }

/* A website gives discount based on the total shopping cart amount

WAP where:
1. If the cart value is less than $50, no discount is applied.
2. If the cart value is between $50 and $100, apply a 10% discount.
3. If the cart value is more than $100, apply a 20% discount.
Display the final cart total after the discount.*/

// let shoppingAmount = 50;
// let finalAmount;
// if (shoppingAmount < 50) {
//   finalAmount = shoppingAmount;
//   console.log(`No Discount will be applied on ${finalAmount} it is less , you have to shop atleast 50$ for discount`);
// } else if (shoppingAmount >= 50 && shoppingAmount <= 100) {
//   finalAmount = shoppingAmount - (shoppingAmount * 0.1);
//   console.log(`Congratulation for 10% discount on shopping of ${finalAmount}`);
// } else if (shoppingAmount >= 100) {
//   finalAmount = shoppingAmount - (shoppingAmount * 0.2);
//   console.log(`Congratulation for 20% discount on shopping of ${finalAmount}`);
// }

/* on a video-streaming platform verify user access to premium content  

WAP to check if a user has a valid subscription. If the user has a subscription, further check if the subscrption is "premium" or "standard".

If "premium", display "Access to all content".
If "standard", display "Access to limited content".
If the user doesn't have a subscrption, display "Please subscription to access content".
*/

let subscriptionType = "No Subscrption";
let hasSubscription = true;

if (hasSubscription) {
  if (subscriptionType == "premium") {
    console.log("Access to all content");
  } if (subscriptionType == "standard") {
    console.log("Access to limited content");
  } else {
    console.log("Unknown Subscription");
  }
} else {
  console.log("Please subscription to access content");
}