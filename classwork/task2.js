console.log(printEvens(10));

function printEvens(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        if(i % 2 === 0)
            result.push(i);
    }
    return result.join(' ');
}