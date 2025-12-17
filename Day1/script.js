/*Reverse a string*/

// let str="Jabir";
// let newStr=str.split("")
// console.log(newStr);

// let res=str.split("").reverse().join('');
// console.log(res);



// function reverseStr(str){
//  let res="";
//   for(let i=newStr.length-1;i>=0;i--){
//     res+=newStr[i];
// }
//   return res;
// }

// console.log(reverseStr(newStr));

//Find the largest Number in an array

let arr = [12, 44, 28, 11, 16];


function largestNum(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(largestNum(arr));