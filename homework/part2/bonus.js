// Bonus Task
//     •Reverse a String
//     •Reverse the string "Technology" using a combination of string and array methods.
//     •Given: let word = "Technology";
//     •Expected Result: "ygolonhceT"


var word = "Technology";

console.log(word.split("").reverse().join(""));
console.log(word.split("").reduce((prev, curr) => curr + prev, "-"));
