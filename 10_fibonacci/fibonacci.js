const fibonacci = function(fib) {
    const num = parseInt(fib);

    if (num < 0) return "OOPS"

    let n1 = 0, n2 = 1, nextTerm;

    for (let i = 1; i <= num; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
