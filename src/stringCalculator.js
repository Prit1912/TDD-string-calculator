function add(numberString) {
  // check for empty string
  if (!numberString?.length) {
    return 0;
  }

  // check for single number input
  if (numberString?.length === 1) {
    if (!isNaN(parseInt(numberString))) {
      return parseInt(numberString);
    }
    return 0;
  }
}

module.exports = { add };
