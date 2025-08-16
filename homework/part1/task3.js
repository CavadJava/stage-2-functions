
// 3.Replace a Word in a String
// Replace the word "boring" with "exciting" in the string Given: let activity = "This game is boring";
// Expected Result: "This game is exciting"
// activity.


let activity = "This game is boring";
console.log(replaceActivity(activity, "boring", "exciting"))
function replaceActivity(result, oldWord, newWord){
    return result.replaceAll(oldWord,newWord);
}