/*Create a "Number Knock" game. (Ask the user to keep guessing the number until the user enters correct guess).*/

// let computerNumber = Math.floor(Math.random() * 10 + 1);
// let guessNumber = null;

// while (guessNumber !== computerNumber) {
//   guessNumber = Number(prompt("Enter a number from 0 to 10"));

//   if (isNaN(guessNumber)) {
//     alert("Invalid input, please try again!");
//     continue; // Skip rest of the loop and ask again
//   }

//   if (guessNumber < computerNumber) {
//     alert("Guessing number is too low, please try again!");
//   } else if (guessNumber > computerNumber) {
//     alert("Guessing number is too high, please try again!");
//   } else {
//     alert("Congratulations! You guessed the correct number...");
//   }
// }


/*Simple Password Checker (Fixed Attempts).*/

// let passwords = "hello123";
// let numberOfAttempts = 0;
// let userInput = null;

// while (userInput !== passwords && numberOfAttempts < 3) {

//   userInput = prompt("Enter your password: ");
//   numberOfAttempts++;

//   if (userInput === passwords) {
//     alert("Your password is correct");
//     break;
//   } else if (numberOfAttempts >= 3) {
//     alert("You have maximum attemp, Sorry !!!")
//   } else {
//     alert("Your password is incorrect");
//   }
// }


/*Print the following Pattern. (Build it for nth numbers)
1
1 2
1 2 3
1 2 3 4
1 2 3 4 5*/

// for (let i = 1; i <= 5; i++) {
//   let str = '';

//   for (let j = 1; j <= i; j++) {
//     str += j + ' ';
//   }
//   console.log(str);
// }