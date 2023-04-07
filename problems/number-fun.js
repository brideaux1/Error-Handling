function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if (n < 1 || n > 1000000) {
    throw new RangeError("Argument must be between 1 and 1000000");
  }

  return 1 / n;
  // Your code here
}

module.exports = {
  returnsThree,
  reciprocal,
};
