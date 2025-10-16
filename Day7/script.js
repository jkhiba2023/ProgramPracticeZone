/*Check if Number is Divisible by 3 or 5 or Both. Print "Fizz" for multiples of 3, "Buzz" for multiples of 5,
"FizzBuzz" for both.*/

// let userNumber = Number(prompt("Enter Number "));
// if (userNumber % 3 === 0 && userNumber % 5 === 0) {
//   console.log("FizzBuzz");
// } else if (userNumber % 3 === 0) {
//   console.log("Fizz");
// } else if (userNumber % 5 === 0) {
//   console.log("Buzz");
// } else {
//   console.log("Invalid Input");
// }

/* Create a simple ATM Program.
User can choose:
1. Check Balance
2. Deposit
3. Withdraw
4. Exit

Note that in case of "Deposit" if deposit amount is less than 1Rs produce error otherwise deposit the amount and
show the message with a new balance. And in case of "Withdraw" if withdraw amount is greater than balance then or
less than 1Rs then product error otherwise withdraw amount and show remaining balance.
*/

// Simple ATM Program

// let choiceSelected = Number(prompt("Choose service:\n1. Check Balance\n2. Deposit\n3. Withdraw\n4. Exit"));
// let mainBalance = 2000;

// if (choiceSelected === 1) {
//   // Check Balance
//   console.log(`Your main balance is ₹${mainBalance}`);

// } else if (choiceSelected === 2) {
//   // Deposit
//   let depositBal = Number(prompt("Enter Deposit Amount:"));
//   if (depositBal >= 1) {
//     mainBalance += depositBal;
//     console.log(`You deposited ₹${depositBal}.`);
//     console.log(`Your new balance is ₹${mainBalance}.`);
//   } else {
//     console.log("⚠️ Invalid deposit amount! Please enter at least ₹1.");
//   }

// } else if (choiceSelected === 3) {
//   // Withdraw
//   let withdrawBal = Number(prompt("Enter Withdrawal Amount:"));
//   if (withdrawBal < 1) {
//     console.log("⚠️ Invalid withdrawal amount! Minimum ₹1 required.");
//   } else if (withdrawBal > mainBalance) {
//     console.log("⚠️ Insufficient balance!");
//   } else {
//     mainBalance -= withdrawBal;
//     console.log(`You withdrew ₹${withdrawBal}.`);
//     console.log(`Remaining balance: ₹${mainBalance}.`);
//     console.log("💵 Please collect your cash.");
//   }

// } else if (choiceSelected === 4) {
//   // Exit
//   console.log("Thank you for using our ATM service. Goodbye!");

// } else {
//   console.log("⚠️ Invalid choice! Please select 1 to 4.");
// }

