// 4.Extract a Substring
// Extract the word "Adventure" from the string headline .
//     Given: let headline = "Choose Your Adventure!";
// Expected Result: "Adventure"


let headline = "Choose Your Adventure!";

console.log(findWord(headline));
function findWord(headline){
    return headline.substring(findIndexOfWord(headline),headline.length-1);
}
function findIndexOfWord(headline){
    return headline.indexOf("A")
}