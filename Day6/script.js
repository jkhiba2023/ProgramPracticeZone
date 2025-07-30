/*Create a simple calculator. Take two numbers and an operator (+,-,*,/)
and calculate the result using switch.*/

// let n1 = 25;
// let n2 = 5;
// let operators = prompt("Enter the operation");

// switch (operators) {
//   case "+":
//     let add = n1 + n2;
//     console.log(add);
//     break;
//   case "-":
//     let sub = n1 - n2;
//     console.log(sub);
//     break;
//   case "*":
//     let multi = n1 * n2;
//     console.log(multi);
//     break;
//   case "/":
//     let div = n1 / n2;
//     console.log(div);
//     break;
//   case "%":
//     let rem = n1 % n2;
//     console.log(rem);
//     break;
//   default:
//     console.log("Invalid Input");
//     break;
// }


/*Create a Simple ATP Program
 user can choose:
   1. Check Balance
   2. Deposit
   3. Withdraw
   4. Exit.

   Note that in case of "Deposit" if the deposit amount is less than 1Rs produce error otherwise deposit the amount
   and show the message with a new balance. And in case of "Withdraw" if withdraw amount is greater than balance then
   or less than 1rs than produce error otherwise withdraw amount and show remaining balance.
*/

// let currentBal = 5000;
// let seletChoice = Number(prompt("Please Select Your Choice 1.Check Balanc 2.Deposite 3.Withdraw 4.Exit"));

// if (seletChoice === 1) {
//   console.log(`Your current balance is ${currentBal}`);
// } else if (seletChoice === 2) {
//   let depositAmount = Number(prompt("Enter Your Deposite Amount"));
//   if (depositAmount > 0) {
//     currentBal += depositAmount;
//     console.log(`Your current balance is ${currentBal}`);
//   } else {
//     console.log("Invalid Amount")
//   }
// } else if (seletChoice === 3) {
//   let withdrawAmount = Number(prompt("Enter your withdraw amount"));
//   if (withdrawAmount > 0 && withdrawAmount <= currentBal) {
//     currentBal -= withdrawAmount;
//     console.log(`Your current balance is ${currentBal}`);
//   } else if (withdrawAmount > currentBal) {
//     console.log(`You Have Insufficient Balance`);
//   } else {
//     console.log("Invalide Valid Withdrawel amount");
//   }
// }
// else {
//   console.log("Thank You For Taking Our Service");
// }


