// 5: FizzBuzz
// Task: Write a function fizzBuzz that prints numbers from 1 to n.
// But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers that are multiples of both 3 and 5, print "FizzBuzz".
// fizzBuzz(15);

fizzBuzz3(15);
function fizzBuzz(n) {
    for(var i=1;i<=n;i++){
        if(i%3==0 && i%5==0){
            console.log("FizzBuzz");
        }else if(i%3==0){
            console.log("Fizz");
        }else if(i%5==0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
function fizzBuzz2(n) {
    for(var i=1;i<=n;i++){
        i%3==0 && i%5==0 ? console.log("FizzBuzz") :
                i%3==0 ? console.log("Fizz") :
                    i%5==0 ? console.log("Buzz") : console.log(i);
    }
}

function fizzBuzz3(n) {
    for(var i=1;i<=n;i++){
        divideOnThree(i) && divideOnFive(i) ? console.log("FizzBuzz") :
                divideOnThree(i) ? console.log("Fizz") :
                    divideOnFive(i) ? console.log("Buzz") : console.log(i);
    }
    function divideOnThree(i){
        return i%3==0;
    }
    function divideOnFive(n){
        return i%5==0;
    }
}

function fizzBuzz4(n) {
    for(var i=1;i<=n;i++){
        return divideToNumber(i,3) && divideToNumber(i,5) ? console.log("FizzBuzz") :
                divideToNumber(i,3) ? console.log("Fizz") :
                    divideToNumber(i,5) ? console.log("Buzz") : console.log(i);
    }

    function divideToNumber(i,d){
        return i%d==0;
    }
}