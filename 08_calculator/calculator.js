const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  if(array.length == 0){
    return 0;
  } else{
    const sumArray = array.reduce((num, nextNum) => {
      return num + nextNum;
    })
    return sumArray;
  }
  
};

const multiply = function(array) {
  if(array.length == 0){
    return 0;
  } else{
    const sumArray = array.reduce((num, nextNum) => {
      return num * nextNum;
    })
    return sumArray;
  }
};

const power = function(a,b) {
  return Math.pow(a,b);
};

const factorial = function(num) {
	let result = 1;
  if (num == 0 || num == 1){
    return result;
  } else {
    for (let i = num; i >= 1; i--){
      result = result * i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
