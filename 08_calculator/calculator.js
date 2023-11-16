const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	const sum = array.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue
  },0);
  return sum;
};

const multiply = function(array) {
	const sum = array.reduce((a, b)=> a*b, 1)
  return sum;
};

const power = function(num1, num2) {
  return num1 ** num2
};

const factorial = function(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
