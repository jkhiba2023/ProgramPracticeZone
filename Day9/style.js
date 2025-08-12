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

/*
Build a simple Text-Based Adventure Game:

"You wake up in the dark forest ...."
"Do you go 'left' or 'right'?".

"after choosing left:"

"You walk into a swamp..."
"You see something shiny in the mud. Do you pick it up? (yes or no)"
"if yes:" "It's a magic stone! You are teleported to safety. You Win!!!"
"if no:" "You sink slowly into the mud" "Game Over".

"after choosing right:"

"You find a cave...."
"Do you want to enter inside a cave ? (yes or no)"
"if yes:" "A dragon wakes up and chases you away. You barely escape!!!" "Game Over!!!!".
"if no:" "You set up camp outside the cave. A peaceful night under the stars. "You Live"


"Do you want to play again ? (Yes or no)".
*/

alert("You wake up in the dark forest ...");
let playGame = prompt("Press yes or no");
while (playGame === 'yes') {

  let userChoice = prompt("Do you go 'left' or 'right' ?")
  if (userChoice === "left") {
    alert("You walk into a swamp...");
    userChoice = prompt('Do you pick it up? (yes or no)');
    if (userChoice === "yes") {
      alert("It's a magic stone! You are teleported to safety.");
      alert("You Win!!!");
      playGame = prompt("Do You Want to play again? (yes or no)")
      if (playGame === "no") {
        alert("Hope You enjoyed this game");
      }
    } else {
      alert("You sink slowly into the mud");
      alert("Game Over!!!");
      playGame = prompt("Do You Want to play again? (yes or no)")
      if (playGame === "no") {
        alert("Hope You enjoyed this game");
      }
    }
  } else if (userChoice === "right") {
    alert("You find a cave....");
    userChoice = prompt("Do you want to enter inside a cave ? (yes or no)")
    if (userChoice === 'yes') {
      alert("A dragon wakes up and chases you away. You barely escape!!!");
      alert("Game Over!!!")
      playGame = prompt("Do You Want to play again? (yes or no)")
      if (playGame === "no") {
        alert("Hope You enjoyed this game");
      }
    } else {
      alert("You set up camp outside the cave. A peaceful night under the stars.")
      alert("You lose!!!")
      playGame = prompt("Do You Want to play again? (yes or no)")
      if (playGame === "no") {
        alert("Hope You enjoyed this game");
      }
    }
  } else {
    alert("Invalid input");
  }

}


/*Check if a number is Positive, Negative, or Zero*/

// let enterNumber = parseInt(prompt("enter number to check positive, negative or zero"));
// if (enterNumber >= 1) {
//   console.log("Enter number is positive");
// } else if (enterNumber <= -1) {
//   console.log("Enter number is negative");
// } else if (enterNumber === 0) {
//   console.log("Enter number is zero");
// } else {
//   console.log("You have enter invalid Data");
// }