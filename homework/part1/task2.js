// 2.Find the Length of a String
// Find out how many characters are in the string Given: let question = "Can you solve this problem?";
// Expected Result: 27
// question.


console.log()
let str = "Can you solve this problem?"

console.log("Remove space:",calcCharacter(removeSpace(str)));
console.log("All character:",calcCharacter(str))
function removeSpace(str){
    return str.replaceAll(' ','');
}
function calcCharacter(str){
    return str.length;
}