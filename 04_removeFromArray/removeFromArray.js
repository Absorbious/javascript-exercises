const removeFromArray = function (arr, ...args) {
  let array = arr;
  let restArgs = args;
  let result = array.filter((param) => !restArgs.includes(param));
  return result;

  
};

// Do not edit below this line
module.exports = removeFromArray;
