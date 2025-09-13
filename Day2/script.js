/*On a booking website, check if the user's age is valid for booking: Age should be at least 18.
Write a condition ton check and display a message: "Eligible for booking" if the user is 18 or older.
"Not eligible for booking" otherwise.*/

// let age = prompt(Number17("Enter Your Age"));
// let check = age >= 18 ? "Eligible for booking" : "Not Eligible for booking";
// console.log(check);


/*On a login page, verify the user's credentials: Check if uesrname is not empty AND password is not empty(&& operator).
if either is empty, display an error message: "Both filed are required."*/

// let username = prompt("Enter Your Your Name");
// let password = prompt("Enter Your Password");
// let logInDetails = username == "Jabir" && password == "Jabir@123" ? "Your Are Logged In" : "Check the details";
// console.log(logInDetails);

/*Find the largest number from given three numbers.
a=5, b=2, c=12*/

let a = 53;
let b = 22;
let c = 12;
let largestNumber = a > b ? (a > c ? a : c) : (b > c ? b : c);
console.log(largestNumber);