function add(numberString) {
  // check for empty string
  if (!numberString?.length) {
    return 0;
  }

  // check for numtple number input separated by comma
  const numArray = numberString.split(",");
  const numSum = numArray.reduce((acc, curr) => {
    return acc + parseInt(curr);
  }, 0);
  return numSum;
}

module.exports = { add };
