// 3: Sum of Digits
// Task: Write a function sumDigits that takes a number as an argument and returns the sum of its digits.
// console.log(sumDigits(123)); // Output: 6

console.log(sumDigits2(123)); // Output: 6
function sumDigits(number){
    var sum = 0;
    for(var i of number.toString().split('')){
        sum+=parseInt(i);
    }
    return sum;
}

function sumDigits2(number){
    return number.toString().split('').reduce((a,b)=>parseInt(a)+parseInt(b));
}
