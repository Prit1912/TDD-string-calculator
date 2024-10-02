function add(numberString) {
  // check for empty string
  if (!numberString?.length) {
    return 0;
  }

  /* check for below input scenarios
  1. Single number input
  2. multiple number input separated by comma 
  3. handle new line in input string
  4. handle differnt custom delimeters
  */
  let delimiter = /[\n,]/; // Default delimiter
  if (numberString.startsWith("//")) {
    const parts = numberString.split("\n");
    // Extract custom delimiter which is after //
    delimiter = new RegExp(`[${parts[0][2]}]`);
    numberString = parts[1];
  }

  let numArray = numberString.split(delimiter);
  return numArray.reduce((sum, num) => sum + parseInt(num), 0);
}

module.exports = { add };
