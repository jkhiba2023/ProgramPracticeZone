/*Give choice to the user to select theme color and set the selected theme color and console it.*/

// let color = prompt("Enter your theme color");

// switch (color) {
//   case "red":
//     console.log("red");
//     break;
//   case "green":
//     console.log("green");
//     break;
//   case "yellow":
//     console.log("yellow");
//     break;
//   case "blue":
//     console.log("blue");
//     break;
//   case "pink":
//     console.log("pink");
//     break;
//   case "violet":
//     console.log("violet");
//     break;
//   default:
//     console.log("Invalid color");
// }

/*Find the smallest of three numbers. Numbers are given by the user.*/

// let n1 = Number(prompt("Enter first Number"));
// let n2 = Number(prompt("Enter second Number"));
// let n3 = Number(prompt("Enter third Number"));

// let result = (n1 < n2) ? (n1 < n3 ? n1 : n3) : (n2 < n3 ? n2 : n3);
// console.log(result);

// if (n1 <= n2 && n1 <= n3) {
//   console.log(n1);
// } else if (n2 <= n1 && n2 <= n3) {
//   console.log(n2);
// } else {
//   console.log(n3);
// }


/*WAP to manage Role-Based Access Control
Given a user role ("admin","editor","viewer")
Admin: full access
Editor: edit access
Viewer: read-only
Any other: no access
Use switch*/

// let userRole = prompt("Enter your role");

// switch (userRole) {
//   case "admin":
//     console.log("You have full access");
//     break;
//   case "editor":
//     console.log("You have edit access");
//     break;
//   case "viewer":
//     console.log("You can only read");
//     break;
//   default:
//     console.log("You are not accessable");
//     break;
// }


/*Check if Number is Divisible by 3 or 5 or Both. Print "Fizz* for multible of 3 ,"Buzz" for multiples of 5, "FizzBuzz" for both.*/

// let num = 15;
// for (let i = 1; i <= num; i++) {
//   if (num % 3 === 0 && num % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (num % 3 === 0) {
//     console.log("Fizz");
//   } else if (num % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(`${num} is neither divible by 3 nor divible by 5`);
//   }
// }