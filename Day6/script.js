/*Scenior: On a video-steaming platform, verify user access to premium content. 
Question: WAP to check if a user has a valid subscription. If the user has a subscription, futher 
check if the subscription is "premium" or "standard".

If "premium", display "Access to all content".
If "standard", display "Access to limited content".
If the user doesn't have a subscription, display "Please subscribe to access content".
*/

let hasSubscription = true;
let Subscription = "premium";

// if (hasSubscription) {
//   if (Subscription === "premium") {
//     console.log("Access to all content")
//   } else {
//     console.log("Access to limited content")
//   }
// } else {
//   console.log("Please subscribe to access content")
// }

let arr = [1, 3, 2, 5, 9, 4];

function check(arr) {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }

  }

  return max
}

console.log(check(arr));
