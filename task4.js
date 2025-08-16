// 4: Generate Multiplication Table
// Task: Write a function multiplicationTable that takes a number
// as an argument and prints the multiplication table for that number up to 10.
const ten = 10;
multiplicationTable(3);
function multiplicationTable(num) {
    for(i=1;i<=ten;i++){
        console.log(num+"x"+i+"="+num*i);
    }
}