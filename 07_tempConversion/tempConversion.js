const ftoc = function(degreeF) {
  return Math.round(((degreeF - 32)/1.8) * 10) / 10;
};

const ctof = function(degreeC) {
  return Math.round(((degreeC * 1.8) + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
