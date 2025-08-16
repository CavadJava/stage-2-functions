// 1: Count Vowels in a String
// Task: Write a function countVowels that takes a string as
// an argument and returns the number of vowels in the string.
// console.log(countVowels("javascript")); // Output: 3
console.log(countVowels("javascript"))
function countVowels(str) {
    const vowels = ['a','e','u','i','o'];
    let count = 0;
    for(let i = 0; i<str.length;i++){
        for(let j = 0; j<vowels.length;j++){
            if(str[i]===vowels[j]){
                count++;
            }
        }
    }
    return count;
}
console.log(countVowels1("javascript"))
function countVowels1(str){
    const vowels = ['a','e','u','i','o'];
    let count = 0;
    for(var item of str){
        for(var vowel of vowels){
            item==vowel ? count++ : count;
        }
    }
    return count;
}
