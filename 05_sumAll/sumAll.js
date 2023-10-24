const sumAll = function(min, max) {
    // TC#3 Works with larger number first
    if (min > max){
        let temp = min;
        min = max;
        max = temp;
    }
    // TC#4 Negative numbers
    if (min < 0 || max < 0)
        return "ERROR"
    
    if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

    let sum = 0;
    for (let i = min; i<=max; i++){
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
