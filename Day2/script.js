//WAP to make first alphabate as capital rest remain small.
//Input: "i am writing js code."
//Output:"I Am Writing Js Code."

let str1 = "i am writing js code";

function letterCap(str1) {
  let arrWords = str1.split(" ");
  for (let i = 0; i < arrWords.length; i++) {
    arrWords[i] = arrWords[i].charAt(0).toUpperCase() + arrWords[i].slice(1, arrWords.length);
  }
  return arrWords.join(" ");
}
console.log(letterCap(str1));