function add(numberString) {
  // check for empty string
  if (!numberString?.length) {
    return 0;
  }

  /* check for below input scenarios
  1. Single number input
  2. multiple number input separated by comma 
  3. handle new line in input string
  */
  const numArray = numberString.split(/[\n,]/);
  const numSum = numArray.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
  return numSum;
}

module.exports = { add };
